import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSummaaryComponent } from './resource-summaary.component';

describe('ResourceSummaaryComponent', () => {
  let component: ResourceSummaaryComponent;
  let fixture: ComponentFixture<ResourceSummaaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceSummaaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSummaaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
