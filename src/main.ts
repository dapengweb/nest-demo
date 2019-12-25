import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  //#region swagger
  const options = new DocumentBuilder()
    .setTitle('Training Demo')
    .setDescription('the training is providered by maxthon who is a ')
    .setVersion('1.0')
    .setBasePath('/')
    .setContactEmail('7783008@qq.com')
    .setSchemes('http')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);  //http://127.0.0.1:3000/docs/
  //#endregion
  await app.listen(3000);
}
bootstrap();