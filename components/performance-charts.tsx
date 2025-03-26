"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

export function LineChart({ type = "aiPerformance" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "aiPerformance") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Accuracy Rate",
                data: [78, 82, 85, 87],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
                yAxisID: "y",
                tension: 0.3,
              },
              {
                label: "Auditor Overrides",
                data: [22, 18, 15, 13],
                borderColor: "#FF5F1F",
                backgroundColor: "rgba(255, 95, 31, 0.1)",
                yAxisID: "y",
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
                  label: (context) => context.dataset.label + ": " + context.parsed.y + "%",
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
  }, [type])

  return <canvas ref={chartRef} />
}

export function BarChart({ type = "responseTime" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "responseTime") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["< 1s", "1-2s", "2-3s", "3-4s", "4-5s", "> 5s"],
            datasets: [
              {
                label: "Frequency",
                data: [18, 52, 23, 5, 1, 1],
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
              tooltip: {
                callbacks: {
                  label: (context) => context.parsed.y + "% of responses",
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 60,
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
  }, [type])

  return <canvas ref={chartRef} />
}

export function PieChart({ type = "errorCategories" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "errorCategories") {
        chartInstance.current = new Chart(ctx, {
          type: "pie",
          data: {
            labels: [
              "Policy Validation Errors",
              "Data Processing Errors",
              "Workpaper Generation Errors",
              "System Timeouts",
              "Other",
            ],
            datasets: [
              {
                data: [42, 28, 15, 10, 5],
                backgroundColor: ["#0B293F", "#1B91B9", "#FF5F1F", "#6B7280", "#94A3B8"],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.label + ": " + context.parsed + "%",
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

export function DoughnutChart({ type = "overrideReasons" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "overrideReasons") {
        chartInstance.current = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: [
              "Missing Context",
              "Incomplete Analysis",
              "Wrong Template Used",
              "Client-Specific Requirements",
              "Other",
            ],
            datasets: [
              {
                data: [38, 32, 14, 12, 4],
                backgroundColor: ["#0B293F", "#1B91B9", "#FF5F1F", "#6B7280", "#94A3B8"],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
              },
              tooltip: {
                callbacks: {
                  label: (context) => context.label + ": " + context.parsed + "%",
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

export function WorkpaperQualityTable() {
  const categories = [
    {
      name: "Access Control",
      generated: 42,
      avgEdits: 1.2,
      accuracy: 92,
      latency: "1.6s",
      qualityScore: 94,
    },
    {
      name: "Change Management",
      generated: 38,
      avgEdits: 1.5,
      accuracy: 87,
      latency: "1.7s",
      qualityScore: 89,
    },
    {
      name: "Risk Management",
      generated: 27,
      avgEdits: 1.8,
      accuracy: 83,
      latency: "1.9s",
      qualityScore: 85,
    },
    {
      name: "System Operations",
      generated: 23,
      avgEdits: 1.1,
      accuracy: 90,
      latency: "1.5s",
      qualityScore: 92,
    },
    {
      name: "Logical Access",
      generated: 18,
      avgEdits: 1.6,
      accuracy: 84,
      latency: "2.1s",
      qualityScore: 83,
    },
  ]

  const getScoreColor = (score) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 80) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Control Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Generated
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Avg Edits
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Latency</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quality Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {categories.map((category, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{category.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.generated}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.avgEdits}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.accuracy}%</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.latency}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <span className="text-sm font-medium text-gray-900 mr-2">{category.qualityScore}%</span>
                  <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getScoreColor(category.qualityScore)}`}
                      style={{ width: `${category.qualityScore}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function SystemUptimeCalendar() {
  // Calendar data for the month
  const calendarData = [
    // Week 1
    { day: 1, uptime: 100 },
    { day: 2, uptime: 100 },
    { day: 3, uptime: 100 },
    { day: 4, uptime: 100 },
    { day: 5, uptime: 100 },
    { day: 6, uptime: 100 },
    { day: 7, uptime: 100 },
    // Week 2
    { day: 8, uptime: 100 },
    { day: 9, uptime: 99.2 },
    { day: 10, uptime: 100 },
    { day: 11, uptime: 100 },
    { day: 12, uptime: 100 },
    { day: 13, uptime: 100 },
    { day: 14, uptime: 100 },
    // Week 3
    { day: 15, uptime: 100 },
    { day: 16, uptime: 100 },
    { day: 17, uptime: 100 },
    { day: 18, uptime: 97.8 },
    { day: 19, uptime: 100 },
    { day: 20, uptime: 100 },
    { day: 21, uptime: 100 },
    // Week 4
    { day: 22, uptime: 100 },
    { day: 23, uptime: 100 },
    { day: 24, uptime: 100 },
    { day: 25, uptime: 100 },
    { day: 26, uptime: 100 },
    { day: 27, uptime: 99.5 },
    { day: 28, uptime: 100 },
  ]

  const getUptimeColor = (uptime) => {
    if (uptime === 100) return "bg-green-100"
    if (uptime >= 99) return "bg-yellow-100"
    return "bg-red-100"
  }

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {/* Day Labels */}
        <div className="text-center text-xs font-medium text-gray-500">Sun</div>
        <div className="text-center text-xs font-medium text-gray-500">Mon</div>
        <div className="text-center text-xs font-medium text-gray-500">Tue</div>
        <div className="text-center text-xs font-medium text-gray-500">Wed</div>
        <div className="text-center text-xs font-medium text-gray-500">Thu</div>
        <div className="text-center text-xs font-medium text-gray-500">Fri</div>
        <div className="text-center text-xs font-medium text-gray-500">Sat</div>

        {/* Calendar Days */}
        {calendarData.map((day, index) => (
          <div key={index} className={`h-12 ${getUptimeColor(day.uptime)} rounded p-1`}>
            <div className="text-xs">{day.day}</div>
            <div className="text-center text-xs font-medium mt-1">{day.uptime}%</div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        <span className="inline-block w-4 h-4 bg-green-100 rounded mr-2"></span>
        <span className="text-xs text-gray-500 mr-4">100% Uptime</span>
        <span className="inline-block w-4 h-4 bg-yellow-100 rounded mr-2"></span>
        <span className="text-xs text-gray-500 mr-4">99-99.9% Uptime</span>
        <span className="inline-block w-4 h-4 bg-red-100 rounded mr-2"></span>
        <span className="text-xs text-gray-500">{"< 99% Uptime"}</span>
      </div>
    </div>
  )
}

