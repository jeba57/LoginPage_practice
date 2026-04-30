import { User } from "../models/user.models.js";
import sendEmail from "../utils/sendEmail.js";



const registerUser= async (req, res)=>{
     try {
        const { username , password, email, aadhar}= req.body

        
        if (!username || !password || !email || !aadhar) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

const user = new User(req.body);

    await user.save();
     await sendEmail(email, username);

     res.status(201).json({
      message:  "User created successfully",
      user,
    });



  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




export default registerUser;

