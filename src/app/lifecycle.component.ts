import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <p>
      lifecycle Works!
    </p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges() {
    this.log('ngonchanges');
  }

  ngOnInit() {
    this.log('ngoninit');
  }

  ngDoCheck() {
    this.log('ngdocheck');
  }

  ngAfterContentInit() {
    this.log('ngaftercontentinit');
  }

  ngAfterContentChecked() {
    this.log('ngaftercontentchecked');
  }

  ngAfterViewInit() {
    this.log('ngafterviewinit');
  }

  ngAfterViewChecked() {
    this.log('afterviewchecked');
  }

  ngOnDestroy() {
    this.log('ngondestroy');
  }

  private log(hook: string) {
    console.log(hook);
  }
}
