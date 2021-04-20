
// ****-Create a person having this prototype:-****
let mongoose = require("mongoose");

//Create a person having this prototype:
let postSchema = new mongoose.Schema({
  title:{
      type:String,
      required:true
  }
});

module.exports = Post = mongoose.model("post", postSchema);