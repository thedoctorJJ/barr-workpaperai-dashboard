"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

export function LineChart({ type = "userAdoption" }) {
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
                yAxisID: "y1",
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
                    if (context.dataset.yAxisID === "y1") {
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
                title: {
                  display: true,
                  text: "Users",
                },
              },
              y1: {
                beginAtZero: true,
                position: "right",
                min: 0,
                max: 1,
                grid: {
                  drawOnChartArea: false,
                },
                ticks: {
                  callback: (value) => value * 100 + "%",
                },
                title: {
                  display: true,
                  text: "DAU/MAU Ratio",
                },
              },
            },
          },
        })
      } else if (type === "featureAdoption") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 7", "Day 14", "Day 21", "Day 28"],
            datasets: [
              {
                label: "Policy Validation",
                data: [100, 100, 100, 100, 100, 100, 100],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
                tension: 0.3,
              },
              {
                label: "Completeness Check",
                data: [92, 96, 100, 100, 100, 100, 100],
                borderColor: "#1B91B9",
                backgroundColor: "rgba(27, 145, 185, 0.1)",
                tension: 0.3,
              },
              {
                label: "Workpaper Generation",
                data: [33, 58, 75, 83, 92, 96, 96],
                borderColor: "#3B82F6",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                tension: 0.3,
              },
              {
                label: "Policy Analysis",
                data: [25, 38, 50, 67, 83, 88, 92],
                borderColor: "#10B981",
                backgroundColor: "rgba(16, 185, 129, 0.1)",
                tension: 0.3,
              },
              {
                label: "Control Mapping",
                data: [8, 13, 25, 42, 58, 71, 75],
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
                  label: (context) => context.dataset.label + ": " + context.parsed.y + "% of users",
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
                title: {
                  display: true,
                  text: "Adoption Rate",
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
  }, [type])

  return <canvas ref={chartRef} />
}

export function BarChart({ type = "orgAdoption" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "orgAdoption") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["ACME Corp", "TechNova", "GlobalFin", "SecureCloud", "DataSystems"],
            datasets: [
              {
                label: "Registered Auditors",
                data: [6, 5, 5, 4, 4],
                backgroundColor: "#0B293F",
              },
              {
                label: "Active Auditors",
                data: [6, 5, 4, 3, 3],
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
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Auditors",
                },
              },
            },
          },
        })
      } else if (type === "newVsReturning") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "New Users",
                data: [12, 6, 4, 2],
                backgroundColor: "#0B293F",
              },
              {
                label: "Returning Users",
                data: [0, 11, 16, 19],
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
            },
            scales: {
              x: {
                stacked: true,
              },
              y: {
                stacked: true,
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Auditors",
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
  }, [type])

  return <canvas ref={chartRef} />
}

export function ActivityHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"]

  // Activity levels from 1 (lowest) to 7 (highest)
  const activityData = [
    [2, 3, 3, 4, 2], // 9am
    [3, 4, 5, 5, 4], // 10am
    [5, 6, 7, 6, 5], // 11am
    [3, 3, 4, 3, 3], // 12pm
    [4, 4, 5, 5, 3], // 1pm
    [5, 6, 6, 7, 5], // 2pm
    [6, 7, 8, 7, 6], // 3pm
    [5, 6, 7, 6, 4], // 4pm
  ]

  const getActivityColor = (level) => {
    const colors = [
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
    ]
    return colors[level - 1] || "bg-blue-100"
  }

  return (
    <div className="overflow-auto">
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="px-2 py-1 text-xs text-gray-500"></th>
            {days.map((day, index) => (
              <th key={index} className="px-2 py-1 text-xs text-gray-500">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour, hourIndex) => (
            <tr key={hourIndex}>
              <td className="px-2 py-1 text-xs text-gray-500">{hour}</td>
              {days.map((_, dayIndex) => (
                <td key={dayIndex} className="px-2 py-1">
                  <div className={`w-8 h-8 rounded-sm ${getActivityColor(activityData[hourIndex][dayIndex])}`}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-2">
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5, 6, 7].map((level) => (
            <div key={level} className={`w-3 h-3 ${getActivityColor(level)} rounded-sm`}></div>
          ))}
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-1">Low activity → High activity</div>
    </div>
  )
}

export function UserCohortRetention() {
  const cohorts = [
    { name: "Week 1", users: 12, retention: [100, 92, 85, 83] },
    { name: "Week 2", users: 6, retention: [null, 100, 90, 85] },
    { name: "Week 3", users: 4, retention: [null, null, 100, 95] },
    { name: "Week 4", users: 2, retention: [null, null, null, 100] },
  ]

  const getRetentionColor = (value) => {
    if (value === null) return "bg-gray-200"
    if (value >= 95) return "bg-green-600"
    if (value >= 80) return "bg-green-500"
    if (value >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Cohort</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Week 1</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Week 2</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Week 3</th>
            <th className="px-3 py-2 text-center text-xs font-medium text-gray-500 uppercase">Week 4</th>
          </tr>
        </thead>
        <tbody>
          {cohorts.map((cohort, index) => (
            <tr key={index}>
              <td className="px-3 py-2 text-left">
                {cohort.name} ({cohort.users} users)
              </td>
              {cohort.retention.map((value, weekIndex) => (
                <td key={weekIndex} className="px-3 py-2 text-center">
                  {value === null ? (
                    <div className="mx-auto h-8 w-12 bg-gray-200 rounded-sm"></div>
                  ) : (
                    <div
                      className={`mx-auto h-8 w-12 ${getRetentionColor(value)} rounded-sm flex items-center justify-center text-xs text-white font-medium`}
                    >
                      {value}%
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function UserJourneyFunnel() {
  const steps = [
    { name: "1. Onboarding", percentage: 100, count: "24/24 auditors" },
    { name: "2. First Policy Review", percentage: 96, count: "23/24 auditors" },
    { name: "3. First Completeness Check", percentage: 92, count: "22/24 auditors" },
    { name: "4. First Workpaper Generated", percentage: 83, count: "20/24 auditors" },
    { name: "5. 5+ Workpapers Generated", percentage: 75, count: "18/24 auditors" },
  ]

  return (
    <div className="w-full max-w-md">
      {steps.map((step, index) => (
        <div key={index} className="relative pt-1 mb-6">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
              {step.name}
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                {step.percentage}% ({step.count})
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-6 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${step.percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

