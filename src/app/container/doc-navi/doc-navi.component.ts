import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import {Document} from 'src/app/model/document';
import { KusenNode } from 'src/app/model/kusenNode';

@Component({
  selector: 'app-doc-navi',
  templateUrl: './doc-navi.component.html',
  styleUrls: ['./doc-navi.component.css']
})
export class DocNaviComponent implements OnInit {

  documents: Document[];
  kusens: KusenNode[];

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.docService.getDocs().subscribe({
      next: (docs) =>  this.documents = docs,
      error: () => alert('doc get fail')
    });
    this.docService.getKusens().subscribe({
      next: (kusens) =>  this.kusens = kusens,
      error: () => alert('kusens get fail')
    });
  }

}
