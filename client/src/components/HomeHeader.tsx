import { MapPin, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export function HomeHeader() {
  return (
    <div className="bg-white pt-4 pb-2 px-4 sticky top-0 z-40 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm font-bold">12:20</div>
        <div className="flex gap-1.5 items-center">
          <div className="h-3 w-3 bg-black rounded-full opacity-20"></div>
          <div className="h-3 w-3 bg-black rounded-full opacity-20"></div>
          <div className="h-3 w-6 bg-black rounded-full flex items-center justify-center text-[8px] text-white font-bold">100</div>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="mt-1 text-[#DA291C]">
          <MapPin size={24} fill="#DA291C" />
        </div>
        
        <Link href="/search" className="flex-1 cursor-pointer">
          <div className="flex items-center gap-1">
            <span className="font-bold text-base">Retirar em</span>
            <ChevronDown size={16} className="text-black" />
          </div>
          <div className="flex items-center justify-between mt-0.5">
            <div>
              <p className="text-xs font-medium text-gray-500 uppercase">AV. PAULISTA, 1811</p>
              <p className="text-xs text-gray-400">Bela Vista . São Paulo . SP</p>
            </div>
            <div className="bg-gray-100 p-1.5 rounded-full">
              <MapPin size={14} className="text-gray-500" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
