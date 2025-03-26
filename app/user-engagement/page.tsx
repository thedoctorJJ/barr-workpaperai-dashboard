"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, LineChart, EngagementTable, FeatureAdoptionTimeline } from "@/components/engagement-charts"

export default function UserEngagement() {
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
        <Link href="/user-engagement" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
          User Engagement
        </Link>
        <Link href="/performance-analytics" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
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
          <KpiCard
            title="Avg. Session Duration"
            value="24.7"
            suffix={<span className="ml-2 text-xs text-gray-500">min</span>}
            change="+10%"
          />
          <KpiCard title="Sessions Per User" value="3.8" change="+12%" />
          <KpiCard title="Feature Adoption" value="87%" change="+15%" />
          <KpiCard title="Engagement Score" value="78%" change="+8%" />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Session Metrics Chart */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Session Metrics</h3>
              <div className="h-64">
                <LineChart type="sessionMetrics" />
              </div>
            </CardContent>
          </Card>

          {/* Feature Usage Chart */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Feature Usage</h3>
              <div className="h-64">
                <BarChart type="featureUsage" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Drop-off Analysis */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Drop-off Analysis</h3>
              <div className="h-64">
                <BarChart type="dropoff" />
              </div>
            </CardContent>
          </Card>

          {/* Session Frequency Distribution */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Session Frequency Distribution</h3>
              <div className="h-64">
                <BarChart type="sessionFrequency" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Detail Section */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#0B293F] font-medium text-lg">User Engagement Detail</h3>
              <div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select User Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Auditors</SelectItem>
                    <SelectItem value="senior">Senior Auditors</SelectItem>
                    <SelectItem value="staff">Staff Auditors</SelectItem>
                    <SelectItem value="new">New Users</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <EngagementTable />
          </CardContent>
        </Card>

        {/* Feature Adoption Timeline */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">Feature Adoption Timeline</h3>
            <FeatureAdoptionTimeline />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function KpiCard({ title, value, change, suffix, highlighted = false }) {
  return (
    <Card className={highlighted ? "border-2 border-[#FF5F1F] shadow-lg" : ""}>
      <CardContent className={`p-4 ${highlighted ? "bg-gradient-to-br from-white to-orange-50" : ""}`}>
        <h3 className={`text-sm font-medium ${highlighted ? "text-[#FF5F1F]" : "text-gray-500"}`}>{title}</h3>
        <div className="mt-2 flex items-baseline">
          <span className={`text-3xl font-bold ${highlighted ? "text-[#FF5F1F]" : "text-[#0B293F]"}`}>{value}</span>
          {change && <span className="ml-2 text-sm text-green-500">{change}</span>}
          {suffix}
        </div>
      </CardContent>
    </Card>
  )
}

