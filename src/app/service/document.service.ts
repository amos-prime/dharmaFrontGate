import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { KusenNode, KusenNodeAttrs } from '../model/kusenNode';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  actualKusen: string;
  @Output() actualKusenChanged: EventEmitter<string> = new EventEmitter();

  loadDocument(documentHash: string) {
    this.actualKusen = documentHash;
    this.actualKusenChanged.emit(this.actualKusen);
  }

  constructor(private http: HttpClient) {}

   getKusens(): Observable<KusenNode[]> {
    return this.http.get<KusenNodeAttrs[]>('/api/kusenNodes').pipe(
      map((data) => data.map((kusenAttrs) => new KusenNode(kusenAttrs)))
    );
   }
}
