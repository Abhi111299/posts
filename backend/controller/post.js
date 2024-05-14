import PostModel from "../models/post.js";

// Display list of all Posts.
export const AllPosts = async(req, res) => {
    const posts = await PostModel.find().exec();
    return res.status(200).json({
        status: true,
        count: posts.length,
        data: {
            posts
        }
    });
};

// Get post identified by Id
export const GetPostById = async (req, res) => {
    try {
        const post = await PostModel.find({_id: req.params.id}).exec();
        return res.status(200).json({
            status: true,
            count: post.length,
            data: {
                post
            }
        });
        
    } catch (error) {
        let errors = {};
        switch (error.name) {
            case 'CastError':
                    errors[error.name] = error.message;
                break;

            default:
                break;
        }
        return res.status(400).json({
            status: false,
            errors
        });
    }
};

// Create new post
export const CreatePost = async (req, res) => {
    const post = PostModel;

    try {
        const postObj = await post.create(req.body);
        return res.status(201).json({
            status: true,
            count: postObj.length,
            data: {
                post: postObj
            }
        });

    } catch (error) {
        let errors = {};
        if (error.name === "ValidationError") {    
            Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
            });
        }
        else if (error.name === "MongoServerError") {
            errors[error.name] = error.message;
        }
        return res.status(400).json({
            status: false,
            errors
        });
    }
};

// Delete post identified by Id.
export const DeletePostById = async(req, res) => {
    console.log(req.params.id);

    try {
        const postObj = await PostModel.findById(req.params.id);

        if(!postObj){
            return res.status(404).json({
                status: false,
                count: 0,
                error: {
                    message:"Post not found, Please refresh the page"
                }
            });
        }
        const post = await PostModel.findOneAndDelete({_id: req.params.id}).exec();
        console.log(post);
        return res.status(200).json({
            status: true,
            count: postObj.length,
            data: {
                post:post
            }
        });
        
    } catch (error) {
        let errors = {};
        switch (error.name) {
            case 'CastError':
                errors[error.name] = error.message;
                break;
            
            case 'TypeError':
                errors[error.name] = error.message;
                break;
            
            default:
                errors[error.name] = error.message;
                break;
        }
        return res.status(400).json({
            status: false,
            errors
        });
    }
};

export const UpdatePostById = async(req, res) => {
    
    let errors = {};
    try {
        const post = await PostModel.findOneAndUpdate({_id: req.params.id}, req.body).exec();
    
        if (!post){
            errors['invalid_id'] = `Invalid post id supplied ${req.params.id}`;
        }
        const updatedPostObj = await PostModel.findOne({_id: req.params.id}).exec();

        return res.status(200).json({
            status: true,
            count: updatedPostObj.length,
            data: {
                post: updatedPostObj
            }
        });
    } catch (error) {
        switch (error.name) {
            case 'CastError':
                errors[error.name] = error.message;
                break;
            
            case 'TypeError':
                errors[error.name] = error.message;
                break;
                
            default:
                errors[error.name] = error.message;
                break;
        }
        return res.status(400).json({
            status: false,
            errors
        });
    }
}