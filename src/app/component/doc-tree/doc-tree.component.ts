import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doc-tree',
  templateUrl: './doc-tree.component.html',
  styleUrls: ['./doc-tree.component.css']
})
export class DocTreeComponent implements OnInit {

  @Input() docs: Document[];

  constructor() { }

  ngOnInit() {
  }

}
