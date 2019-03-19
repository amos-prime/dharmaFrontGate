import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';

@Component({
  selector: 'app-doc-show-container',
  templateUrl: './doc-show-container.component.html',
  styleUrls: ['./doc-show-container.component.css']
})
export class DocShowContainerComponent implements OnInit, OnDestroy {

  docToShow: string;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.actualKusenChanged.subscribe(docHash => {
      this.docToShow = docHash;
    })
  }

  ngOnDestroy() {
    this.documentService.actualKusenChanged.unsubscribe();
  }
}
