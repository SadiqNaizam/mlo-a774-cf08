import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface MonthlyData {
  month: string;
  receita: number;
  custos: number;
  despesas: number;
}

const tableData: MonthlyData[] = [
  { month: 'janeiro', receita: 1800854, custos: 1173276, despesas: 335351 },
  { month: 'fevereiro', receita: 2002730, custos: 1105711, despesas: 310757 },
  { month: 'março', receita: 2191220, custos: 1075283, despesas: 2205221 },
  { month: 'abril', receita: 2518152, custos: 1249911, despesas: 925927 },
  { month: 'maio', receita: 2318152, custos: 2462542, despesas: 335704 },
  { month: 'junho', receita: 1420013, custos: 1272385, despesas: 938788 }, 
  { month: 'julho', receita: 2275709, custos: 1306915, despesas: 447157 },
  { month: 'agosto', receita: 3004652, custos: 1382740, despesas: 557812 },
  { month: 'setembro', receita: 2038542, custos: 1213017, despesas: 253595 },
  { month: 'outubro', receita: 2095595, custos: 1051579, despesas: 320275 },
  { month: 'novembro', receita: 2299883, custos: 1177576, despesas: 254357 },
  { month: 'dezembro', receita: 2531355, custos: 1324203, despesas: 254912 },
];

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const ProfitLossTable: React.FC = () => {
  const totals = tableData.reduce(
    (acc, item) => {
      acc.receita += item.receita;
      acc.custos += item.custos;
      acc.despesas += item.despesas;
      return acc;
    },
    { receita: 0, custos: 0, despesas: 0 }
  );

  const totalMargemBruta = totals.receita - totals.custos;
  const totalLucro = totalMargemBruta - totals.despesas;
  const totalLucroPercent = totals.receita > 0 ? (totalLucro / totals.receita) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demonstrativo de Resultados</CardTitle>
        <CardDescription>Detalhes financeiros mensais e totais para o ano selecionado.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Mês</TableHead>
                  <TableHead className="text-right">Receita</TableHead>
                  <TableHead className="text-right">Custos</TableHead>
                  <TableHead className="text-right">Margem Bruta</TableHead>
                  <TableHead className="text-right">Despesas</TableHead>
                  <TableHead className="text-right">Lucro</TableHead>
                  <TableHead className="text-right">% Lucro</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((item) => {
                  const margemBruta = item.receita - item.custos;
                  const lucro = margemBruta - item.despesas;
                  const lucroPercent = item.receita > 0 ? (lucro / item.receita) * 100 : 0;
                  const isLoss = lucro < 0;

                  return (
                    <TableRow key={item.month}>
                      <TableCell className="font-medium capitalize">{item.month}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.receita)}</TableCell>
                      <TableCell className="text-right">{formatCurrency(item.custos)}</TableCell>
                      <TableCell className={cn("text-right", margemBruta < 0 && 'text-destructive')}>
                        {formatCurrency(margemBruta)}
                      </TableCell>
                      <TableCell className="text-right">{formatCurrency(item.despesas)}</TableCell>
                      <TableCell className={cn("text-right", isLoss && 'text-destructive')}>
                        {formatCurrency(lucro)}
                      </TableCell>
                      <TableCell className={cn("text-right font-semibold", isLoss && 'text-destructive')}>
                        {lucroPercent.toFixed(2)}%
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow className="bg-muted/50 font-bold">
                  <TableCell>Total</TableCell>
                  <TableCell className="text-right">{formatCurrency(totals.receita)}</TableCell>
                  <TableCell className="text-right">{formatCurrency(totals.custos)}</TableCell>
                  <TableCell className={cn("text-right", totalMargemBruta < 0 && 'text-destructive')}>
                    {formatCurrency(totalMargemBruta)}
                  </TableCell>
                  <TableCell className="text-right">{formatCurrency(totals.despesas)}</TableCell>
                   <TableCell className={cn("text-right", totalLucro < 0 && 'text-destructive')}>
                    {formatCurrency(totalLucro)}
                  </TableCell>
                  <TableCell className={cn("text-right", totalLucro < 0 && 'text-destructive')}>
                    {totalLucroPercent.toFixed(2)}%
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfitLossTable;
