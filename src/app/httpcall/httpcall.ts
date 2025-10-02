// httpcall.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, NgForm } from '@angular/forms';
import { Httpcallservice, Suggestion } from '../service/httpcallservice';
import { 
  debounceTime, 
  distinctUntilChanged, 
  switchMap, 
  catchError 
} from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-httpcall',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './httpcall.html',
  styleUrls: ['./httpcall.scss']
})
export class HttpcallComponent implements OnInit {
  
  @ViewChild('searchForm') searchForm!: NgForm;
  
  searchControl = new FormControl('');
  suggestions: Suggestion[] = [];
  isLoading = false;
  error: string | null = null;
  selectedSuggestion: Suggestion | null = null;

  constructor(private httpcallService: Httpcallservice) {}

  ngOnInit() {
    this.setupSearch();
  }

  onSubmit() {
    if (this.searchControl.valid && this.searchControl.value && this.searchControl.value.length >= 2) {
      console.log('Submit form con:', this.searchControl.value);
    }
  }

  private setupSearch() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(searchTerm => {
        this.isLoading = true;
        this.error = null;
        this.suggestions = [];
        
        if (!searchTerm || searchTerm.length < 2) {
          this.isLoading = false;
          return of([]);
        }

        return this.httpcallService.getSuggestion(searchTerm).pipe(
          catchError(error => {
            this.error = 'Errore nel caricamento';
            this.isLoading = false;
            return of([]);
          })
        );
      })
    ).subscribe({
      next: (suggestions) => {
        this.suggestions = suggestions;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Errore sconosciuto';
        this.isLoading = false;
      }
    });
  }

  selectSuggestion(suggestion: Suggestion) {
    this.selectedSuggestion = suggestion;
    this.searchControl.setValue(suggestion.name, { emitEvent: false });
    this.suggestions = [];
    
    if (this.searchForm) {
      setTimeout(() => {
        this.searchForm.control.markAsTouched();
      });
    }
  }

  clearSearch() {
    this.searchControl.setValue('');
    this.suggestions = [];
    this.selectedSuggestion = null;
    this.error = null;
    
    if (this.searchForm) {
      this.searchForm.resetForm();
    }
  }
}