import passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UtilisateurController } from './utilisateur/utilisateur.controller';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);

  const usersRoutes = await new UtilisateurController().getRoutes();
  app.use(
    '/user',
    passport.authenticate('jwt', { session: false }),
    usersRoutes,
  );
}

bootstrap();
