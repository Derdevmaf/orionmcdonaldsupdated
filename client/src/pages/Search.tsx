import { X, Search as SearchIcon, MapPin, Radio, RadioGroup } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

const locations = [
  {
    address: "AV. PAULISTA, 1811",
    details: "Bela Vista . São Paulo . SP",
    distance: "2 KM",
    hasMcLocker: true,
    isAvailable: true,
  },
  {
    address: "AV. PAULISTA, 1812",
    details: "Bela Vista . São Paulo . SP",
    distance: "3 KM",
    hasMcLocker: false,
    isAvailable: true,
  },
  {
    address: "AV. PAULISTA, 1813",
    details: "Bela Vista . São Paulo . SP",
    distance: "4 KM",
    hasMcLocker: false,
    isAvailable: true,
  },
  {
    address: "AV. PAULISTA, 1814",
    details: "Bela Vista . São Paulo . SP",
    distance: "4,5 KM",
    hasMcLocker: true,
    isAvailable: true,
  },
  {
    address: "AV. PAULISTA, 1815",
    details: "Bela Vista . São Paulo . SP",
    distance: "5 KM",
    hasMcLocker: false,
    isAvailable: true,
  },
  {
    address: "AV. PAULISTA, 1816",
    details: "Bela Vista . São Paulo . SP",
    distance: "6 KM",
    hasMcLocker: false,
    isAvailable: true,
  },
];

export default function Search() {
  const [showLocations, setShowLocations] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="pt-4 pb-2 px-4 flex justify-between items-center sticky top-0 bg-white z-40">
        <div className="text-sm font-bold">12:20</div>
        <div className="flex gap-1.5 items-center">
          <div className="h-3 w-3 bg-black rounded-full opacity-20"></div>
          <div className="h-3 w-3 bg-black rounded-full opacity-20"></div>
          <div className="h-3 w-6 bg-black rounded-full flex items-center justify-center text-[8px] text-white font-bold">100</div>
        </div>
      </div>
      
      <div className="px-4 mt-2">
        <Link href="/">
          <X size={24} className="text-gray-400 cursor-pointer mb-6" />
        </Link>
        
        <h1 className="text-xl font-bold text-black leading-tight mb-6">
          Busque um restaurante para retirar o seu pedido
        </h1>
        
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-100">
          <div className="flex-1 pb-3 border-b-2 border-[#DA291C] flex flex-col items-center justify-center cursor-pointer">
            <span className="text-sm font-bold text-black">Peça e Retire</span>
            <span className="text-[10px] font-bold text-white bg-[#DA291C] px-1.5 rounded-sm mt-0.5">McLocker</span>
          </div>
          <div className="flex-1 pb-3 border-b-2 border-transparent flex items-center justify-center cursor-pointer">
            <span className="text-sm font-medium text-gray-400">McDelivery</span>
          </div>
        </div>
        
        {/* Search Input */}
        <div className="relative mb-4">
          <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar um restaurante" 
            className="w-full bg-gray-50 border border-gray-200 rounded-lg py-3 pl-12 pr-4 text-sm outline-none focus:border-gray-300 placeholder:text-gray-400"
          />
        </div>
        
        {/* Location Button (Alteração 1) */}
        {!showLocations && (
          <button 
            className="w-full border border-black rounded-lg py-3 flex items-center justify-center gap-2 mb-8 hover:bg-gray-50 transition-colors"
            onClick={() => setShowLocations(true)}
          >
            <MapPin size={18} className="text-black" />
            <span className="text-sm font-bold text-black">Usar minha localização atual</span>
          </button>
        )}
        
        {/* Restaurant List (Alterações 1 e 4) */}
        {showLocations && (
          <div className="flex flex-col gap-6 mb-8">
            {locations.map((location, index) => (
              <div key={index} className="flex justify-between items-start border-b border-gray-50 pb-4">
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-black uppercase mb-1">{location.address}</p>
                    <p className="text-xs text-gray-400 mb-2">{location.details}</p>
                    
                    {location.hasMcLocker && (
                      <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-[#DA291C] flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-[#DA291C]"></div>
                          </div>
                          <span className="text-sm font-medium text-black">Use o McLocker</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                          <span className="text-sm font-medium text-black">Retire no Balcão</span>
                        </div>
                      </div>
                    )}
                    
                    {!location.hasMcLocker && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-[10px] text-gray-500">Aberto agora</span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end">
                  {location.hasMcLocker && (
                    <img src="/images/Frame-575.png" alt="McLocker" className="w-6 h-4 mb-2" />
                  )}
                  <span className="text-sm font-bold text-gray-400">{location.distance}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
