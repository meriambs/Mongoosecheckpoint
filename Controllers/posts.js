

//GET :  RETURN ALL USERS :
const findPost= async(req, res)=>{
    // const returnUser = await Person.find({name:req.parms.name});
    try{
        //ici on a ajout de la partie user user pour pouvoir envoyer le post 
const user = await User.findById(req.user.user.id).select('-password');

const newPost = new Post({
    text: req.body.text,
     name: user.name, 
     avatar: user.avatar,
    user: req.user.id
});

const post = await newPost.save();

res.json(post)

    }
    catch(error){
        console.error(error.message);
        res.status(500).json('server eroor')
    }
    
    // return res.send("hey")
}

module.exports={
    findPost
    }