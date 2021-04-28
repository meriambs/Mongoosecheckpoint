const Profile = require('../Models/Profile');
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

 const createProfile = async (req, res) => {
   const {
     company,
     webSite,
     location,
     githubUser,
     twitter,
     LinkedIn,
     LastDeploma,
     status
   }=req.body;

   //build profile object:
   const profilefiled={};
   profilefiled.user= req.user.id;
   if(company)profilefiled.company=company;
   if(webSite)profilefiled.webSite=webSite;
   if(location)profilefiled.location=location;
   if(githubUser)profilefiled.githubUser=githubUser;
   if(twitter)profilefiled.twitter=twitter;
   if(LinkedIn)profilefiled.LinkedIn=LinkedIn;
   if(LastDeploma)profilefiled.LastDeploma=LastDeploma;
   if(status)profilefiled.status=status;
   //ici les parties 
//      console.log('req.body',req.body)
//  const persons = new User(req.body);
//  const t = await persons.save()
try{
let profile = await  Profile.findOne ({user:req.user.id})
if(profile){
profile = await Profile.findByIdAndUpdate({user :req.user.id},{$set:profilefiled},{new:true})

return res.json(profile)
}
//naw we create things 
profile = new Profile(profilefiled);
await profile.save();
return res.json(profile);

}catch(error){
  console.error(error.message);
  res.status(500).send('server error')
}
 }


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
    createProfile
}