import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    // return null;
    if(!value) return null;

    // decalare an array to hold a preposition
    // let prepositions = [
    //   'of',
    //   'the'
    // ];

    // let words = value.split(' ');
    // for (let i = 0; i < words.length; i++) {
    //     if(i > 0 && prepositions.includes(words[i].toLowerCase()))
    //       words[i] = words[i].toLowerCase();
    //     else {
    //       words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();

    //     }
    // }

    // return words.join(' ');

    ///////////////////// Second Method /////////////////////////

    let words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if(i > 0 && this.isPreposition(word))
          words[i] = word[i].toLowerCase();
        else {
          words[i] = this.toTitleCase(word);
        }
    }

    return words.join(' ');
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }

  private isPreposition(word: string): boolean {
    let prepositions = [
      'of',
      'the'
    ];

    return prepositions.includes(word.toLowerCase())
  }

}
