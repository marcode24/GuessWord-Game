import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseQuestion } from '@interfaces/response.interface';
import { IQuestion } from '@models/question.model';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http: HttpClient
  ) { }

  getRandomQuestion(topicId: string): Observable<IQuestion> {
    const url = `${base_url}/question/random/${topicId}`;
    return this.http.get<IResponseQuestion>(url).pipe(map(resp => resp.question));
  }
}
