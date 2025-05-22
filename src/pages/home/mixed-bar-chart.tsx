import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import { ArrowBigUp } from "lucide-react";

const chartData = [
  { vendor: "Controle", porcentagem: 14, fill: "white" },
  { vendor: "Thermo Pink", porcentagem: 33, fill: "var(--color-pink-500)" },
]

const chartConfig = {
  porcentagem: {
    label: "porcentagem",
  },
  Controle: {
    label: "Controle",
    color: "hsl(var(--chart-1))",
  },
  'Thermo Pink': {
    label: "Thermo Pink",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function BarChartComponent() {
  return (
    <div className="w-full h-full relative">

      {/* //TODO: FIX ABSOLUTE POSITION */}
      <div className="absolute right-22 translate-x-1/2 -translate-y-1/2 flex bottom-5 gap-2 text-white"> 
        <ArrowBigUp className="h-10 w-10 md:h-12 md:w-12 text-white" fill="white" />
        <p className="text-4xl md:text-5xl font-sans font-bold text-white">33%</p>
      </div>

      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          layout="horizontal"
          margin={{
            left: 0,
          }}
          barCategoryGap={'20%'}
        >
          <XAxis
            dataKey="vendor"
            type="category"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => 
              chartConfig[value as keyof typeof chartConfig]?.label
            }
            padding={{
              left: 0,
              right: 148,
            }}
            tick={{ 
              fontSize: 18,
              fontWeight: 600,
            }}
          />

          <YAxis dataKey="porcentagem" type="number" domain={[0, 100]} />

          <Bar dataKey="porcentagem" layout="horizontal" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}