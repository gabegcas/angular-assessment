import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class QuizService {

  quizUrl = 'assets/angular-quiz.json';

  constructor(private http: HttpClient) { }

  getQuiz(): Observable<any> {
    return this.http.get<any>(this.quizUrl);
  }

  getAll() {
    return [
      { id: 'assets/angular-quiz.json', name: 'Angular' }
    ];
  }

}
