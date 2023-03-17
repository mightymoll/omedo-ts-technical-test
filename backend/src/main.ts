import { NestFactory } from '@nestjs/core';
import { DrugstoreModule } from './modules/drugstore/drugstore.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(DrugstoreModule);

  const config = new DocumentBuilder()
    .setTitle('Omedo API documentation')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(3310);
}
void bootstrap();
