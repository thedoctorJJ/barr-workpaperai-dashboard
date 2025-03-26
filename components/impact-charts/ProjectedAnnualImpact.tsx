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

const projectedData = [
  {
    category: 'Time Savings',
    value: 2600,
    unit: 'hours',
  },
  {
    category: 'Cost Reduction',
    value: 390000,
    unit: 'USD',
  },
  {
    category: 'Additional Capacity',
    value: 1040,
    unit: 'audits',
  },
  {
    category: 'Quality Improvement',
    value: 68,
    unit: 'percent',
  },
]

export function ProjectedAnnualImpact() {
  const formatTooltip = (value: number, name: string, props: { payload: { unit: string } }) => {
    const unit = props.payload.unit
    if (unit === 'USD') {
      return `$${value.toLocaleString()}`
    }
    if (unit === 'percent') {
      return `${value}%`
    }
    return `${value.toLocaleString()} ${unit}`
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={projectedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" angle={-45} textAnchor="end" height={80} />
        <YAxis />
        <Tooltip formatter={formatTooltip} />
        <Bar dataKey="value" fill="#FF5F1F" />
      </BarChart>
    </ResponsiveContainer>
  )
} 