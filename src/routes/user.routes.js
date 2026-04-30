import express from "express";
import registerUser from "../controllers/controllers.js";


const router = express.Router();

router.post("/register", (req, res, next) => {
  console.log("Register route reached"); // <-- add this
  return registerUser(req, res, next);
});


export default router;