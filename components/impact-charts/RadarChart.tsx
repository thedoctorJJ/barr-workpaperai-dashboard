"use client"

import React from 'react'
import {
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const qualityData = [
  { metric: 'Accuracy', before: 75, after: 95 },
  { metric: 'Consistency', before: 70, after: 90 },
  { metric: 'Completeness', before: 80, after: 98 },
  { metric: 'Timeliness', before: 65, after: 92 },
  { metric: 'Documentation', before: 72, after: 94 },
]

export function RadarChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsRadarChart data={qualityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Before AI"
          dataKey="before"
          stroke="#94A3B8"
          fill="#94A3B8"
          fillOpacity={0.5}
        />
        <Radar
          name="With AI"
          dataKey="after"
          stroke="#FF5F1F"
          fill="#FF5F1F"
          fillOpacity={0.5}
        />
        <Legend />
      </RechartsRadarChart>
    </ResponsiveContainer>
  )
} 