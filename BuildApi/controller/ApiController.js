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
        link: req.body.link,
        frequency: req.body.frequency
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
         {$set : {link: req.body.link,frequency:req.body.frequency}})
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