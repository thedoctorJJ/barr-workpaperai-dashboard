"use client"

import React from 'react'
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

interface BarChartProps {
  type: 'workflowSavings' | 'auditCapacity'
}

const workflowData = [
  { name: 'Document Collection', hours: 45 },
  { name: 'Initial Review', hours: 38 },
  { name: 'Detailed Analysis', hours: 65 },
  { name: 'Quality Check', hours: 42 },
  { name: 'Final Validation', hours: 27 },
]

const auditData = [
  { name: 'Before AI', audits: 100, fill: '#94A3B8' },
  { name: 'With AI', audits: 186, fill: '#FF5F1F' },
]

export function BarChart({ type }: BarChartProps) {
  const data = type === 'workflowSavings' ? workflowData : auditData
  
  if (type === 'workflowSavings') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
          <YAxis label={{ value: 'Hours Saved', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="hours" fill="#FF5F1F" />
        </RechartsBarChart>
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: 'Audits per Month', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Bar dataKey="audits" fill={(entry) => entry.fill} />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
} 