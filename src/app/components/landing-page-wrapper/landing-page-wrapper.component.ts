import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-landing-page-wrapper',
  templateUrl: './landing-page-wrapper.component.html',
  styleUrls: ['./landing-page-wrapper.component.css']
})
export class LandingPageWrapperComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject<void>();
  developerData: any;

  constructor(
    private readonly route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.data
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ data }) => (this.developerData = data) );
  }
  
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
