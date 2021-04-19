
// ****-Create a person having this prototype:-****


const mongoose = require("mongoose");
let peopleSchema = new mongoose.Schema({
    name:{type:String,
      require:true},
     date: { type: Date, default: Date.now() }
    
})
const Person = mongoose.model("Person", peopleSchema);

module.exports = Person;