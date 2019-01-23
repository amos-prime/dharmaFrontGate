import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Document, DocumentAttrs } from '../model/document';
import { d } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  d: Document[];

  constructor(private http: HttpClient) {}

   getDocs(): Observable<Document[]> {
       return this.http.get<DocumentAttrs[]>('/api/documents').pipe(
        map((data) => data.map((documentAttrs) => new Document(documentAttrs)))
      );
   }
}
