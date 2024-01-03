import {Global, Module} from "@nestjs/common";

import {repositoryProviders} from "../providers/repository.providers";
import {serviceProviders} from "../providers/service.providers";
import {InfraModule} from "./infra.module";

@Global()
@Module({
    imports: [InfraModule],
    providers: [...repositoryProviders, ...serviceProviders],
    exports: [...serviceProviders]
})
export class ServiceModule {}
