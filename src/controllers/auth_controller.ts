import { Request, Response } from 'express';
import User from '../models/user_model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const register = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(400).send("missing email or password");
    }
    try {
        const rs = await User.findOne({ 'email': email });
        if (rs != null) {
            return res.status(406).send("email already exists");
        }
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);
        const rs2 = await User.create({ 'email': email, 'password': encryptedPassword });
        return res.status(201).send({ '_id': rs2._id });
    } catch (err) {
        return res.status(400).send("error missing email or password");
    }
}

const login = async (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;
    if (!email || !password) {
        return res.status(400).send("missing email or password");
    }
    try {
        const user = await User.findOne({ 'email': email });
        if (user == null) {
            return res.status(401).send("email or password incorrect");
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).send("email or password incorrect");
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
        return res.status(200).send({ 'accessToken': token });
    } catch (err) {
        return res.status(400).send("error missing email or password");
    }
}



const logout = async (req: Request, res: Response) => {
    res.status(400).send("unimplemented");
}

export default {
    register,
    login,
    logout
}