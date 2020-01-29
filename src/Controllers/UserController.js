import User from "../Models/User";

class UserController {

    async index(req, res) {

        const users = await User.find();

        return res.json(users);
    }

    async store(req, res) {

        const { email } = req.body;

        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create(req.body);
        }

        return res.json(user);
    }
    
}

export default new UserController();
