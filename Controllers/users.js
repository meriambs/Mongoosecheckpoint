
const  Person  = require('../Models/Person');
//find 
const findUsers = async(req, res) => {
// const persons = await Person.find({name: req.params.name})
const query = req.query; 
console.log("query",query)
const persons = await Person.find(query)
return res.send(persons)
}
//create 
const createUser = async (req, res) => {
    //create the model 
// let Mark = new Person({name:'mark', age:26,favoriteFood:['the','cake','makaroni']})
//  const test = await Mark.save();
const persons = await Person.create(req.body);

return res.send(persons)
}

// //update clasic :

// const updateUser= async(req,res)=>{
// const  foundPerson = await Person.findById(req.params.id);
// const favoritfoodAdd = Person.favoriteFood;
// favoritfoodAdd.push(...req.body.favoriteFood);
// const PersonUpdated = await Person.update({_id:req.params.id},{favoriteFood:favoritfoodAdd})
// return res.send(PersonUpdated)
// }
// //Perform New Updates on a Document Using model.findOneAndUpdate()
// const findandUpdate = async ( req , res)=>{
// const updatedPerson = await Person.findOneAndUpdate({name:req.params.name},req.body,{new:true})
// return res.send(updatedPerson)
// }
// //delete by id :
// const deleteUser = async (req,res)=>{
//     const deltedPerson = await Person.findByIdAndRemove({_id:req.params.id});
//     return res.send(deltedPerson)
// }
// const findandRemove = async (req,res)=>{
//     const deletedName = await Person.remove(req.body);
//     return res.send(deletedName)
// }
// const findQuery = async(req,res)=>{
//     const findPerson = await Person.find(req.body).sort({name:1}).limit(2).select("-age");
//     return res.send(findPerson)
// }

module.exports = {
    findUsers,
    createUser,
    // updateUser,
    // findandUpdate,
    // deleteUser,
    // findandRemove,
    // findQuery
}