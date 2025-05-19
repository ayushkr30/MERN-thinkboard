import express from "express"
import notesRoutes from "./routes/notesRoutes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



//middleware
app.use(cors());
app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);



app.use("/api/notes",  notesRoutes);


connectDB().then(()=> {
app.listen(PORT, ()=> {
    console.log("server started on Port:", PORT);
});
});