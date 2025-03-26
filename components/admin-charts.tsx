"use client"

import { useEffect, useRef, useState } from "react"
import Chart from "chart.js/auto"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"

export function ApiUsageChart() {
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
        type: "bar",
        data: {
          labels: [
            "/api/policy/validation",
            "/api/workpaper/generate",
            "/api/policy/retrieve",
            "/api/control/mapping",
            "/api/policy/analysis",
            "/api/auth",
          ],
          datasets: [
            {
              label: "Calls",
              data: [8956, 5432, 4321, 3210, 2345, 589],
              backgroundColor: "#1B91B9",
            },
          ],
        },
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Number of API Calls",
              },
            },
          },
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

export function TokenConsumptionChart() {
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
        type: "line",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Token Usage",
              data: [520000, 1250000, 2750000, 3800000],
              borderColor: "#0B293F",
              backgroundColor: "rgba(11, 41, 63, 0.1)",
              tension: 0.3,
            },
            {
              label: "Cost ($)",
              data: [1040, 2500, 5500, 7600],
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
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Tokens",
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
                text: "Cost ($)",
              },
            },
          },
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

export function ErrorLogChart() {
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
        type: "bar",
        data: {
          labels: ["May 22", "May 23", "May 24", "May 25", "May 26", "May 27", "May 28"],
          datasets: [
            {
              label: "Errors",
              data: [5, 3, 4, 2, 6, 2, 3],
              backgroundColor: "#EF4444",
            },
            {
              label: "Warnings",
              data: [8, 12, 7, 9, 11, 8, 6],
              backgroundColor: "#F59E0B",
            },
            {
              label: "Info",
              data: [42, 38, 47, 52, 41, 36, 44],
              backgroundColor: "#3B82F6",
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
                text: "Count",
              },
            },
          },
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

export function ResponseTimeChart() {
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
        type: "bar",
        data: {
          labels: [
            "Policy Service",
            "Workpaper Service",
            "Control Service",
            "AI Model Service",
            "Auth Service",
            "Database Service",
          ],
          datasets: [
            {
              label: "Avg Response Time (ms)",
              data: [320, 540, 280, 1250, 85, 120],
              backgroundColor: "#1B91B9",
            },
            {
              label: "90th Percentile (ms)",
              data: [580, 980, 420, 1850, 145, 210],
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
              title: {
                display: true,
                text: "Time (ms)",
              },
            },
          },
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

export function PermissionDistributionChart() {
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
        type: "pie",
        data: {
          labels: ["Admin", "Auditor Manager", "Senior Auditor", "Staff Auditor", "Read Only"],
          datasets: [
            {
              data: [3, 5, 9, 12, 2],
              backgroundColor: ["#0B293F", "#1B91B9", "#3B82F6", "#60A5FA", "#93C5FD"],
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
          },
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

export function SystemHealthDashboard() {
  const metrics = [
    { name: "CPU Utilization", value: 42, label: "Current" },
    { name: "Memory Usage", value: 61, label: "Current" },
    { name: "Disk Space", value: 78, label: "Available", color: "bg-green-500" },
    { name: "Network Traffic", value: 27, label: "Current" },
  ]

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="p-3 border rounded">
          <h4 className="text-center text-sm font-medium mb-2">{metric.name}</h4>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  {metric.label}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">{metric.value}%</span>
              </div>
            </div>
            <Progress value={metric.value} className={`h-2 ${metric.color ? metric.color : "bg-blue-500"}`} />
          </div>
        </div>
      ))}
    </div>
  )
}

export function RecentSystemEvents() {
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 5
  const totalEvents = 138

  const events = [
    {
      timestamp: "2023-05-28 15:42:18",
      level: "error",
      service: "Policy Service",
      message: "Failed to retrieve policy document: timeout after 30s",
      sourceIp: "192.168.1.45",
      status: "unresolved",
    },
    {
      timestamp: "2023-05-28 14:37:55",
      level: "warning",
      service: "API Gateway",
      message: "High latency detected in policy retrieval endpoint (2.8s)",
      sourceIp: "54.23.156.78",
      status: "resolved",
    },
    {
      timestamp: "2023-05-28 13:12:04",
      level: "info",
      service: "Auth Service",
      message: "New user registration from TechNova organization",
      sourceIp: "72.45.189.12",
      status: "n/a",
    },
    {
      timestamp: "2023-05-28 12:54:37",
      level: "warning",
      service: "Model Service",
      message: "Token usage rate higher than expected (15% above baseline)",
      sourceIp: "Internal",
      status: "monitoring",
    },
    {
      timestamp: "2023-05-28 11:23:16",
      level: "error",
      service: "Database Service",
      message: "Connection pool exhausted (max connections: 100)",
      sourceIp: "Internal",
      status: "resolved",
    },
  ]

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case "error":
        return "bg-red-100 text-red-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "info":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "resolved":
        return "bg-green-100 text-green-800"
      case "unresolved":
        return "bg-red-100 text-red-800"
      case "monitoring":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source IP
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {events.map((event, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.timestamp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getLevelBadgeClass(
                      event.level,
                    )}`}
                  >
                    {event.level.charAt(0).toUpperCase() + event.level.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.service}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{event.message}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.sourceIp}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                      event.status,
                    )}`}
                  >
                    {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {eventsPerPage} of {totalEvents} events
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
            disabled={currentPage * eventsPerPage >= totalEvents}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export function ClientIntegrationStatus() {
  const clients = [
    {
      name: "ACME Corp",
      initials: "AC",
      activeUsers: 6,
      status: "connected",
      apiUsage: { level: "High", percentage: 85 },
      lastActivity: "12 minutes ago",
      errorRate: "0.4%",
      health: "excellent",
    },
    {
      name: "TechNova",
      initials: "TN",
      activeUsers: 5,
      status: "connected",
      apiUsage: { level: "Medium", percentage: 65 },
      lastActivity: "37 minutes ago",
      errorRate: "0.7%",
      health: "good",
    },
    {
      name: "GlobalFin",
      initials: "GF",
      activeUsers: 4,
      status: "degraded",
      apiUsage: { level: "Medium", percentage: 60 },
      lastActivity: "3 hours ago",
      errorRate: "2.1%",
      health: "warning",
    },
    {
      name: "SecureCloud",
      initials: "SC",
      activeUsers: 3,
      status: "connected",
      apiUsage: { level: "Low", percentage: 40 },
      lastActivity: "2 hours ago",
      errorRate: "0.5%",
      health: "good",
    },
    {
      name: "DataSystems",
      initials: "DS",
      activeUsers: 3,
      status: "issues",
      apiUsage: { level: "Low", percentage: 25 },
      lastActivity: "6 hours ago",
      errorRate: "3.2%",
      health: "alert",
    },
  ]

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "connected":
        return "bg-green-100 text-green-800"
      case "degraded":
        return "bg-yellow-100 text-yellow-800"
      case "issues":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getHealthIcon = (health) => {
    switch (health) {
      case "excellent":
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "alert":
        return <XCircle className="w-5 h-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              API Usage
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Activity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Error Rate
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Health</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {clients.map((client, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-sm font-medium">{client.initials}</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{client.name}</div>
                    <div className="text-xs text-gray-500">{client.activeUsers} active users</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(
                    client.status,
                  )}`}
                >
                  {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div className="flex items-center">
                  <span className="mr-2">{client.apiUsage.level}</span>
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-full bg-[#1B91B9] rounded-full"
                      style={{ width: `${client.apiUsage.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.lastActivity}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.errorRate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {getHealthIcon(client.health)}
                  <span className="ml-1 text-sm text-gray-700">
                    {client.health.charAt(0).toUpperCase() + client.health.slice(1)}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

