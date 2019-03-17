import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import {Document} from 'src/app/model/document';
import { KusenNode } from 'src/app/model/kusenNode';

@Component({
  selector: 'app-doc-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.css']
})
export class DocTreeComponent implements OnInit, OnChanges {

  treeControl = new NestedTreeControl<KusenNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<KusenNode>();

  @Input() data: KusenNode[];

  constructor() {
  }

  ngOnInit() {
  }  

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if(changes.data != undefined && !changes.data.isFirstChange()) {
      this.data = changes.data.currentValue;
      this.dataSource.data = this.data;
    }
  }

  hasChild = (_: number, node: KusenNode) => !!node.children && node.children.length > 0;
}
