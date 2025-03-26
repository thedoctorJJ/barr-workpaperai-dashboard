"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

export function LineChart({ type = "weeklyGrowth" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "userAdoption") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Daily Active Users",
                data: [4, 9, 15, 21],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
                tension: 0.3,
              },
              {
                label: "Monthly Active Users",
                data: [12, 18, 22, 24],
                borderColor: "#1B91B9",
                backgroundColor: "rgba(27, 145, 185, 0.1)",
                tension: 0.3,
              },
              {
                label: "DAU/MAU Ratio",
                data: [0.33, 0.5, 0.68, 0.88],
                borderColor: "#FF5F1F",
                backgroundColor: "rgba(255, 95, 31, 0.1)",
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    if (context.dataset.label === "DAU/MAU Ratio") {
                      label += (context.parsed.y * 100).toFixed(0) + "%"
                    } else {
                      label += context.parsed.y
                    }
                    return label
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        })
      } else if (type === "weeklyGrowth") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Auditors",
                data: [5, 11, 18, 24],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
                tension: 0.3,
              },
              {
                label: "Workpapers",
                data: [12, 32, 67, 132],
                borderColor: "#1B91B9",
                backgroundColor: "rgba(27, 145, 185, 0.1)",
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [type])

  return <canvas ref={chartRef} />
}

export function BarChart({ type, labels, data, dataBefore, dataAfter }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "feature") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Usage Count",
                data,
                backgroundColor: "#1B91B9",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        })
      } else if (type === "roi") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Time Spent",
                data: dataBefore,
                backgroundColor: "#0B293F",
              },
              {
                label: "Time Saved",
                data: dataAfter,
                backgroundColor: "#1B91B9",
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "bottom",
              },
              tooltip: {
                callbacks: {
                  label: (context) => {
                    let label = context.dataset.label || ""
                    if (label) {
                      label += ": "
                    }
                    label += context.parsed.y + "%"
                    return label
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  callback: (value) => value + "%",
                },
              },
            },
          },
        })
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [type, labels, data, dataBefore, dataAfter])

  return <canvas ref={chartRef} />
}

export function DoughnutChart() {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")
      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Correct", "Overridden"],
          datasets: [
            {
              data: [87, 13],
              backgroundColor: ["#1B91B9", "#FF5F1F"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
          cutout: "70%",
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}

export function GaugeChart({ value }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      // Determine color based on value
      let color = "#FF5F1F" // Default orange
      if (value >= 100) {
        color = "#4CAF50" // Green for exceeding goal
      } else if (value >= 75) {
        color = "#1B91B9" // Blue for good progress
      }

      chartInstance.current = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [value, 100 - value],
              backgroundColor: [color, "#E5E7EB"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          circumference: 180,
          rotation: 270,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          cutout: "70%",
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [value])

  return <canvas ref={chartRef} />
}

