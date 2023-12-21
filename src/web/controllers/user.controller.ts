import {Body, Controller, Get, HttpCode, Param, Post, Query, Req, Res} from "@nestjs/common";

// import {CreateUserDto} from "@dtos/user.dto";
import {UserService} from "@services/user.service";
import {FastifyReply, FastifyRequest} from "fastify";

@Controller("users")
export class UserController {
    constructor(private readonly appService: UserService) {}

    @Post("asd/")
    // @HttpCode(201)
    createUser(@Body() body: any, @Res({passthrough: true}) response: FastifyReply) {
        return this.appService.createUser(body);
    }
}
