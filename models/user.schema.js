import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            unique:true,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    },
    {timestamps: true}
);
userSchema.pre("save", async function (next) {
    //  hash user password before saving using bcrypt
     this.password = await bcrypt.hash(this.password, 12)
  });
  // user password compare
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  const UserModel = mongoose.model('User', userSchema);
  export default UserModel;