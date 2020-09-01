import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {
  transform(value: string, length: number): string {
    return (value) ? separate(value, length) : value;
  }
}

function separate(charSet: string, groupLength: number, separator = ' ') {
  charSet = purgeIsbn(charSet);
  let separatedCharSet = '';
  for (let i=0; i < charSet.length; i++) {
    if (isStartOfNewGroup(i, groupLength)) {
      separatedCharSet += `${separator}${charSet[i]}`
    } else {
      separatedCharSet += charSet[i]
    }
  }
  return separatedCharSet;
}

function isStartOfNewGroup(i: number, groupLength: number) {
  return i > 0 && i % groupLength === 0;
}

function purgeIsbn(charSet: string) : string {
  return (charSet || '').replace(/\-/g, '');
}
