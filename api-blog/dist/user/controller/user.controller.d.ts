import { Observable } from "rxjs";
import { User } from "../model/user.interface";
import { UserService } from "../service/user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    create(user: User): Observable<User | Object>;
    login(user: User): Observable<Object>;
    findOne(param: any): Observable<User>;
    findAll(): Observable<User[]>;
    delete(id: string): Observable<any>;
    updateOne(id: string, user: User): Observable<any>;
}
