import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'findLanguageFromKey' })
export class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    ru: { name: 'Русский' },
    ge: { name: 'German' },
    uz: { name: 'O`zbekcha' },
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }
}
