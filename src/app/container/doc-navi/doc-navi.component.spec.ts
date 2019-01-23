import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocNaviComponent } from './doc-navi.component';

describe('DocNaviComponent', () => {
  let component: DocNaviComponent;
  let fixture: ComponentFixture<DocNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
