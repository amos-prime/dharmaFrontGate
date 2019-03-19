import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { KusenNode, KusenNodeAttrs } from '../model/kusenNode';
import { debug } from 'util';
import { KusenDetail } from '../model/kusenDetail';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  actualKusen: KusenDetail;
  @Output() actualKusenChanged: EventEmitter<KusenDetail> = new EventEmitter();

  loadDocument(documentHash: string) {
    this.http.get<KusenDetail>('/api/kusen/' + documentHash).subscribe( 
      data => {
        this.actualKusen = data;
        this.actualKusenChanged.emit(this.actualKusen);
      }
    );
  }

  constructor(private http: HttpClient) {}

   getKusens(): Observable<KusenNode[]> {
    return this.http.get<KusenNodeAttrs[]>('/api/kusens').pipe(
      map((data) => data.map((kusenAttrs) => new KusenNode(kusenAttrs)))
    );
   }
}
