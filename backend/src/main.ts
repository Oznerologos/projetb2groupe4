import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);

  /*
  const usersRoutes = await new UtilisateurController().getRoutes();
  app.use(
    '/user',
    passport.authenticate('jwt', { session: false }),
    usersRoutes,
  );
  */
}

bootstrap();
