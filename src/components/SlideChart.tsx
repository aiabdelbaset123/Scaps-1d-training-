import React, { useEffect, useRef } from 'react';
import {
  Chart,
  LineController,
  BarController,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartConfiguration,
} from 'chart.js';
import { ChartId } from '../data/slides';

Chart.register(
  LineController,
  BarController,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface SlideChartProps {
  chartId: ChartId;
}

export const SlideChart: React.FC<SlideChartProps> = ({ chartId }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (chartRef.current) {
      chartRef.current.destroy();
      chartRef.current = null;
    }

    Chart.defaults.color = '#94a3b8';
    Chart.defaults.borderColor = 'rgba(148,163,184,0.12)';
    Chart.defaults.font.family = "'Plus Jakarta Sans', system-ui, sans-serif";

    let config: ChartConfiguration | null = null;

    if (chartId === 'chartTechnologies') {
      config = {
        type: 'bar',
        data: {
          labels: ['Perovskite', 'CIGS', 'CdTe', 'CZTS / Kesterite', 'c-Si / HIT', 'Sb₂Se₃'],
          datasets: [
            {
              label: 'Typical SCAPS-1D Research Usage Index (Illustrative)',
              data: [95, 78, 65, 60, 52, 48],
              backgroundColor: ['#f59e0b', '#06b6d4', '#10b981', '#8b5cf6', '#38bdf8', '#f43f5e'],
              borderRadius: 6,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              title: { display: true, text: 'Relative Adoption Score (Illustrative)' },
            },
          },
        },
      };
    } else if (chartId === 'chartSpectrum') {
      const wl = [300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
      config = {
        type: 'line',
        data: {
          labels: wl.map((w) => `${w} nm`),
          datasets: [
            {
              label: 'AM0 Space (1366 W/m²)',
              data: [0.55, 1.55, 1.98, 1.75, 1.45, 1.15, 0.89, 0.74, 0.6, 0.48],
              borderColor: '#f59e0b',
              tension: 0.35,
              borderWidth: 2.5,
            },
            {
              label: 'AM1.5G Terrestrial (1000 W/m²)',
              data: [0.1, 1.12, 1.55, 1.48, 1.25, 0.98, 0.72, 0.63, 0.45, 0.36],
              borderColor: '#06b6d4',
              backgroundColor: 'rgba(6,182,212,0.14)',
              fill: true,
              tension: 0.35,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { title: { display: true, text: 'Spectral Irradiance (W/m²/nm, Illustrative)' } },
          },
        },
      };
    } else if (chartId === 'chartJVAnatomy') {
      const V = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.55, 0.6, 0.65, 0.7];
      config = {
        type: 'line',
        data: {
          labels: V.map((v) => `${v.toFixed(2)} V`),
          datasets: [
            {
              label: 'Illuminated J-V (AM1.5G)',
              data: [34.8, 34.7, 34.6, 34.4, 34.0, 32.8, 30.8, 25.5, 13.0, -12.0],
              borderColor: '#10b981',
              backgroundColor: 'rgba(16,185,129,0.12)',
              fill: true,
              tension: 0.3,
              borderWidth: 3,
            },
            {
              label: 'Dark J-V',
              data: [0, -0.02, -0.05, -0.1, -0.3, -1.2, -3.5, -9.0, -21.0, -45.0],
              borderColor: '#94a3b8',
              borderDash: [5, 5],
              tension: 0.3,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { title: { display: true, text: 'Current Density J (mA/cm²)' } } },
        },
      };
    } else if (chartId === 'chartQEDiagnosis') {
      const wl = [320, 380, 440, 500, 600, 700, 800, 900, 1000, 1100];
      config = {
        type: 'line',
        data: {
          labels: wl.map((w) => `${w} nm`),
          datasets: [
            {
              label: 'Ideal Square QE',
              data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 0],
              borderColor: '#475569',
              borderDash: [6, 4],
              stepped: 'before',
              borderWidth: 2,
            },
            {
              label: 'Realistic Cell (CdS + Bulk Losses)',
              data: [12, 38, 65, 88, 92, 90, 86, 78, 52, 2],
              borderColor: '#06b6d4',
              backgroundColor: 'rgba(6,182,212,0.14)',
              fill: true,
              tension: 0.25,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { min: 0, max: 105, title: { display: true, text: 'QE (%)' } } },
        },
      };
    } else if (chartId === 'chartCVMott') {
      const V = [-0.6, -0.4, -0.2, 0.0, 0.2, 0.4, 0.6];
      config = {
        type: 'line',
        data: {
          labels: V.map((v) => `${v.toFixed(1)} V`),
          datasets: [
            {
              label: '1/C² (cm⁴/nF²) — Linear Extrapolation gives V_bi',
              data: [14.5, 12.1, 9.7, 7.3, 4.9, 2.5, 0.3],
              borderColor: '#f59e0b',
              backgroundColor: 'rgba(245,158,11,0.16)',
              tension: 0.1,
              borderWidth: 3,
              pointRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, title: { display: true, text: '1/C² (Arbitrary Units)' } } },
        },
      };
    } else if (chartId === 'chartThicknessSweep') {
      config = {
        type: 'line',
        data: {
          labels: ['0.2 µm', '0.5 µm', '1.0 µm', '1.5 µm', '2.0 µm', '3.0 µm', '4.0 µm'],
          datasets: [
            {
              label: 'Efficiency η (%)',
              data: [11.8, 15.4, 18.1, 19.0, 19.4, 19.5, 19.3],
              borderColor: '#f59e0b',
              yAxisID: 'y',
              tension: 0.35,
              borderWidth: 3,
            },
            {
              label: 'Jsc (mA/cm²)',
              data: [22.5, 28.8, 33.1, 34.4, 34.9, 35.1, 35.1],
              borderColor: '#06b6d4',
              yAxisID: 'y1',
              tension: 0.35,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { type: 'linear', position: 'left', title: { display: true, text: 'Efficiency (%)' } },
            y1: {
              type: 'linear',
              position: 'right',
              grid: { drawOnChartArea: false },
              title: { display: true, text: 'Jsc (mA/cm²)' },
            },
          },
        },
      };
    } else if (chartId === 'chartTempChallenge') {
      config = {
        type: 'line',
        data: {
          labels: ['280 K', '300 K', '320 K', '340 K', '360 K'],
          datasets: [
            {
              label: 'Efficiency η (%)',
              data: [20.9, 20.1, 19.2, 18.2, 17.1],
              borderColor: '#f43f5e',
              yAxisID: 'y',
              tension: 0.25,
              borderWidth: 3,
            },
            {
              label: 'Voc (V)',
              data: [1.14, 1.1, 1.06, 1.02, 0.98],
              borderColor: '#10b981',
              yAxisID: 'y1',
              tension: 0.25,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: { type: 'linear', position: 'left', title: { display: true, text: 'Efficiency (%)' } },
            y1: {
              type: 'linear',
              position: 'right',
              grid: { drawOnChartArea: false },
              title: { display: true, text: 'Voc (V)' },
            },
          },
        },
      };
    } else if (chartId === 'chartValidation') {
      const V = [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0, 1.08];
      config = {
        type: 'line',
        data: {
          labels: V.map((v) => `${v.toFixed(2)} V`),
          datasets: [
            {
              label: 'Experimental Target (Lab Data)',
              data: [22.8, 22.7, 22.5, 22.1, 20.9, 18.2, 11.2, 0.0],
              borderColor: '#f59e0b',
              showLine: false,
              pointRadius: 6,
              pointBackgroundColor: '#f59e0b',
            },
            {
              label: 'Calibrated SCAPS-1D Fit',
              data: [22.9, 22.8, 22.6, 22.2, 21.0, 18.4, 11.5, 0.2],
              borderColor: '#06b6d4',
              tension: 0.3,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, title: { display: true, text: 'J (mA/cm²)' } } },
        },
      };
    }

    if (config) {
      chartRef.current = new Chart(ctx, config);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [chartId]);

  return (
    <div className="relative w-full h-full min-h-0">
      <canvas ref={canvasRef} />
    </div>
  );
};
