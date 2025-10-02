import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface Suggestion {
  id: number;
  name: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class Httpcallservice {

  private allSuggestions: Suggestion[] = [
    { id: 1, name: 'roma', category: 'città' },
    { id: 2, name: 'milano', category: 'città' },
    { id: 3, name: 'napoli', category: 'città' },
    { id: 4, name: 'torino', category: 'città' },
    { id: 5, name: 'bari', category: 'città' }
  ];

  getSuggestion(searchTerm: string): Observable<Suggestion[]> {
    console.log('Fake call for: ', searchTerm);

    return of(this.filterSuggestions(searchTerm)).pipe(
      delay(500)
    )
  }
  private filterSuggestions(searchTerm: string): Suggestion[] {
    if (!searchTerm.trim()) {
      return [];
    }
    const term= searchTerm.toLowerCase().trim();

    return this.allSuggestions.filter(suggestion =>
      suggestion.name.toLowerCase().includes(term)
    ).slice (0,5);
  }
}
