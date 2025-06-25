import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Helper component for a single row of information
interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value }) => (
  <div className="flex items-center justify-between text-sm">
    <p className="text-muted-foreground">{label}</p>
    <Badge variant="outline" className="font-normal font-mono text-foreground px-2 py-1">
      {value}
    </Badge>
  </div>
);

// Helper component for a card section
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <Card className="shadow-sm">
    <CardHeader className="border-b py-3 px-4">
      <CardTitle className="text-base font-medium text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="p-4">
      <div className="space-y-3">
        {children}
      </div>
    </CardContent>
  </Card>
);


/**
 * A page to display viewport and container debug information.
 * This component renders several cards, each showing a specific set of data
 * such as position, zoom, container size, and bounds, based on the provided UI design.
 */
const DebugPage: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen w-full py-10 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <InfoCard title="Viewport Debug Info">
          <InfoRow label="Position X:" value="237.46px" />
          <InfoRow label="Position Y:" value="227.24px" />
          <InfoRow label="Zoom:" value="60.0%" />
        </InfoCard>

        <InfoCard title="Container">
          <InfoRow label="Size:" value="916.1484375×562.3984375px" />
          <InfoRow label="Center:" value="(458.07421875, 281.19921875)" />
        </InfoCard>

        <InfoCard title="Content Bounds">
          <InfoRow label="Bounds:" value="(0, 0) → (0, 0)" />
          <InfoRow label="Size:" value="0x0px" />
          <InfoRow label="Center:" value="(0, 0)" />
        </InfoCard>

        <InfoCard title="Viewport Bounds (Canvas Coords)">
           <p className="text-sm text-muted-foreground text-center py-2">
            No data available.
           </p>
        </InfoCard>
      </div>
    </div>
  );
};

export default DebugPage;