import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
dotenv.config();

// limiting the file size of image to 30mb
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: true,
  })
);

const root = path.join(__dirname, "/build");

app.use(express.static(root));

// limiting the file size of image to 30mb
app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: true,
  })
);

app.use(cors());

// always put this line after using cors to avoid any type of errors
app.use("/posts", postRoutes); //set the prefix to localhost:5000/posts i.e. all the routes will start with /posts prefix
app.use("/users", userRoutes);
app.get("/", (req, res) => {
  res.send("HEWWO MEMORIES :3");
});
app.use("*", (req, res) => {
  res.sendFile(path.join(root, "index.html"));
});

const CONNECTION_URL = process.env.CONNECTION_URL; //database connection string

const PORT = process.env.PORT || 5000; //creating a port on which our server will be running

mongoose
  .connect(CONNECTION_URL, {
    //connecting mongoose in order to save data on mongoDB
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });

// mongoose.set('useFindAndModify', false);
