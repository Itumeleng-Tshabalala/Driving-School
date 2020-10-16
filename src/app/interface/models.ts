import { IServer, IUser } from "./imodels";

export class Server implements IServer{

    baseUrl: string = "http://localhost:8000/api";
}

export class User implements IUser{
    name = "";
    surname = "";
    identity_number = "";
    phone_number = "";
    email = "";
}