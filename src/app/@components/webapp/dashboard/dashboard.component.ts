import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chart!: any;
  constructor() {}

  ngOnInit(): void {
    this.createChart();

    this.chart.canvas.parentNode.style.height = '100%';
    this.chart.canvas.parentNode.style.width = '100%';
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'May',
          'Apr',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Sales',
            data: [
              '167',
              '276',
              '572',
              '179',
              '92',
              '274',
              '273',
              '576',
              '600',
              '300',
              '500',
              '800',
            ],
            backgroundColor: ['#F4CE9B', '#F4CE9B', '#0051CA'],
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
      },
    });
  }
}
