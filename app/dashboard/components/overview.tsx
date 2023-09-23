"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Chapter 1 - Preparing For Your Hospital Stay
// Chapter 2 - Total Hip Replacement (THR)
// Chapter 3 - Consent
// Chapter 4 - 2-5 Days To Go To The Day Of Surgery
// Chapter 5 - Anaesthesia For Hip Replacement
// Chapter 6 - After Your Surgery
// Chapter 7 - Going Home
// Chapter 8 - Wound Care
// Chapter 9 - Physiotherapy And Rehabilitation After Hip Replacement
// Chapter 10 - Follow Up Appointment And Travel Advice

const data = [
  {
    name: "Chapter 1",
    total: Math.random(),
  },
  {
    name: "Chapter 2",
    total: Math.random(),
  },
  {
    name: "Chapter 3",
    total: Math.random(),
  },
  {
    name: "Chapter 4",
    total: Math.random(),
  },
  {
    name: "Chapter 5",
    total: Math.random(),
  },
  {
    name: "Chapter 6",
    total: Math.random(),
  },
  {
    name: "Chapter 7",
    total: Math.random(),
  },
  {
    name: "Chapter 8",
    total: Math.random(),
  },
  {
    name: "Chapter 9",
    total: Math.random(),
  },
  {
    name: "Chapter 10",
    total: Math.random(),
  }
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
