let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let scopes = require("./scopes");

let RoleSchema = new Schema({
    name: {type: String, require: true},
    scopes: [{type: String, enum:['read-all', 'read-posts', 'manage-posts']}]
});

let UserSchema = new Schema({
    name: { type: String, required: true, unique: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    role: { type: RoleSchema}
});

let User = mongoose.model("User", UserSchema);

module.exports = User;