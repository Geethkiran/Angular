import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book.model';

@Pipe({
  name: 'sortbyprice'
})
export class SortbypricePipe implements PipeTransform {
  transform(books: Book[], sortTerm: string): any {
    console.log(sortTerm);
    switch (sortTerm) {
      case "none": {
        return books;
        break;
      }
      case "Price:Low To High": {
        return (books = books.sort((low, high) => low.price - high.price));
        break;
      }

      case "Price:High To Low": {
        return (books = books.sort((low, high) => high.price - low.price));
      }
      case "By Book Name": {
        return (books = books.sort(function (low, high) {
          if (low.bookName < high.bookName) {
            return -1;
          } else if (low.bookName > high.bookName) {
            return 1;
          } else {
            return 0;
          }
        }));
        break;
      }
    }
    return null;
  }

}
