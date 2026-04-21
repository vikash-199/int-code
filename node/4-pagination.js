//GET /users?page=1&limit=5
// GET /users?page=2&limit=5

const getUsers = async (req, res) => {
  try {
    //get query params
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    //calculate skip
    const skip = (page - 1) * limit;

    //total count doc
    const total = await User.countDocuments();

    //fetch paginated data
    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit),
      data: users,
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
};

//GET /users?page=1&limit=5&search=vika
const getSearchedUsers = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const page = parseInt(req.query.page);
    const search = req.query.search || '';

    const skip = (page - 1) * limit;

    const query = search ? { name: { $regex: search, $options: 'i' } } : {};

    const total = await User.countDocuments(query);

    const users = await User.find(query).skip(skip).limit(limit);

    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
