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

const validationRateData = [
  {
    name: 'Simple Audits',
    before: 75,
    after: 95,
  },
  {
    name: 'Medium Complexity',
    before: 60,
    after: 88,
  },
  {
    name: 'Complex Audits',
    before: 45,
    after: 82,
  },
]

export function FirstPassValidationRate() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={validationRateData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'First-Pass Success Rate (%)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar name="Before AI" dataKey="before" fill="#94A3B8" />
        <Bar name="With AI" dataKey="after" fill="#FF5F1F" />
      </BarChart>
    </ResponsiveContainer>
  )
} 