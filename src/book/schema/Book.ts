import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';


export type BookDocument = HydratedDocument<Book>;
@Schema()
export class Book{
    @Prop()
    title:string;

    @Prop()
    author:string;

    @Prop()
    published:number;

    @Prop()
    desc:string;
}
export const BookScheema = SchemaFactory.createForClass(Book)