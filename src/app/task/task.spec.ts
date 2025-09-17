import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskcomp } from './taskcomp';

describe('Task', () => {
  let component: Taskcomp;
  let fixture: ComponentFixture<Taskcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Taskcomp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskcomp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
