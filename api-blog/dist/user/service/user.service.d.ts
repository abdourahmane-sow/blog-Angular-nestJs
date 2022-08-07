import { Observable } from "rxjs";
import { AuthService } from "src/auth/services/auth.service";
import { Repository } from "typeorm";
import { userEntity } from "../entity/user.entity";
import { User } from "../model/user.interface";
export declare class UserService {
    private readonly userRepository;
    private authService;
    constructor(userRepository: Repository<userEntity>, authService: AuthService);
    create(user: User): Observable<User>;
    findAll(): Observable<User[]>;
    findOne(id: number): Observable<User>;
    delete(id: number): Observable<any>;
    updateOne(id: number, user: User): Observable<any>;
    login(user: User): Observable<string>;
    validateUser(email: string, password: string): Observable<User>;
    findByEmail(email: string): Observable<User>;
}
