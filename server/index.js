require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./User');



const main = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);

    // const user = new User({
    //   name: 'John',
    //   age: 30
    // });

    // await user.save();


    console.log('user:', user);
  } catch (error) {
    console.log('error:', error);
  }

}


main().catch(err => console.log(err));