
// ****-Create a person having this prototype:-****
let mongoose = require("mongoose");

//Create a person having this prototype:
let profilSchema = new mongoose.Schema({
 user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'user'
 },
 company:{
   type:String,
 },
 location:{
   type:String,
 },
 githubUser:{
   type:String,
 },
 webSite:{
   type:String,
 },
 LastDeploma:{
   type:String,
 }
});

module.exports = Profil = mongoose.model("profil", profilSchema);