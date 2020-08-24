import {Router} from "express";
import {check} from "express-validator";
import UserController from "../controllers/UserController";

export default class UserRoutes {

  public readonly router: Router
  private readonly userController: UserController = new UserController()

  constructor() {
    this.router = Router()
    this.routes();
  }

  private routes(): void {
    this.router.post('/signup',
      [
        check('name').not().isEmpty(),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({min: 6})
      ],
      this.userController.signup
    );
    this.router.post('/signin',
      [
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({min: 6})
      ],
      this.userController.signin
    )
  }
}