import { Observable } from "rxjs";
import { Repository } from "typeorm";
import { userEntity } from "../entity/user.entity";
import { User } from "../model/user.interface";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<userEntity>);
    create(user: User): Observable<User>;
    findAll(): Observable<User[]>;
    findOne(id: number): Observable<User>;
    delete(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
}
