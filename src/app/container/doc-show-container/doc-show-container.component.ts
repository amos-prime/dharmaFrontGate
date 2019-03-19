import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { KusenDetail } from 'src/app/model/kusenDetail';

@Component({
  selector: 'app-doc-show-container',
  templateUrl: './doc-show-container.component.html',
  styleUrls: ['./doc-show-container.component.css']
})
export class DocShowContainerComponent implements OnInit, OnDestroy {

  docToShow = KusenDetail.emptyKusen;

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.actualKusenChanged.subscribe(
      docToShow => this.docToShow = docToShow
    )
  }

  ngOnDestroy() {
    this.documentService.actualKusenChanged.unsubscribe();
  }
}
