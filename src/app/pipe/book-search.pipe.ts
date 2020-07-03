import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book.model';

@Pipe({
  name: 'bookSearch'
})
export class BookSearchPipe implements PipeTransform {

  transform(books: Book[], searchTerm: string): Book[] {
    console.log(searchTerm);
    if (!books || !searchTerm) {
      return books;
    }
    return books.filter(
      (books) =>
        books.bookName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }
}
