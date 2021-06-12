import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
    userId: number;
    name: string;
    email: string;
    vaccineStatus: boolean;
    zipcode: string;
}
export { IUserModel};