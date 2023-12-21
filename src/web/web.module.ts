import {Module} from "@nestjs/common";

import {UserModule} from "@infra/di/user.module";

@Module({
    imports: [UserModule],
    exports: [UserModule]
})
export class AppModule {}
