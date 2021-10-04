import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExamType} from "@choice/api-interfaces";

const API_ENDPOINT = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class ExamTypesService {
  model = 'examTypes'

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<ExamType[]>(this.getUrl());
  }

  private getUrl(): string {
    return `${API_ENDPOINT}/${this.model}`;
  }

  private getUrlWithId(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
