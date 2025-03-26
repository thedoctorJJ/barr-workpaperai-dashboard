"use client"

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const validationData = [
  {
    name: 'Simple Audits',
    before: 45,
    after: 15,
  },
  {
    name: 'Medium Complexity',
    before: 90,
    after: 35,
  },
  {
    name: 'Complex Audits',
    before: 180,
    after: 75,
  },
]

export function ValidationEfficiencyComparison() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={validationData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Minutes per Validation', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar name="Before AI" dataKey="before" fill="#94A3B8" />
        <Bar name="With AI" dataKey="after" fill="#FF5F1F" />
      </BarChart>
    </ResponsiveContainer>
  )
} 