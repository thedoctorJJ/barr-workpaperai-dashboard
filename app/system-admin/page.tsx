"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ApiUsageChart,
  TokenConsumptionChart,
  ErrorLogChart,
  ResponseTimeChart,
  PermissionDistributionChart,
  SystemHealthDashboard,
  RecentSystemEvents,
  ClientIntegrationStatus,
} from "@/components/admin-charts"

export default function SystemAdmin() {
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
        <Link href="/performance-analytics" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          Performance Analytics
        </Link>
        <Link href="/business-impact" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          Business Impact
        </Link>
        <Link href="/system-admin" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
          System Admin
        </Link>
      </div>

      {/* Main Content */}
      <main className="px-6 py-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard title="API Call Volume" value="24,853" change="+18%" />
          <KpiCard
            title="Token Usage"
            value="3.8M"
            suffix={<span className="ml-2 text-xs text-gray-500">tokens</span>}
          />
          <KpiCard title="Error Rate" value="0.9%" change="-0.3%" />
          <KpiCard
            title="Total Cost"
            value="$3,175"
            suffix={<span className="ml-2 text-xs text-gray-500">this month</span>}
            highlighted={true}
          />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* API Usage by Endpoint */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">API Usage by Endpoint</h3>
              <div className="h-64">
                <ApiUsageChart />
              </div>
            </CardContent>
          </Card>

          {/* Token Consumption Trend */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Token Consumption Trend</h3>
              <div className="h-64">
                <TokenConsumptionChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Error Log Timeline */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Error Log Timeline</h3>
              <div className="h-64">
                <ErrorLogChart />
              </div>
            </CardContent>
          </Card>

          {/* Response Time by Service */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Response Time by Service</h3>
              <div className="h-64">
                <ResponseTimeChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Permission Distribution & System Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* User Permission Distribution */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">User Permission Distribution</h3>
              <div className="h-64">
                <PermissionDistributionChart />
              </div>
            </CardContent>
          </Card>

          {/* System Health Dashboard */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">System Health Dashboard</h3>
              <SystemHealthDashboard />
            </CardContent>
          </Card>
        </div>

        {/* Recent System Events */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[#0B293F] font-medium text-lg">Recent System Events</h3>
              <div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter Events" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Events</SelectItem>
                    <SelectItem value="errors">Errors Only</SelectItem>
                    <SelectItem value="warnings">Warnings Only</SelectItem>
                    <SelectItem value="info">Informational Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <RecentSystemEvents />
          </CardContent>
        </Card>

        {/* Client Integration Status */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">Client Integration Status</h3>
            <ClientIntegrationStatus />
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

