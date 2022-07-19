const Api = require('../models/Api')

const getData =async (req,res)=>{
    try{
        const posts = await Api.find();
        res.json(posts);
    }catch(err) {
        res.json({message: err});
    }
}

const sendData = async (req, res)=>{
    console.log(req.body)
    const post = new Api({
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount,
        image: req.body.image,
    })
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }
        catch(err) {
            res.json({message: err})
        }
    
    // post.save()
    // .then(data => {
    //     res.json(data);
    // })
    // .catch(err => {res.json({message: err})})
}
const specificPost = async (req,res)=>{
try{
    const post = await Api.findById(req.params.pid);
    res.json(post);
}
catch(err){
    res.json({message: err})
}
}

const updateData = async(req, res)=>{
    try{
        const updatedPost = await Api.updateOne({_id: req.params.pid},
         {$set : {title: req.body.title,description:req.body.description,amount:req.body.amount,image:req.body.image}})
         res.json(updatedPost)
    }
    catch(err){
        res.json({message: err})
    }
}

const deleteData = async (req, res)=>{
    try { 
   const removedPost =await Api.remove({_id: req.params.pid})
   res.json(removedPost);
    }
    catch (err){
        res.json({message: err})
    }
}

module.exports = {getData, sendData, updateData, deleteData,specificPost}