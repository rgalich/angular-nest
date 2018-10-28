import { RightModule } from './modules/right/right.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ServiceModule } from './core/service/service.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from './modules/config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    AuthModule,
    RightModule,
    ServiceModule,
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
