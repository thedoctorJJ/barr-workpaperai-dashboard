"use client"

import { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"
import { Button } from "@/components/ui/button"

export function LineChart({ type = "sessionMetrics" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "sessionMetrics") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Avg Session Duration (min)",
                data: [16.2, 19.8, 22.5, 24.7],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
                yAxisID: "y",
                tension: 0.3,
              },
              {
                label: "Sessions Per User",
                data: [2.1, 2.8, 3.4, 3.8],
                borderColor: "#1B91B9",
                backgroundColor: "rgba(27, 145, 185, 0.1)",
                yAxisID: "y1",
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
                title: {
                  display: true,
                  text: "Minutes",
                },
              },
              y1: {
                beginAtZero: true,
                position: "right",
                grid: {
                  drawOnChartArea: false,
                },
                title: {
                  display: true,
                  text: "Sessions",
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

export function BarChart({ type = "featureUsage" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "featureUsage") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Policy Validation", "Completeness Check", "Workpaper Gen", "Policy Analysis", "Control Mapping"],
            datasets: [
              {
                label: "Usage Count",
                data: [278, 254, 132, 98, 87],
                backgroundColor: "#1B91B9",
              },
              {
                label: "Avg Time Spent (min)",
                data: [8.3, 6.7, 5.2, 9.5, 12.1],
                backgroundColor: "#0B293F",
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
      } else if (type === "dropoff") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Start", "Policy Review", "Validation", "Workpaper", "Complete"],
            datasets: [
              {
                label: "User Flow",
                data: [100, 94, 87, 76, 68],
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
                  label: (context) => context.parsed.y + "% of users",
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
      } else if (type === "sessionFrequency") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["1 per week", "2-3 per week", "4-5 per week", "Daily", "Multiple daily"],
            datasets: [
              {
                label: "Auditors",
                data: [4, 8, 7, 3, 2],
                backgroundColor: "#0B293F",
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
                title: {
                  display: true,
                  text: "Number of Auditors",
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

export function EngagementTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 5
  const totalUsers = 24

  const users = [
    {
      id: 1,
      initials: "JD",
      name: "John Doe",
      role: "Senior Auditor",
      sessions: 12,
      avgDuration: "32 min",
      featuresUsed: "5/5",
      workpapers: 17,
      score: 92,
    },
    {
      id: 2,
      initials: "JS",
      name: "Jane Smith",
      role: "Staff Auditor",
      sessions: 9,
      avgDuration: "28 min",
      featuresUsed: "4/5",
      workpapers: 12,
      score: 85,
    },
    {
      id: 3,
      initials: "RJ",
      name: "Robert Johnson",
      role: "Senior Auditor",
      sessions: 7,
      avgDuration: "22 min",
      featuresUsed: "5/5",
      workpapers: 9,
      score: 78,
    },
    {
      id: 4,
      initials: "AL",
      name: "Amanda Lee",
      role: "Staff Auditor",
      sessions: 5,
      avgDuration: "18 min",
      featuresUsed: "3/5",
      workpapers: 6,
      score: 64,
    },
    {
      id: 5,
      initials: "MT",
      name: "Mike Thomas",
      role: "Staff Auditor",
      sessions: 3,
      avgDuration: "14 min",
      featuresUsed: "2/5",
      workpapers: 3,
      score: 45,
    },
  ]

  const getScoreColor = (score) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Auditor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sessions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Avg Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Features Used
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Workpapers
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement Score
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                      {user.initials}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.role}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.sessions}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.avgDuration}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.featuresUsed}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.workpapers}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 mr-2">{user.score}%</span>
                    <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full ${getScoreColor(user.score)}`} style={{ width: `${user.score}%` }}></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {usersPerPage} of {totalUsers} auditors
        </div>
        <div className="flex">
          <Button
            variant="outline"
            size="sm"
            className="rounded-r-none"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-l-none border-l-0"
            disabled={currentPage * usersPerPage >= totalUsers}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export function FeatureAdoptionTimeline() {
  const features = [
    {
      name: "Policy Validation",
      adoption: ["regular", "regular", "regular", "regular", "regular", "regular", "regular"],
    },
    {
      name: "Completeness Check",
      adoption: ["regular", "regular", "regular", "regular", "regular", "regular", "regular"],
    },
    {
      name: "Workpaper Generation",
      adoption: ["none", "first", "regular", "regular", "regular", "regular", "regular"],
    },
    {
      name: "Policy Analysis",
      adoption: ["none", "none", "first", "regular", "regular", "regular", "regular"],
    },
    {
      name: "Control Mapping",
      adoption: ["none", "none", "none", "first", "first", "regular", "regular"],
    },
  ]

  const getAdoptionColor = (status) => {
    switch (status) {
      case "regular":
        return "bg-green-500"
      case "first":
        return "bg-yellow-500"
      default:
        return "bg-gray-200"
    }
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Feature
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 1
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 2
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 3
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 7
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 14
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 21
              </th>
              <th className="px-4 py-2 border-b text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Day 28
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="px-4 py-3 border-b text-sm">{feature.name}</td>
                {feature.adoption.map((status, i) => (
                  <td key={i} className="px-4 py-3 border-b">
                    <div className={`w-full h-8 ${getAdoptionColor(status)} rounded`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center">
        <span className="inline-block w-4 h-4 bg-gray-200 rounded mr-2"></span>
        <span className="text-xs text-gray-500 mr-4">Not Used</span>
        <span className="inline-block w-4 h-4 bg-yellow-500 rounded mr-2"></span>
        <span className="text-xs text-gray-500 mr-4">First Use</span>
        <span className="inline-block w-4 h-4 bg-green-500 rounded mr-2"></span>
        <span className="text-xs text-gray-500">Regular Use</span>
      </div>
    </div>
  )
}

