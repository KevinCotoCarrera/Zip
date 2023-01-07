import { Injectable } from '@nestjs/common';
//import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
//import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
