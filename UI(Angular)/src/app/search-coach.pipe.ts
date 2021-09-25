import { Pipe, PipeTransform } from '@angular/core';
import { Coach } from './coach-home/coach.model';

@Pipe({
  name: 'searchCoach'
})
export class SearchCoachPipe implements PipeTransform {

  transform(items: Coach[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.speciality.toLocaleLowerCase().includes(searchText);
    });
  }

}
