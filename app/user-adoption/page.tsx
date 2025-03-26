"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LineChart,
  BarChart,
  ActivityHeatmap,
  UserCohortRetention,
  UserJourneyFunnel,
} from "@/components/adoption-charts"

export default function UserAdoption() {
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
        <Link href="/user-adoption" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
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
        <Link href="/system-admin" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          System Admin
        </Link>
      </div>

      {/* Main Content */}
      <main className="px-6 py-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard title="Daily Active Users" value="21" change="+4" />
          <KpiCard title="Monthly Active Users" value="24" change="+2" />
          <KpiCard title="DAU/MAU Ratio" value="88%" change="+13%" />
          <KpiCard
            title="New Users This Week"
            value="2"
            suffix={<span className="ml-2 text-xs text-gray-500">auditors</span>}
          />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Detailed User Adoption Trend */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Detailed User Adoption Trend</h3>
              <div className="h-64">
                <LineChart type="userAdoption" />
              </div>
            </CardContent>
          </Card>

          {/* User Activity Heatmap */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Activity by Day & Time</h3>
              <div className="h-64">
                <ActivityHeatmap />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* User Cohort Retention */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">User Cohort Retention</h3>
              <UserCohortRetention />
            </CardContent>
          </Card>

          {/* Adoption by Organization */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Adoption by Organization</h3>
              <div className="h-64">
                <BarChart type="orgAdoption" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Feature Adoption Timeline */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Feature Adoption Timeline</h3>
              <div className="h-64">
                <LineChart type="featureAdoption" />
              </div>
            </CardContent>
          </Card>

          {/* User Journey Funnel */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">User Journey Funnel</h3>
              <div className="h-64 flex items-center justify-center">
                <UserJourneyFunnel />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* New vs. Returning Users */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">New vs. Returning Users</h3>
            <div className="h-64">
              <BarChart type="newVsReturning" />
            </div>
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
          {change && <span className="ml-2 text-sm text-green-500">{change}</span>}
          {suffix}
        </div>
      </CardContent>
    </Card>
  )
}

