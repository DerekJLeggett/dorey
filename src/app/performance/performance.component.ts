import { Component, OnInit } from '@angular/core';
import { ICompany, IIndustry } from './performance';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  performance: ICompany[] = [];
  industries: IIndustry[] = [];
  constructor(private performanceService: PerformanceService) { }

  ngOnInit() {
    this.getIndustries();
  }

  getTimingsByIndustryId(industryId: number) {
    this.performanceService.getTimingsByIndustryId(industryId)
      .subscribe(response => this.performance = response);
  }
  getIndustries() {
    this.performanceService.getIndustries()
      .subscribe(response => this.industries = response);
  }
}
