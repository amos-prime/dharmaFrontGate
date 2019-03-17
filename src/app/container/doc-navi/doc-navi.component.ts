import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/service/document.service';
import { KusenNode } from 'src/app/model/kusenNode';

@Component({
  selector: 'app-doc-navi',
  templateUrl: './doc-navi.component.html',
  styleUrls: ['./doc-navi.component.css']
})
export class DocNaviComponent implements OnInit {

  kusens: KusenNode[];

  constructor(private docService: DocumentService) { }

  ngOnInit() {
    this.docService.getKusens().subscribe({
      next: (kusens) =>  this.kusens = kusens,
      error: () => alert('kusens get fail')
    });
  }
}
