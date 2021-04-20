
// ****-Create a person having this prototype:-****
let mongoose = require("mongoose");

//Create a person having this prototype:
let profilSchema = new mongoose.Schema({
  title:{
      type:String,
      required:true
  }
});

module.exports = Profil = mongoose.model("profil", profilSchema);