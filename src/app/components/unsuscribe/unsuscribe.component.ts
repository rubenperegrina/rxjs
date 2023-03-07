import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, interval, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-unsuscribe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      unsuscribe works!
    </p>
  `,
  styles: [
  ]
})
export class UnsuscribeComponent {
  private destroy$ = new Subject<void>();

  // private subscription: Subscription[] = [];
  data$ = interval(1000);

  ngOnInit() {
    this.data$
      .pipe(
        takeUntil(this.destroy$),
        tap((res: number) => console.log(res))
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    // this.subscription.unsubscribe();
    // this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
