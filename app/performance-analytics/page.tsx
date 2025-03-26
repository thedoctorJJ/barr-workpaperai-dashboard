"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  BarChart,
  PieChart,
  DoughnutChart,
  WorkpaperQualityTable,
  SystemUptimeCalendar,
} from "@/components/performance-charts"

export default function PerformanceAnalytics() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-[#0B293F] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold">BARR Analytics Dashboard</div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <Select defaultValue="week4">
              <SelectTrigger className="bg-white text-[#0B293F] w-[200px]">
                <SelectValue placeholder="Select Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week4">Alpha Testing: Week 4</SelectItem>
                <SelectItem value="week3">Alpha Testing: Week 3</SelectItem>
                <SelectItem value="week2">Alpha Testing: Week 2</SelectItem>
                <SelectItem value="week1">Alpha Testing: Week 1</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-[#0B293F] font-bold flex items-center justify-center">
            BA
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b flex px-6 overflow-x-auto">
        <Link href="/executive-summary" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          Executive Summary
        </Link>
        <Link href="/user-adoption" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          User Adoption
        </Link>
        <Link href="/user-engagement" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          User Engagement
        </Link>
        <Link href="/performance-analytics" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
          Performance Analytics
        </Link>
        <Link href="/business-impact" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          Business Impact
        </Link>
        <Link href="/system-admin" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          System Admin
        </Link>
      </div>

      {/* Main Content */}
      <main className="px-6 py-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard title="AI Accuracy Rate" value="87%" change="+5%" />
          <KpiCard
            title="Avg Response Time"
            value="1.8"
            suffix={<span className="ml-2 text-xs text-gray-500">seconds</span>}
            change="-12%"
          />
          <KpiCard title="Error Rate" value="0.9%" change="-0.3%" />
          <KpiCard
            title="Workpaper Edit Rate"
            value="1.4"
            suffix={<span className="ml-2 text-xs text-gray-500">edits</span>}
            change="-0.2"
          />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* AI Performance Trend */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">AI Performance Trend</h3>
              <div className="h-64">
                <LineChart type="aiPerformance" />
              </div>
            </CardContent>
          </Card>

          {/* Response Time Distribution */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Response Time Distribution</h3>
              <div className="h-64">
                <BarChart type="responseTime" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Error Categories */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Error Categories</h3>
              <div className="h-64">
                <PieChart type="errorCategories" />
              </div>
            </CardContent>
          </Card>

          {/* Override Reasons */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Override Reasons</h3>
              <div className="h-64">
                <DoughnutChart type="overrideReasons" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Workpaper Quality Metrics */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#0B293F] font-medium text-lg">Workpaper Quality Metrics</h3>
              <div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Template" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Templates</SelectItem>
                    <SelectItem value="soc2">SOC 2 Common Criteria</SelectItem>
                    <SelectItem value="privacy">Privacy Controls</SelectItem>
                    <SelectItem value="availability">Availability Controls</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <WorkpaperQualityTable />
          </CardContent>
        </Card>

        {/* System Uptime Calendar */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">System Uptime Calendar</h3>
            <SystemUptimeCalendar />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function KpiCard({ title, value, change, suffix }) {
  return (
    <Card>
      <CardContent className="p-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold text-[#0B293F]">{value}</span>
          {suffix}
          {change && <span className="ml-2 text-sm text-green-500">{change}</span>}
        </div>
      </CardContent>
    </Card>
  )
}

