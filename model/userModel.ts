import Mongoose = require("mongoose");
import { DataAccess } from "../DataAccess";
import { IUserModel } from "../interfaces/IUserModel";

let mongooseConnection = DataAccess.mongooseConnection;

class UserModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        userId: Number,
        name: String,
        email: String,
        vaccineStatus:  { type: Boolean, required: true, unique: true },
        zipcode: { type: String, required: true, unique: true },

      },
      { collection: "users" }
    );
  }

  public createModel() {
    this.model = mongooseConnection.model<IUserModel>("User", this.schema);
  }

  public retrievezipcode(response: any, filter: Object) {
    var query = this.model.findOne(filter);
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }

  public retrieveAllUsers(response: any) {
    var query = this.model.find();
    query.exec((err, itemArray) => {
      response.json(itemArray);
    });
  }
}
export { UserModel };