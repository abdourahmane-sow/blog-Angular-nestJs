import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { AuthService } from "src/auth/services/auth.service";
import { UserController } from "./controller/user.controller";
import { userEntity } from "./entity/user.entity";
import { UserService } from "./service/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([userEntity]), AuthModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
