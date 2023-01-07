import { Module } from "@nestjs/common/decorators";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forRoot('url...')]
})

export class AppModule {}