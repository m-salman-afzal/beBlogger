import {Body, Controller, Get, HttpCode, Inject, Param, Post, Query, Req, Res} from "@nestjs/common";

import {USER_PROVIDER} from "@valueObjects/user.valueObject";
import {FastifyRequest} from "fastify";

// import {CreateUserDto} from "@dtos/user.dto";
import type {UserService} from "@services/user.service";
import type {FastifyReply} from "fastify";

@Controller("users")
export class UserController {
    constructor(@Inject(USER_PROVIDER.USER_SERVICE) private readonly userService: UserService) {}

    @Post("asd/")
    // @HttpCode(201)
    createUser(@Body() body: any, @Res({passthrough: true}) response: FastifyReply) {
        return this.userService.findUser();
    }
}
