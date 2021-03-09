import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeleteComponent } from './area-delete.component';

xdescribe('AreaDeleteComponent', () => {
  let component: AreaDeleteComponent;
  let fixture: ComponentFixture<AreaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
