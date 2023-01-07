import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from 'src/models/Users/entities/user.entity';

export type FileDocument = mongoose.HydratedDocument<File>;

@Schema()
export class File{
    
    @Prop({ required: true, })
    title: string;

    @Prop({ required: true })
    size: number

    @Prop({ required: true })
    file: BinaryData

    @Prop({default: mongoose.now()})
    createdAt: Date;

    @Prop({default: mongoose.now()})
    updatedAt: Date;

    @Prop({required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    owner: User
}

export const FileSchema = SchemaFactory.createForClass(File);
