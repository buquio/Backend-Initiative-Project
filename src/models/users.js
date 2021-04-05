const mongoose =require('mongoose');

const userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, 
      unique: true,
      required: true },
    password: { type: String, 
      required: true, 
      trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    
  },
  { timestamps: true }
);

const Users = mongoose.model('Users', userSchema);
module.exports = Users;
