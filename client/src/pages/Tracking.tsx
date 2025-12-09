import { BottomNavigation } from "@/components/BottomNavigation";
import { Slideshow } from "@/components/Slideshow"; // Importar Slideshow
import { ArrowLeft, MapPin, Signal, Wifi, Battery } from "lucide-react";
import { Link } from "wouter";

// Imagens para o slideshow (Alteração 5)
const slideshowImages = [
  "/images/buscando3.png", // Imagem do "Seu pedido está pronto" (usando a mesma imagem para simular)
  "/images/buscando2.png", 
  "/images/buscando1.png",
];

export default function Tracking() {
  // Função para mostrar o pop-up (Alteração 3)
  const handleHelpClick = () => {
    alert("Estamos chamando um atendente!");
  };

  return (
    <div className="min-h-screen bg-white pb-24 font-sans">
      {/* Header */}
      <div className="pt-4 pb-2 px-4 flex justify-between items-center sticky top-0 bg-white z-40">
        <div className="text-sm font-bold">9:41</div>
        <div className="flex gap-1.5 items-center text-black">
          <Signal size={14} strokeWidth={2.5} />
          <Wifi size={14} strokeWidth={2.5} />
          <div className="relative">
            <Battery size={18} strokeWidth={2.5} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-1.5 bg-black rounded-[1px]"></div>
          </div>
        </div>
      </div>
      
      <div className="px-4 mt-2">
        <Link href="/">
          <ArrowLeft size={24} className="text-black cursor-pointer mb-6" />
        </Link>
        
        <h1 className="text-3xl font-bold text-black leading-tight mb-8">
          Seu McDonald's está<br />aguardando você!
        </h1>
        
        {/* Slideshow (Nova Posição - Substituindo o Status Card) */}
        <div className="mb-6">
          <Slideshow images={slideshowImages} interval={3000} />
        </div>

        {/* Status Card (Removido, substituído pelo Slideshow) */}
        
        {/* Locker Info with QR Code */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-6 flex items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-black text-black uppercase tracking-wide mb-4">LOCKER 12</h2>
            <div className="text-2xl font-bold text-black tracking-widest">481496454</div>
          </div>
          <div className="flex-shrink-0">
            <img src="/images/qr-code.png" alt="QR Code" className="w-32 h-32 object-contain" />
          </div>
        </div>
        
        {/* Instructions */}
        <div className="border border-gray-200 rounded-2xl p-6 mb-8">
          <h3 className="font-bold text-black mb-4">Como retirar seu pedido:</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-sm text-gray-600 leading-snug">Localize o Locker 12 no restaurante</li>
            <li className="text-sm text-gray-600 leading-snug">Digite o código PIN 481496454 ou escaneie o QR Code</li>
            <li className="text-sm text-gray-600 leading-snug">Retire seu pedido e confira os itens</li>
            <li className="text-sm text-gray-600 leading-snug">Feche a porta do locker após retirar</li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            {/* Botão de Ajuda com Pop-up (Alteração 3) */}
            <button 
              onClick={handleHelpClick}
              className="text-xs text-gray-400 font-medium underline hover:text-gray-600 transition-colors"
            >
              Precisa de ajuda?
            </button>
          </div>
        </div>
      </div>
      
      <BottomNavigation />
    </div>
  );
}
