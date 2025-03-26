"use client"

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const loopbackData = [
  { week: 'Week 1', before: 8, after: 3 },
  { week: 'Week 2', before: 7, after: 2 },
  { week: 'Week 3', before: 9, after: 2 },
  { week: 'Week 4', before: 8, after: 1 },
]

export function LoopbackFrequency() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={loopbackData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis label={{ value: 'Loopbacks per Audit', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line
          name="Before AI"
          type="monotone"
          dataKey="before"
          stroke="#94A3B8"
          strokeWidth={2}
          dot={{ fill: '#94A3B8' }}
        />
        <Line
          name="With AI"
          type="monotone"
          dataKey="after"
          stroke="#FF5F1F"
          strokeWidth={2}
          dot={{ fill: '#FF5F1F' }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 