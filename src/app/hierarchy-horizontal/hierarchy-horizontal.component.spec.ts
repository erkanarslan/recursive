import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyHorizontalComponent } from './hierarchy-horizontal.component';

describe('HierarchyHorizontalComponent', () => {
  let component: HierarchyHorizontalComponent;
  let fixture: ComponentFixture<HierarchyHorizontalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchyHorizontalComponent]
    });
    fixture = TestBed.createComponent(HierarchyHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
