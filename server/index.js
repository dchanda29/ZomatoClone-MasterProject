//importing env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet"; //adds security
import passport from "passport";

//import configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config"

//microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/Orders";
import Reviews from "./API/Reviews";
import User from "./API/User";
import Menu from "./API/Menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";

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
routeConfig(passport);

//Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);

zomato.get("/", (req, res) => res.json({ message: "Setup Success" }));
const port = process.env.PORT || 4000;

zomato.listen(port, () =>
    ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
        console.log("Server is running, but database connection failed... ")
    )
);