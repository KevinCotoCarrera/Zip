import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './guards/jwt-auth-guard';
import { LocalStrategy } from './strategies/local.strategy';
//Jwt configuration
const jwtFactory = {
  useFactory: async (config: ConfigService) => {
    return {
      secret: config.get<string>('JWT_SECRET_KEY'),
      signOptions: {
        expiresIn: config.get<string | number>('JWT_SECRET_KEY_EXPIRES'),
      },
    };
  },
  inject: [ConfigService],
};

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ session: true }),
    JwtModule.registerAsync(jwtFactory),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  exports: [AuthService],
})
export class AuthModule {}
