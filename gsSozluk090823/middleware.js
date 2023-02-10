const accessControl = (req, res, next) => {
  const access = true;
  if (!access) {
    res.json({
      seccess: false,
      message: "You are not authorized",
    });
  }

  next();
};


module.exports = {
  accessControl,
};
