"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, BarChart, DoughnutChart, GaugeChart } from "@/components/charts"
import { Progress } from "@/components/ui/progress"

export default function ExecutiveSummary() {
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
        <Link href="/executive-summary" className="px-4 py-3 font-medium bg-[#0B293F] text-white whitespace-nowrap">
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
        <Link href="/system-admin" className="px-4 py-3 font-medium bg-white text-[#0B293F] whitespace-nowrap">
          System Admin
        </Link>
      </div>

      {/* Main Content */}
      <main className="px-6 py-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <KpiCard title="Active Auditors" value="24" change="+33%" />
          <KpiCard title="Workpapers Generated" value="132" change="+97%" />
          <KpiCard
            title="Time Savings"
            value="71%"
            suffix={<span className="ml-2 text-xs text-gray-500">vs. manual</span>}
          />
          <KpiCard title="Dollar Savings" value="$32,550" change="+65%" highlighted={true} />
        </div>

        {/* Charts Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Weekly Growth Trends */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Weekly Growth Trends</h3>
              <div className="h-64">
                <LineChart type="weeklyGrowth" />
              </div>
            </CardContent>
          </Card>

          {/* ROI Visualization */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">ROI Comparison</h3>
              <div className="h-64">
                <BarChart
                  type="roi"
                  labels={["Manual Process", "With BARR AI"]}
                  dataBefore={[100, 29]}
                  dataAfter={[0, 71]}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* AI Performance Summary */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">AI Accuracy</h3>
              <div className="h-64 flex items-center justify-center">
                <div className="w-3/4 h-3/4">
                  <DoughnutChart />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Adoption Chart */}
          <Card className="lg:col-span-2">
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">User Adoption Trends</h3>
              <div className="h-64">
                <LineChart type="userAdoption" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Feature Usage Chart */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Feature Usage</h3>
              <div className="h-64">
                <BarChart
                  type="feature"
                  labels={[
                    "Policy Validation",
                    "Completeness Check",
                    "Workpaper Gen",
                    "Policy Analysis",
                    "Control Mapping",
                  ]}
                  data={[278, 254, 132, 98, 87]}
                />
              </div>
            </CardContent>
          </Card>

          {/* Time Savings Calculator */}
          <Card>
            <CardContent className="p-4">
              <h3 className="text-[#0B293F] font-medium text-lg mb-4">Time Savings Calculator</h3>
              <div className="flex flex-col h-64">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Total Hours Saved:</span>
                  <span className="font-bold text-[#0B293F]">217 hours</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Average per Audit:</span>
                  <span className="font-bold text-[#0B293F]">5 hours</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-700">Estimated Annual Savings:</span>
                  <span className="font-bold text-[#0B293F]">2,600 hours</span>
                </div>

                <div className="relative pt-1 flex-grow">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#1B91B9] bg-blue-200">
                        Progress
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-[#1B91B9]">$32,550 saved</span>
                    </div>
                  </div>
                  <Progress value={65} className="h-4 bg-blue-200" indicatorClassName="bg-[#1B91B9]" />
                  <div className="text-xs text-gray-500 mt-1">Target: $50,000 in savings during alpha testing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Metrics Gauge */}
        <Card className="mt-6">
          <CardContent className="p-4">
            <h3 className="text-[#0B293F] font-medium text-lg mb-4">Alpha Testing Goals Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Auditors Goal */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <GaugeChart value={80} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-[#0B293F]">24/30</span>
                    <span className="text-xs text-gray-500">Auditors</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-sm font-medium">Active Auditors</span>
                  <div className="text-xs text-gray-500">80% of goal</div>
                </div>
              </div>

              {/* Workpapers Goal */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <GaugeChart value={88} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-[#0B293F]">132/150</span>
                    <span className="text-xs text-gray-500">Workpapers</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-sm font-medium">Workpapers Created</span>
                  <div className="text-xs text-gray-500">88% of goal</div>
                </div>
              </div>

              {/* Time Savings Goal */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <GaugeChart value={118} />
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xl font-bold text-[#0B293F]">71%/60%</span>
                    <span className="text-xs text-gray-500">Time Saved</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="text-sm font-medium">Efficiency Gain</span>
                  <div className="text-xs text-gray-500">118% of goal</div>
                </div>
              </div>
            </div>
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

