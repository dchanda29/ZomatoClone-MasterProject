//importing env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet"; //adds security
import passport from "passport";

//import configs
import googleAuthConfig from "./config/google.config";

//microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";

//databse connection
import ConnectDB from "./database/connection";

const zomato = express();

//middlewares applications
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());


//passport configuration
googleAuthConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));

//console.log(process.env.GOOGLE_CLIENT_ID);

zomato.listen(4000, () => ConnectDB()
    .then(() => console.log("Server is running."))
    .catch(err =>
        console.log("Server is running but Database Connection failed...")));