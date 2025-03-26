"use client"

import React from 'react'
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BarChart,
  LineChart,
  RadarChart,
  ValidationEfficiencyComparison,
  LoopbackFrequency,
  FirstPassValidationRate,
  ProjectedAnnualImpact,
} from "@/components/impact-charts"

interface KpiCardProps {
  title: string
  value: string
  change?: string
  suffix?: React.ReactNode
  highlighted?: boolean
}

export default function BusinessImpact() {
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
        <Link href="/business-impact" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
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
            title="Total Time Saved"
            value="217"
            suffix={<span className="ml-2 text-xs text-gray-500">hours</span>}
          />
          <KpiCard title="Cost Savings" value="$32,550" change="+65%" highlighted={true} />
          <KpiCard title="Capacity Increase" value="86%" change="+12%" />
          <KpiCard
            title="Quality Improvement"
            value="57%"
            suffix={<span className="ml-2 text-xs text-gray-500">fewer revisions</span>}
          />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Time Savings by Workflow Step */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Time Savings by Workflow Step</h3>
              <div className="h-64">
                <BarChart type="workflowSavings" />
              </div>
            </CardContent>
          </Card>

          {/* Cost Efficiency Trend */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Cost Efficiency Trend</h3>
              <div className="h-64">
                <LineChart type="costEfficiency" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Audit Capacity Comparison */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Audit Capacity Comparison</h3>
              <div className="h-64">
                <BarChart type="auditCapacity" />
              </div>
            </CardContent>
          </Card>

          {/* Quality Metrics Comparison */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Quality Metrics Comparison</h3>
              <div className="h-64">
                <RadarChart />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Validation Efficiency Comparison */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">Validation Efficiency Comparison</h3>
            <ValidationEfficiencyComparison />
          </CardContent>
        </Card>

        {/* Loopback Frequency & Completion Rate */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Loopback Frequency */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Loopback Frequency</h3>
              <LoopbackFrequency />
            </CardContent>
          </Card>

          {/* First-Pass Validation Rate */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">First-Pass Validation Rate</h3>
              <FirstPassValidationRate />
            </CardContent>
          </Card>
        </div>

        {/* Projected Annual Impact */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">Projected Annual Impact</h3>
            <ProjectedAnnualImpact />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

function KpiCard({ title, value, change, suffix, highlighted = false }: KpiCardProps) {
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