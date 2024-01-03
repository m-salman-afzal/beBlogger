import {Module} from "@nestjs/common";

import {UserController} from "@controllers/user.controller";
import {AppModule} from "@infra/di/modules";

@Module({
    imports: [AppModule],
    controllers: [UserController]
})
export class WebModule {}
