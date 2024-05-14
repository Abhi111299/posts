import UserModel from "../models/user.js";

// Display list of all users.
export const AllUsers = async(req, res) => {
    const user = await UserModel.find().exec();
    return res.status(200).json({
        status: true,
        count: user.length,
        data: {
            user
        }
    });
};

// Add new User.
export const CreateUser = async (req, res) => {
    const user = UserModel;
    try {
        const userObj = await user.create(req.body);
        return res.status(201).json({
            status: true,
            count: userObj.length,
            data: {
                user: userObj
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
