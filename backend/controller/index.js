const db = require('../model');

module.exports = {
    login: async(req,res,next)=>{
        try{
            const {email,password} = req.body;
            if(!email){
                return res.json({
                    success:false,
                    error:'invalid email'
                })
            }
            if(!password){
                return res.json({
                    success:false,
                    error:'invalid password'
                })
            }

            const user = await db.User.findOne({where:{email:email}});
            if(!user){
                return res.json({
                    success:false,
                    message:'unauthorized'
                })
            }

            if(password !== user.password){
                return res.json({
                    success:false,
                    message:'invalid user/password combination'
                })
            }

            return res.json({
                success:true,
                message:'login successfull'
            })
        }catch(err){
            throw new Error(err.message)
        }
    },
    signup: async (req,res,next)=>{
        try{
            const {username,password,email} = req.body;
            if(!username){
                return res.json({
                    success:false,
                    message:'invalid username'
                })
            }
            if(!password){
                return res.json({
                    success:false,
                    message:'invalid password'
                })
            }
            if(!email){
                return res.json({
                    success:false,
                    message:'invalid email'
                })
            }
            const newUser = await db.User.create({username,email,password});
            if(!newUser){
                return res.json({
                    success:false,
                    message:'error signing up'
                })
            }
            return res.json({
                success:true,
                message:'signup successfull'
            })
        }catch(err){
            throw new Error(err.message);
        }
    },
    createPost: async (req,res,next)=>{
        try{
            const {post,user} = req.body;
            const isCreated = await db.Post.create({text:post,author:user});
            if(!isCreated){
                return res.json({
                    success:false,
                    message:'cannot create post'
                })
            }
            return res.json({
                success:true,
                message:'post added successfully'
            })
        }catch(err){
            throw new Error(err.message);
        }
    },
    getPosts: async (req,res,next)=>{
        try{
            const posts = await db.Post.findAll();
            return res.json({
                success:true,
                data:posts
            })
        }catch(err){
            throw new Error(err.message)
        }
    },
    deletePost : async (req,res,next)=>{
        try{
            const postId = req.params.postId;
            const isDeleted = await db.Post.destroy({where:{id:postId}});
            if(!isDeleted){
                return res.json({
                    success:false,
                    message:'cannot delete post'
                })
            }
            return res.json({
                success:true,
                message:'post deleted successfully'
            })
        }catch(err){
            throw new Error(err.message);
        }
    }
}