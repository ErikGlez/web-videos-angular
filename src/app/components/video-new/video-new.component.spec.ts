import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoNewComponent } from './video-new.component';

describe('VideoNewComponent', () => {
  let component: VideoNewComponent;
  let fixture: ComponentFixture<VideoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
