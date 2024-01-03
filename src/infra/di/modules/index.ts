import {Global, Module} from "@nestjs/common";

import {InfraModule} from "./infra.module";
import {ServiceModule} from "./service.module";

@Global()
@Module({
    imports: [InfraModule, ServiceModule],
    exports: [InfraModule, ServiceModule]
})
export class AppModule {}
