const Post = require("../Models/Post");


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


// naw get request 
//get all the posts 

const getPosts = async(req, res)=>{

    try{
        //we sort selon le plus recent donc une date negative pour avoir le plus recent .
const posts = await Post.find().sort({date:-1});
res.json(posts)


    }catch(error){
        console.error(error.message);
        res.status(500).json('error servor')
    }
}


const getPostsidii = async(req, res)=>{

    try{
        //we sort selon le plus recent donc une date negative pour avoir le plus recent .
const postt = await Post.findById(req.params.id);

if(!postt){
    return res.status(404).json({msg:'post not find'});
}

res.json(postt)


    }catch(error){
        console.error(error.message);
        if(error.kind === 'ObjectId'){
            return res.status(404).json({msg:'post not find'});
        }
        res.status(500).json('error servor')
    }
}
//ici on a delete post 
const deletePost = async(req, res)=>{

    try{
        const post = await Post.findById(req.params.id);
        //handel if the post doenst exist 
        if(!post){
            return res.status(404).json({msg:'post not find'});
        }
        //delete by only the owner of the post 
        //check on the user to delete 
        if (post.user!== req.user.id){
            return res.status(401).json({msg:'user not autherized'})
        }
        await post.remove();
res.json({msg:'post removed'});

    }catch(error){
        console.error(error.message);
        if(error.kind === 'ObjectId'){
            return res.status(404).json({msg:'post not find'});
        }
        res.status(500).json('error servor')
    }
}
module.exports={
    findPost,
    getPosts,
    getPostsidii,
    deletePost
    }