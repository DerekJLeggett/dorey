import { Component, OnInit } from '@angular/core';
import { ITiming, IIndustry } from './performance';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  timings: ITiming[] = [];
  industries: IIndustry[] = [];
  constructor(private performanceService: PerformanceService) { }

  ngOnInit() {
    this.getIndustries();
  }

  getTimingsByIndustryId(industryId: number) {
    this.performanceService.getTimingsByIndustryId(industryId)
      .subscribe(response => this.timings = response);
  }
  getIndustries() {
    this.performanceService.getIndustries()
      .subscribe(response => this.industries = response);
  }
}
