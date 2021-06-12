//import * as path from 'path';
import * as express from "express";
import * as logger from "morgan";
//import * as mongodb from 'mongodb';
//import * as url from 'url';
import * as bodyParser from "body-parser";

//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var cors = require('cors');


import { UserModel } from "./model/UserModel";
// import {DataAccess} from './DataAccess';

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public expressApp: express.Application;

  public Users: UserModel;

  // Id Generator

  public user_idGenerator: number;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();

    this.Users = new UserModel();

  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(logger("dev"));
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
   
    this.expressApp.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); 
      res.header("Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-AllowMethods: POST, GET")
      next();
    });
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    //#region User

    // Get a user by email
    router.get("/app/user/:zipcode/", (req, res) => {
      var zipcode = req.params.zipcode;
      console.log("Query for user using : " + zipcode);
      this.Users.retrievezipcode(res, { zipcode: zipcode });
    });

    // Get all users
    router.get("/app/users/", (req, res) => {
      console.log("Query for all users.");
      this.Users.retrieveAllUsers(res);
    });

    // Add a new user
    router.post("/app/user/", (req, res) => {
      console.log(req.body);
      var jsonObj = req.body;
      this.Users.model.create([jsonObj], (err) => {
        if (err) {
          console.log("object creation failed");
        }
      });
      res.sendStatus(200);
    });
    //#endregion User

    this.expressApp.use(cors)
    this.expressApp.use("/", router);
    this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
    this.expressApp.use("/images", express.static(__dirname + "/img"));
    this.expressApp.use("/", express.static(__dirname + "/dist/"));
  }
}

export { App };