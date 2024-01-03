import {NestFactory} from "@nestjs/core";

import {FastifyAdapter} from "@nestjs/platform-fastify";

import type {NestFastifyApplication} from "@nestjs/platform-fastify";

import "dotenv/config";

import {WebModule} from "./web/web.module";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(WebModule, new FastifyAdapter());

    await app.listen(3000);
}

bootstrap();
