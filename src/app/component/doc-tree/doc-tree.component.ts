import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { KusenNode } from 'src/app/model/kusenNode';
import { DocumentService } from 'src/app/service/document.service';

@Component({
  selector: 'app-doc-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.css']
})
export class DocTreeComponent implements OnInit, OnChanges {

  treeControl = new NestedTreeControl<KusenNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<KusenNode>();

  constructor(private documentService: DocumentService) {}

  @Input() data: KusenNode[];

  onClick(node: KusenNode) {
    //if(!this.hasChild(node)) {
      this.showDocument(node.hash);
   //};
  }

  showDocument(documentHash) {
    this.documentService.loadDocument(documentHash);
  }

  hasChild = (_: number, node: KusenNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }  

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.data != undefined && !changes.data.isFirstChange()) {
      this.data = changes.data.currentValue;
      this.dataSource.data = this.data;
    }
  }
}
