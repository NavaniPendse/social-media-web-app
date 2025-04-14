import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register new users
export const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        req.body.password = hashedPass;

        const oldUser = await UserModel.findOne({ email });

        if (oldUser) {
            return res.status(400).json({ message: "This user already exists!" });
        }

        const newUser = new UserModel(req.body);
        const user = await newUser.save();

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Login users
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Sorry, user not found. Please enter a correct email or password." });
        }

        const validity = await bcrypt.compare(password, user.password);

        if (!validity) {
            return res.status(400).json({ message: "Incorrect password. Please try again." });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, process.env.JWT_KEY, { expiresIn: '1h' });

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
