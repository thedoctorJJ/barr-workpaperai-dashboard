"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

export function BarChart({ type = "workflowSavings" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "workflowSavings") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Policy Retrieval", "Policy Review", "Control Mapping", "Documentation", "Quality Review"],
            datasets: [
              {
                label: "Manual Process",
                data: [45, 120, 90, 75, 60],
                backgroundColor: "#6B7280",
              },
              {
                label: "BARR AI Process",
                data: [10, 15, 20, 5, 65],
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
                  label: (context) => context.dataset.label + ": " + context.parsed.y + " min",
                },
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
            },
          },
        })
      } else if (type === "auditCapacity") {
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Audits Per Auditor (Monthly)", "Audits Per Team (Monthly)", "Time Per Audit (Hours)"],
            datasets: [
              {
                label: "Manual Process",
                data: [4.2, 46.2, 6.5],
                backgroundColor: "#6B7280",
              },
              {
                label: "BARR AI Process",
                data: [7.8, 85.8, 1.9],
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
                  text: "Value",
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

export function LineChart({ type = "costEfficiency" }) {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy existing chart
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      if (type === "costEfficiency") {
        chartInstance.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Cumulative Savings",
                data: [4200, 12500, 23700, 32550],
                borderColor: "#FF5F1F",
                backgroundColor: "rgba(255, 95, 31, 0.1)",
                yAxisID: "y",
                tension: 0.3,
              },
              {
                label: "Cost Per Audit",
                data: [850, 720, 670, 650],
                borderColor: "#0B293F",
                backgroundColor: "rgba(11, 41, 63, 0.1)",
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
                position: "left",
                title: {
                  display: true,
                  text: "Cumulative Savings ($)",
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
                  text: "Cost Per Audit ($)",
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

export function RadarChart() {
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
        type: "radar",
        data: {
          labels: ["Completeness", "Accuracy", "Consistency", "Timeliness", "Compliance"],
          datasets: [
            {
              label: "Manual Process",
              data: [65, 75, 70, 60, 80],
              backgroundColor: "rgba(107, 114, 128, 0.2)",
              borderColor: "#6B7280",
              pointBackgroundColor: "#6B7280",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#6B7280",
            },
            {
              label: "BARR AI Process",
              data: [90, 87, 95, 98, 92],
              backgroundColor: "rgba(27, 145, 185, 0.2)",
              borderColor: "#1B91B9",
              pointBackgroundColor: "#1B91B9",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "#1B91B9",
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
            r: {
              angleLines: {
                display: true,
              },
              suggestedMin: 50,
              suggestedMax: 100,
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

export function ValidationEfficiencyComparison() {
  const manualSteps = [
    { name: "Policy Retrieval", time: 45, percentage: 75 },
    { name: "Policy Review", time: 120, percentage: 100 },
    { name: "Control Mapping", time: 90, percentage: 90 },
    { name: "Documentation", time: 75, percentage: 85 },
    { name: "Quality Review", time: 60, percentage: 78 },
  ]

  const aiSteps = [
    { name: "Policy Retrieval", time: 10, percentage: 25 },
    { name: "Policy Review", time: 15, percentage: 30 },
    { name: "Control Mapping", time: 20, percentage: 35 },
    { name: "Documentation", time: 5, percentage: 20 },
    { name: "Quality Review", time: 65, percentage: 80 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 border rounded">
        <h4 className="text-[#0B293F] font-medium mb-2">Manual Process</h4>
        <div className="space-y-4">
          {manualSteps.map((step, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{step.name}</span>
                <span className="text-sm font-medium">{step.time} min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: `${step.percentage}%` }}></div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="font-medium">Total Time</span>
            <span className="font-medium">390 min (6.5 hours)</span>
          </div>
        </div>
      </div>
      <div className="p-4 border rounded">
        <h4 className="text-[#1B91B9] font-medium mb-2">BARR AI Process</h4>
        <div className="space-y-4">
          {aiSteps.map((step, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">{step.name}</span>
                <span className="text-sm font-medium">{step.time} min</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-[#1B91B9] h-2.5 rounded-full" style={{ width: `${step.percentage}%` }}></div>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2 border-t">
            <span className="font-medium">Total Time</span>
            <span className="font-medium">115 min (1.9 hours)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function LoopbackFrequency() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3 border rounded">
        <h4 className="text-gray-500 font-medium mb-2">Manual Process</h4>
        <div className="text-center py-4">
          <div className="text-4xl font-bold text-gray-700 mb-1">3.8</div>
          <div className="text-sm text-gray-500">revisions per control</div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center text-xs">
            <span>0</span>
            <span>8</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gray-500 h-2 rounded-full" style={{ width: "47.5%" }}></div>
          </div>
        </div>
      </div>
      <div className="p-3 border rounded">
        <h4 className="text-[#1B91B9] font-medium mb-2">BARR AI Process</h4>
        <div className="text-center py-4">
          <div className="text-4xl font-bold text-[#1B91B9] mb-1">1.6</div>
          <div className="text-sm text-gray-500">revisions per control</div>
        </div>
        <div className="mt-2">
          <div className="flex justify-between items-center text-xs">
            <span>0</span>
            <span>8</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-[#1B91B9] h-2 rounded-full" style={{ width: "20%" }}></div>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-3 border rounded mt-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Improvement</span>
          <span className="font-medium text-sm text-green-500">-57.9%</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "57.9%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function FirstPassValidationRate() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3 border rounded">
        <h4 className="text-gray-500 font-medium mb-2">Manual Process</h4>
        <div className="text-center">
          <div className="inline-block relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#6B7280"
                strokeWidth="3"
                strokeDasharray="42, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-gray-700">42%</span>
              <span className="text-xs text-gray-500">first-pass</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-3 border rounded">
        <h4 className="text-[#1B91B9] font-medium mb-2">BARR AI Process</h4>
        <div className="text-center">
          <div className="inline-block relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1B91B9"
                strokeWidth="3"
                strokeDasharray="76, 100"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-[#1B91B9]">76%</span>
              <span className="text-xs text-gray-500">first-pass</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2 p-3 border rounded mt-2">
        <div className="flex justify-between items-center">
          <span className="font-medium text-sm">Improvement</span>
          <span className="font-medium text-sm text-green-500">+34% points</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "34%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectedAnnualImpact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 border rounded bg-gray-50">
        <h4 className="text-center font-medium mb-4">Time Savings</h4>
        <div className="text-center mb-2">
          <span className="text-5xl font-bold text-[#0B293F]">2,600</span>
          <span className="text-xl text-gray-500 ml-2">hours</span>
        </div>
        <div className="text-center text-sm text-gray-500 mb-4">Based on current adoption trends</div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Current Alpha Testing</span>
            <span className="font-medium">217 hours</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Full Deployment (est.)</span>
            <span className="font-medium">2,600 hours</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Equivalent To</span>
            <span className="font-medium">1.25 FTE</span>
          </div>
        </div>
      </div>

      <div className="p-4 border rounded bg-gray-50">
        <h4 className="text-center font-medium mb-4">Cost Savings</h4>
        <div className="text-center mb-2">
          <span className="text-5xl font-bold text-[#FF5F1F]">$390K</span>
        </div>
        <div className="text-center text-sm text-gray-500 mb-4">Annual savings at full deployment</div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Current Alpha Testing</span>
            <span className="font-medium">$32,550</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Full Deployment (est.)</span>
            <span className="font-medium">$390,000</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>ROI</span>
            <span className="font-medium">325%</span>
          </div>
        </div>
      </div>

      <div className="p-4 border rounded bg-gray-50">
        <h4 className="text-center font-medium mb-4">Capacity Increase</h4>
        <div className="text-center mb-2">
          <span className="text-5xl font-bold text-[#0B293F]">86</span>
          <span className="text-xl text-gray-500 ml-2">%</span>
        </div>
        <div className="text-center text-sm text-gray-500 mb-4">Increased audit throughput</div>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center text-sm">
            <span>Audits Per Auditor (Old)</span>
            <span className="font-medium">4.2 / month</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Audits Per Auditor (New)</span>
            <span className="font-medium">7.8 / month</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Annual Capacity Gain</span>
            <span className="font-medium">+864 audits</span>
          </div>
        </div>
      </div>
    </div>
  )
}

