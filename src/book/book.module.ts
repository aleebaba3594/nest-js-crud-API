import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book, BookScheema } from './schema/Book';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookScheema }])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
