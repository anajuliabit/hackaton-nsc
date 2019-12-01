import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcontecendoAgoraComponent } from './acontecendo-agora.component';

describe('AcontecendoAgoraComponent', () => {
  let component: AcontecendoAgoraComponent;
  let fixture: ComponentFixture<AcontecendoAgoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcontecendoAgoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcontecendoAgoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
