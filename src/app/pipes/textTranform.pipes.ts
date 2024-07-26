import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform',
  standalone: true,
})
export class TextTransformPipe implements PipeTransform {
  transform(value: string, mode: 'uppercase' | 'lowercase'): string {
    if (!value) return '';
    return mode === 'uppercase' ? value.toUpperCase() : value.toLowerCase();
  }
}
 