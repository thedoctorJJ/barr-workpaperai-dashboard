"use client"

import React from 'react'
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface LineChartProps {
  type: 'costEfficiency'
}

const costEfficiencyData = [
  { week: 'Week 1', cost: 100 },
  { week: 'Week 2', cost: 85 },
  { week: 'Week 3', cost: 65 },
  { week: 'Week 4', cost: 45 },
]

export function LineChart({ type }: LineChartProps) {
  if (type === 'costEfficiency') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={costEfficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis label={{ value: 'Cost per Audit ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line type="monotone" dataKey="cost" stroke="#FF5F1F" strokeWidth={2} dot={{ fill: '#FF5F1F' }} />
        </RechartsLineChart>
      </ResponsiveContainer>
    )
  }

  return null
} 