import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, ReceiptText, ArrowDown, TrendingUp } from 'lucide-react';

interface StatCardData {
  title: string;
  value: number;
  icon: React.ElementType;
  iconBgColor: string;
  iconColor: string;
}

const statData: StatCardData[] = [
  {
    title: 'Receita',
    value: 27016057,
    icon: DollarSign,
    iconBgColor: 'bg-green-100 dark:bg-green-900/50',
    iconColor: 'text-green-600 dark:text-green-400'
  },
  {
    title: 'Custos',
    value: 19191064,
    icon: ReceiptText,
    iconBgColor: 'bg-orange-100 dark:bg-orange-900/50',
    iconColor: 'text-orange-600 dark:text-orange-400'
  },
  {
    title: 'Despesas',
    value: 4790702,
    icon: ArrowDown,
    iconBgColor: 'bg-red-100 dark:bg-red-900/50',
    iconColor: 'text-red-600 dark:text-red-400'
  },
  {
    title: 'Lucro',
    value: 3034290,
    icon: TrendingUp,
    iconBgColor: 'bg-blue-100 dark:bg-blue-900/50',
    iconColor: 'text-blue-600 dark:text-blue-400'
  },
];

const StatCard: React.FC<StatCardData> = ({ title, value, icon: Icon, iconBgColor, iconColor }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={`p-2 rounded-md ${iconBgColor}`}>
          <Icon className={`h-5 w-5 ${iconColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </CardContent>
    </Card>
  );
};

const StatCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statData.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
};

export default StatCardGrid;
