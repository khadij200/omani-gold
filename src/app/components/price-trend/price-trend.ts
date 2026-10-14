import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { Language } from '../../services/language';
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
export class PriceTrend implements OnInit, OnDestroy {
  private goldPriceService = inject(GoldPrice);
  priceHistory = this.goldPriceService.priceHistory;
  language = inject(Language);

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: this.priceHistory.map(item => {
      const [year, month, day] = item.date.split('-');
      return `${day}/${month}`;
    }),

    datasets: [
      {
        data: this.priceHistory.map(item => item.price),
        label: this.language.currentLanguage() === 'ar'
          ? 'سعر الذهب عيار 21'
          : '21K Gold Price',
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

    plugins: {
      legend: {
        labels: {
          color: '#fef3c7'
        }
      }
    },
  

    scales: {
      x: {
        ticks: {
          color: '#cbd5e1',
          autoSkip: true,
          maxTicksLimit: 8,
          maxRotation: 0,
          minRotation: 0
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.12)'
        }
      },

      y: {
        ticks: {
          color: '#cbd5e1'
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.12)'
        }
      }
    }
  };

    ngOnInit() {
      window.addEventListener('themeChanged', this.updateChartTheme);
      this.updateChartTheme();
      window.addEventListener('languageChanged', this.updateChartLanguage);
    }   

    ngOnDestroy() {
      window.removeEventListener('themeChanged', this.updateChartTheme);
      window.removeEventListener('languageChanged', this.updateChartLanguage);
    }

    updateChartTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');

      const textColor = isDark ? '#cbd5e1' : '#475569';
      const legendColor = isDark ? '#fef3c7' : '#92400e';

      const gridColor = isDark
        ? 'rgba(148, 163, 184, 0.12)'
        : 'rgba(148, 163, 184, 0.18)';

      this.lineChartOptions = {
        ...this.lineChartOptions,

        plugins: {
          legend: {
            labels: {
              color: legendColor
            }
          }
        },

        scales: {
          x: {
            ticks: {
              color: textColor,
              autoSkip: true,
              maxTicksLimit: 8,
              maxRotation: 0,
              minRotation: 0
            },
            grid: {
              color: gridColor
            }
          },

          y: {
            ticks: {
              color: textColor
            },
            grid: {
              color: gridColor
            }
          }
        }
      };
    };
    updateChartLanguage = () => {
      this.lineChartData = {
      ...this.lineChartData,
      datasets: this.lineChartData.datasets.map(dataset => ({
        ...dataset,
        label: this.language.currentLanguage() === 'ar'
          ? 'سعر الذهب عيار 21'
          : '21K Gold Price'
      }))
      };
    };
}
 
