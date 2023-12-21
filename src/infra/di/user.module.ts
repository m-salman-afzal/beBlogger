import {Module} from "@nestjs/common";

import {UserController} from "@controllers/user.controller";
import {DatabaseModule} from "@infra/database/database.module";
import {UserRepository} from "@infra/database/repositories/user.repository";
import {UserService} from "@services/user.service";

@Module({
    controllers: [UserController],
    imports: [DatabaseModule],
    providers: [UserService, UserRepository],
    exports: [UserService]
})
export class UserModule {}
