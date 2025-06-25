import React from 'react';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  X,
  Linkedin,
  Globe,
} from 'lucide-react';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: '#', label: 'Dashboard', icon: LayoutDashboard },
  { href: '#', label: 'Análise', icon: BarChart3 },
  { href: '#', label: 'Clientes', icon: Users },
  { href: '#', label: 'Configurações', icon: Settings },
];

const SidebarNav: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('Dashboard');

  return (
    <aside className="w-72 bg-sidebar text-sidebar-foreground flex flex-col p-6 h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="bg-white/20 p-2 rounded-lg">
          <X className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-xs font-light tracking-widest">POWER BY</p>
          <p className="font-bold text-lg leading-tight">EXPERIENCE</p>
        </div>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={cn(
                  'flex items-center gap-3 py-3 px-4 rounded-lg transition-colors duration-200 text-sm',
                  activeItem === item.label
                    ? 'bg-white/20 font-semibold'
                    : 'hover:bg-white/10 font-medium'
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto">
        <div className="flex items-center justify-center gap-4">
          <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-foreground transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default SidebarNav;
