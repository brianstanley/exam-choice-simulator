import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from './../../../../../api-interfaces/src/lib/api-interfaces';

const API_ENDPOINT = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  model = 'exams'

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Exam[]>(this.getUrl());
  }

  private getUrl(): string {
    return `${API_ENDPOINT}/${this.model}`;
  }

  private getUrlWithId(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
