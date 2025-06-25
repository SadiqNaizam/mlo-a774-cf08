import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const pieData = [
  { name: 'Operacional', value: 25000000 },
  { name: 'N/A Operacional', value: 2016057 },
];
const COLORS = ['hsl(var(--primary))', 'hsl(var(--accentSecondary))'];

interface ClientData {
  name: string;
  revenue: number;
}
const topClientsData: ClientData[] = [
  { name: 'Cliente 26', revenue: 3800000 },
  { name: 'Cliente 9', revenue: 2400000 },
  { name: 'Cliente 1586', revenue: 1300000 },
  { name: 'Cliente 202', revenue: 900000 },
  { name: 'Cliente 941', revenue: 700000 },
];
const maxRevenue = Math.max(...topClientsData.map(c => c.revenue));

const RevenueBreakdown: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Receita por Tipo Conta</CardTitle>
          <CardDescription>Divisão da receita.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  innerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number) =>
                    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                  }
                />
                <Legend
                  iconType="circle"
                  formatter={(value, entry) => {
                      const total = pieData.reduce((sum, item) => sum + item.value, 0);
                      const percentage = ((entry.payload?.value || 0) / total) * 100;
                      return <span className="text-card-foreground">{value} ({percentage.toFixed(0)}%)</span>;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Top 5 Clientes por Receita</CardTitle>
          <CardDescription>Clientes que mais geraram receita.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 pt-2">
            {topClientsData.map((client) => (
              <div key={client.name} className="grid grid-cols-[100px_1fr_100px] items-center gap-4">
                <span className="text-sm text-muted-foreground truncate">{client.name}</span>
                <div className="flex-1 bg-muted rounded-full h-4">
                  <div
                    className="bg-primary h-4 rounded-full"
                    style={{ width: `${(client.revenue / maxRevenue) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-right text-card-foreground">
                  {client.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact' })}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RevenueBreakdown;
