
// ****-Create a person having this prototype:-****
let mongoose = require("mongoose");

//Create a person having this prototype:
let peapleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
  },
  avatar:{
    type:String,

    required:true, 
  },
  phonenumber:Number,
  age: Number,
  password:{
    type:String,
    required:true
  },
  photo:{
    type:String,
  }
});

module.exports = Person = mongoose.model("Person", peapleSchema);