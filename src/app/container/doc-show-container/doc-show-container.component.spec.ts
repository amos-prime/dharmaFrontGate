import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocShowContainerComponent } from './doc-show-container.component';

describe('DocShowContainerComponent', () => {
  let component: DocShowContainerComponent;
  let fixture: ComponentFixture<DocShowContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocShowContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocShowContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
