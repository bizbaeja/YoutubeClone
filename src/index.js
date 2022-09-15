import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;
const logger = morgan("dev");

app.use(logger);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEidtUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEidtUser);

const vidioRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Watch Video");

vidioRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/video", vidioRouter);
app.use("/watch", userRouter);
const handleListening = () => {
  console.log("서버포트");
};
