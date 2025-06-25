import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const chartData = [
  { name: 'jan', lucro: 219161 },
  { name: 'fev', lucro: -123456 },
  { name: 'mar', lucro: 456789 },
  { name: 'abr', lucro: 102938 },
  { name: 'mai', lucro: 321987 },
  { name: 'jun', lucro: -203456 },
  { name: 'jul', lucro: 501234 },
  { name: 'ago', lucro: 654321 },
  { name: 'set', lucro: 301298 },
  { name: 'out', lucro: -50123 },
  { name: 'nov', lucro: 250192 },
  { name: 'dez', lucro: 701234 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-card border rounded-md shadow-lg">
        <p className="label font-bold capitalize">{`${label}`}</p>
        <p className={`intro ${payload[0].value > 0 ? 'text-success' : 'text-destructive'}`}>
          {`Lucro: ${payload[0].value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
        </p>
      </div>
    );
  }

  return null;
};

const LineChartSection: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lucro por Mês</CardTitle>
        <CardDescription>Análise de lucro e prejuízo mensal para o ano selecionado.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" className="capitalize" />
              <YAxis
                tickFormatter={(value) =>
                  `R$${(Number(value) / 1000).toLocaleString('pt-BR')}k`
                }
                tick={{ fontSize: 12 }}
                stroke="hsl(var(--muted-foreground))"
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))' }} />
              <Bar dataKey="lucro" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.lucro > 0 ? 'hsl(var(--primary))' : 'hsl(var(--destructive))'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default LineChartSection;
