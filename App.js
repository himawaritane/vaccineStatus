"use strict";
exports.__esModule = true;
exports.App = void 0;
//import * as path from 'path';
var express = require("express");
var logger = require("morgan");
//import * as mongodb from 'mongodb';
//import * as url from 'url';
var bodyParser = require("body-parser");
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');
var cors = require('cors');
var UserModel_1 = require("./model/UserModel");
// import {DataAccess} from './DataAccess';
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Users = new UserModel_1.UserModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-AllowMethods: POST, GET");
            next();
        });
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //#region User
        // Get a user by email
        router.get("/app/user/:zipcode/", function (req, res) {
            var zipcode = req.params.zipcode;
            console.log("Query for user using : " + zipcode);
            _this.Users.retrievezipcode(res, { zipcode: zipcode });
        });
        // Get all users
        router.get("/app/users/", function (req, res) {
            console.log("Query for all users.");
            _this.Users.retrieveAllUsers(res);
        });
        // Add a new user
        router.post("/app/user/", function (req, res) {
            console.log(req.body);
            var jsonObj = req.body;
            _this.Users.model.create([jsonObj], function (err) {
                if (err) {
                    console.log("object creation failed");
                }
            });
            res.sendStatus(200);
        });
        //#endregion User
        this.expressApp.use(cors);
        this.expressApp.use("/", router);
        this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
        this.expressApp.use("/images", express.static(__dirname + "/img"));
        this.expressApp.use("/", express.static(__dirname + "/dist/"));
    };
    return App;
}());
exports.App = App;
