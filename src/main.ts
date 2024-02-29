import { INestApplication, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./filters/http.exception.filter";

async function myServer() {
  const app = await NestFactory.create<INestApplication>(AppModule, {
    cors: true,
  });
  await app.listen(5050);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
}

myServer();
