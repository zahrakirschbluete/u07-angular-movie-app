import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedMoviesListComponent } from './top-rated-movies-list.component';

describe('TopRatedMoviesListComponent', () => {
  let component: TopRatedMoviesListComponent;
  let fixture: ComponentFixture<TopRatedMoviesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopRatedMoviesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopRatedMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
