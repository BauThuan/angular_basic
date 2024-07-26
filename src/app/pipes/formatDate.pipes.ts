import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate',
    standalone: true
})
export class FormatDatePipe implements PipeTransform {
  transform(date: string | Date | undefined): string | any {
    if (!date) return date;
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    if (!(dateObj instanceof Date) || isNaN(dateObj.getTime())) {
      return date;
    }
    return dateObj.toLocaleDateString('vi-VN');
  }
}

