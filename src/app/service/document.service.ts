import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { Document, DocumentAttrs } from '../model/document';
import { KusenNode, KusenNodeAttrs } from '../model/kusenNode';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) {}

   getDocs(): Observable<Document[]> {
       return this.http.get<DocumentAttrs[]>('/api/documents').pipe(
        map((data) => data.map((documentAttrs) => new Document(documentAttrs)))
      );
   }

   getKusens(): Observable<KusenNode[]> {
    return this.http.get<KusenNodeAttrs[]>('/api/kusenNodes').pipe(
      map((data) => data.map((kusenAttrs) => new KusenNode(kusenAttrs)))
    );
   }
}
