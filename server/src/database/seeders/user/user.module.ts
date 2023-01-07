
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/models/Users/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],

})
export class CatsModule {}
