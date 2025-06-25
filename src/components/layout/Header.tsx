import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header: React.FC = () => {
  return (
    <header className="h-16 flex-shrink-0 flex items-center justify-between px-6 lg:px-8 bg-background border-b sticky top-0 z-10">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-foreground">Dashboard Financeiro</h1>
        <p className="text-xs md:text-sm text-muted-foreground">Visão geral dos seus dados financeiros.</p>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <Select defaultValue="2024">
          <SelectTrigger className="w-[150px] md:w-[180px] bg-card focus:ring-primary">
            <SelectValue placeholder="Ano selecionado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">Ano selecionado: 2024</SelectItem>
            <SelectItem value="2023">Ano selecionado: 2023</SelectItem>
            <SelectItem value="2022">Ano selecionado: 2022</SelectItem>
            <SelectItem value="2021">Ano selecionado: 2021</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-primary ring-2 ring-background" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Canny</p>
                <p className="text-xs leading-none text-muted-foreground">
                  canny@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
