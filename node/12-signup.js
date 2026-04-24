const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //validate input
    //check user exist
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: 'User already exist' });
    }
    //hash passord
    const hashPassword = await bcrypt.hash(password, 10);

    //create User
    const user = await User.create({
      name,
      email,
      password: hashPassword,
    });

    const token = await jwt.sign({ id: user._id }, 'proccess.env.SECRET_KEY', {
      expiresIn: '7d',
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {}
};
