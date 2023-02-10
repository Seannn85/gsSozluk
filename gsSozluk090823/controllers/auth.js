
const User = require('../models/User');

const register = async (req, res, next) => {
try {
    const name = "Goktug Koyun";
    const email = "goktuxxg@gmail.com";
    const password = "1234555";


    // async await


const user = await User.create({
    name,
    email,
    password
});

  res.status(200).json({
    success: true,
    data: user
  });
} catch(err){
    console.log(err);
    res.status(500).json({
        success: false,
        message: 'Failed to register user'
      });
    };
    
};

module.exports = {
  register,
};
