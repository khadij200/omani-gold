import { Component, inject } from '@angular/core';
import { GoldPrice } from '../../services/gold-price';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-price-trend',
  imports: [BaseChartDirective],
  templateUrl: './price-trend.html',
  styleUrl: './price-trend.css',
})
export class PriceTrend {
   private goldPriceService = inject(GoldPrice);

  priceHistory = this.goldPriceService.priceHistory;

  lineChartData: ChartConfiguration<'line'>['data'] = {
  labels: this.priceHistory.map(item => {
  const [year, month, day] = item.date.split('-');
  return `${day}/${month}`;
}),

  datasets: [
    {
      data: this.priceHistory.map(item => item.price),
      label: 'سعر الذهب عيار 21',
      borderColor: '#d97706',
      backgroundColor: '#fef3c7',
      tension: 0.3,
      fill: true
    }
  ]
};
lineChartOptions: ChartConfiguration<'line'>['options'] = {
  responsive: true,
  maintainAspectRatio: false,

  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 8,
        maxRotation: 0,
        minRotation: 0
      }
    }
  }
};
}
