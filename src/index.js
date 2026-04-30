import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./database/database.js";
import router from "./routes/user.routes.js";
import morgan from "morgan";
import cors from "cors";



const app = express();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(cors());

app.use(express.json());

// log all requests
app.use(morgan("dev"));
app.use("/api/users", router);
console.log("ENV TEST:", process.env);


//connect DB and start server not ctreated app.js 
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
