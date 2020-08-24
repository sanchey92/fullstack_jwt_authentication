import express, {Application, urlencoded, json, Router} from 'express';
import {connect} from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import UserRoutes from "./routes/userRoutes";

dotenv.config()

export default class MyServer {

  private readonly port = process.env.PORT || 8000;
  private readonly MONGO_URI = process.env.MONGO_URI!
  private readonly app: Application;
  private readonly userRoutes: Router = new UserRoutes().router

  constructor() {
    this.app = express();
    this.serverConfig();
    this.routesConfig();
    this.configDB().then(() => console.log('connected to db success'));
  }

  private serverConfig(): void {
    this.app.use(json());
    this.app.use(urlencoded({extended: true}));
    this.app.use(cors());
  }

  private async configDB(): Promise<any> {
    try {
      await connect(this.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      })
    } catch (e) {
      console.log(e)
    }
  }

  private routesConfig(): any {
    this.app.use('/auth', this.userRoutes)
  }

  public start(): void {
    this.app.listen(this.port, () => console.log(`server started on port ${this.port}`))
  }
}