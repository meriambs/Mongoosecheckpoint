const Profil = require('../Models/Profile');
const User = require('../Models/User');
//GET :  RETURN ALL USERS :

const findProfil= async(req, res)=>{
  try{
    const returnUser = await Profil.findOne({user:req.user.id}).populate('user',['name','avatar']);
 
 if(!returnUser){
   return res.status(400).json({msg:'there is no profile for this user'})
 }
 res.json(returnUser);
  }catch(error){
     console.error(error.message)
    res.status(500).send('server error'); 
  
  }
}


// POST :  ADD A NEW USER TO THE DATABASE :

// const createUser = async (req, res) => {
//     console.log('req.body',req.body)
// const persons = new Person(req.body);
// const t = await persons.save()

// return res.send(t)
// }


   //PUT : EDIT A USER BY ID 
// const findandUpdate = async ( req , res)=>{
// const updatedPerson = await Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
// return res.send(updatedPerson)
// }


  //   DELETE : REMOVE A USER BY ID 
//   const deleteUser = async (req,res)=>{
//     const deltedPerson = await Person.findByIdAndRemove({_id:req.params.id});
//     return res.send(deltedPerson)
// }
module.exports = {
    findProfil,
  
}