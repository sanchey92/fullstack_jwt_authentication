import {Request, Response} from "express";
import {validationResult} from 'express-validator';
import {hash, compare} from "bcryptjs";
import jwt, {Secret} from "jsonwebtoken";
import User, {IUser} from "../models/User";

export default class UserController {

  public async signup(req: Request, res: Response): Promise<any> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) res.json({message: 'Invalid data, please try again!'});

    const {name, email, password} = req.body;

    let existingUser: IUser | null;
    let hashedPassword;

    try {
      existingUser = await User.findOne({email});
    } catch (e) {
      console.log(e)
    }

    if (existingUser!) res.json({message: 'Signup failed please try again later'})

    try {
      hashedPassword = await hash(password, 12);
    } catch (e) {
      console.log(e)
    }

    const newUser: IUser = new User({name, email, password: hashedPassword});

    try {
      await  newUser.save()
    } catch (e) {
      console.log(e)
    }

    res.status(200).json({message: 'User Created!!!'})
  }

  public async signin(req: Request, res: Response): Promise<any> {

    const error = validationResult(res);
    if(!error.isEmpty()) res.json({message: 'Invalid data, please try again!'})

    const {email, password} = req.body;

    let existingUser: IUser | null;
    let isValidPassword: boolean;
    let token: Secret;

    try {
      existingUser = await User.findOne({email})
    } catch (e) {
      console.log(e)
    }

    if (!existingUser!) res.json({message: 'User not found'})

    try {
      isValidPassword = await compare(password, existingUser!.password)
    } catch (e) {
      console.log(e)
    }
    if (!isValidPassword!) res.json({message: 'Invalid password!'})

    try {
      token = await jwt.sign(
        {userId: existingUser!.id, email: existingUser!.email},
        // @ts-ignore
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
      )
    } catch (e) {
      console.log(e)
    }

    res.status(200).json({userId: existingUser!.id, email: existingUser!.email, token: token!})
  }
}