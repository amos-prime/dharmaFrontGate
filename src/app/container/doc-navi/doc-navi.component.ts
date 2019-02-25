import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import {Document} from 'src/app/model/document';

@Component({
  selector: 'app-doc-navi',
  templateUrl: './doc-navi.component.html',
  styleUrls: ['./doc-navi.component.css']
})
export class DocNaviComponent implements OnInit {

  documents: Document[];

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.docService.getDocs().subscribe({
      next: (docs) =>  this.documents = docs,
      error: () => alert('doc get fail')
    });
  }

}
