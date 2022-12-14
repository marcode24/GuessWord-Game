import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { map, Observable } from 'rxjs';

import { ITopic } from '@models/topic.model';

import { IResponseTopic } from '@interfaces/response.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private http: HttpClient
  ) { }

  getTopics(): Observable<ITopic[]> {
    const url = `${base_url}/topic`;
    return this.http.get<IResponseTopic>(url).pipe(map(resp => resp.topics));
  }

}
