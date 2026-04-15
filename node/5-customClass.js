class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode >= 400 ? 'fail' : 'error';
  }
}

if (!user) {
  return next(new AppError('User not found', 404));
}
