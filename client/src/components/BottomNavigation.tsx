import { Ticket, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavigationProps {
  className?: string;
}

export function BottomNavigation({ className }: BottomNavigationProps) {
  return (
    <div className={cn("fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 py-2 px-6 flex justify-between items-center z-50", className)}>
      <div className="flex flex-col items-center gap-1">
        <div className="text-[#DA291C]">
          {/* McDonald's M Icon approximation using SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20V9C5 6.23858 7.23858 4 10 4C11.8638 4 13.5152 5.01946 14.4142 6.58579C15.3132 5.01946 16.9646 4 18.8284 4C21.59 4 23.8284 6.23858 23.8284 9V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-[10px] font-medium text-black">Home</span>
      </div>
      
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <Ticket size={24} strokeWidth={1.5} />
        <span className="text-[10px] font-medium">Cupons</span>
      </div>
      
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span className="text-[10px] font-medium">MeuM</span>
      </div>
      
      <div className="flex flex-col items-center gap-1 text-gray-400">
        <Settings size={24} strokeWidth={1.5} />
        <span className="text-[10px] font-medium">Minha Conta</span>
      </div>
    </div>
  );
}
