import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefinalComponent } from './pagefinal.component';

describe('PagefinalComponent', () => {
  let component: PagefinalComponent;
  let fixture: ComponentFixture<PagefinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagefinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagefinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
