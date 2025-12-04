import { HomeHeader } from "@/components/HomeHeader";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Slideshow } from "@/components/Slideshow";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  // Images for the main banner slideshow (before "Pré - Venda Stranger Things")
  const mainBannerImages = [
    "/images/banner-novidade.png",
    "/images/banner-mequizap.png",
    "/images/banner-lockers.png",
  ];

  // Images for the secondary banner slideshow (before "Para Você")
  const secondaryBannerImages = [
    "/images/banner-tastytubro.png",
    "/images/banner-baconrach.png",
    "/images/banner-ovomaltinerocks.png",
  ];

  return (
    <div className="min-h-screen bg-white pb-24 font-sans">
      <HomeHeader />
      
      <div className="px-4 mt-4">
        {/* McLocker Banner */}
        <div className="bg-[#F3E5F5] rounded-2xl p-4 flex items-center justify-between mb-6 relative overflow-hidden">
          <div className="flex-1 z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#7B3FF2] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Novo</span>
              <h3 className="font-bold text-sm text-black leading-tight">Faça seu pedido e use o novo McLocker</h3>
            </div>
            <p className="text-xs text-gray-600 font-medium">20%OFF na primeira compra</p>
          </div>
          <ChevronRight size={16} className="text-gray-400" />
        </div>
        
        {/* Categories */}
        <div className="flex justify-between gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative border border-gray-100 shadow-sm">
              <img src="/images/cat-lancamentos.png" alt="Lançamentos" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] text-center font-medium text-gray-600 leading-tight">Lançamentos</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative border border-gray-100 shadow-sm">
              <img src="/images/cat-promocoes.png" alt="Promoções" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] text-center font-medium text-gray-600 leading-tight">Promoções<br/>Mcdelivery</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative border border-gray-100 shadow-sm">
              <img src="/images/cat-mcofertas.png" alt="McOfertas" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] text-center font-medium text-gray-600 leading-tight">McOfertas</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 min-w-[70px]">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden relative border border-gray-100 shadow-sm">
              <img src="/images/cat-mequibox.png" alt="Méqui Box" className="w-full h-full object-cover" />
            </div>
            <span className="text-[10px] text-center font-medium text-gray-600 leading-tight">Méqui Box</span>
          </div>
        </div>
        
        {/* Main Banner Slideshow (MéquiZap) - Before "Pré - Venda Stranger Things" */}
        <div className="mb-6">
          <a 
            href="https://wa.me/54991997708?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20com%20retirada%20pelo%20M%C3%A9quilocker"
            target="_blank"        
            rel="noopener noreferrer" 
            style={{ display: 'block' }} 
          >
            <Slideshow 
              images={mainBannerImages}
              interval={3000}
              aspectRatio="4/3"
            />
          </a>  
        </div>
        
        {/* Stranger Things Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-black mb-4">Pré - Venda Stranger Things</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            {/* Product Card 1 */}
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="w-full aspect-square bg-gray-50 rounded-xl p-2 flex items-center justify-center relative">
                <img src="/images/prod-burger.png" alt="Burger" className="w-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2">McOferta Stranger Chicken Sandwich</p>
                <p className="text-xs font-bold text-black mt-1">R$ 20,00</p>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="w-full aspect-square bg-gray-50 rounded-xl p-2 flex items-center justify-center relative">
                <img src="/images/prod-combo.png" alt="Combo" className="w-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2">Combo Stranger Things</p>
                <p className="text-xs font-bold text-black mt-1">R$ 37,50</p>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="w-full aspect-square bg-gray-50 rounded-xl p-2 flex items-center justify-center relative">
                <img src="/images/prod-box.png" alt="Box" className="w-full object-contain" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-800 line-clamp-2">McLanche Feliz</p>
                <p className="text-xs font-bold text-black mt-1">R$ 28,90</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Aproveite de novo Section */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-black">Aproveite de novo</h2>
            <ChevronRight size={20} className="text-black" />
          </div>
          
          {/* Promo Cards */}
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 mb-6">
            {/* Promo Card 1 */}
            <div className="min-w-[160px] bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/images/promo-card-1.png" alt="McDelivery" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-black">McDelivery</p>
                  <p className="text-[10px] text-gray-500">15/10/2025 21:00</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-600 line-clamp-2">Rua Doutor Emílio Winther, 500</p>
                <p className="text-[9px] text-gray-400 line-clamp-1 mt-1">McChicken Média Turbo bacon + Red Bull Ene...</p>
              </div>
            </div>
            
            {/* Promo Card 2 */}
            <div className="min-w-[160px] bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/images/promo-card-1.png" alt="McDelivery" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-black">McDelivery</p>
                  <p className="text-[10px] text-gray-500">15/10/2025 21:30</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-600 line-clamp-2">Avenida Paulista, 1811</p>
                <p className="text-[9px] text-gray-400 line-clamp-1 mt-1">Big Mac Combo + Sobremesa Grátis...</p>
              </div>
            </div>
            
            {/* Promo Card 3 */}
            <div className="min-w-[160px] bg-white rounded-lg p-3 shadow-sm border border-gray-100 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <img src="/images/promo-card-1.png" alt="McDelivery" className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-black">McDelivery</p>
                  <p className="text-[10px] text-gray-500">16/10/2025 10:00</p>
                </div>
              </div>
              <div>
                <p className="text-[10px] text-gray-600 line-clamp-2">Rua Oscar Freire, 500</p>
                <p className="text-[9px] text-gray-400 line-clamp-1 mt-1">Méqui Box Infantil com Brinquedo...</p>
              </div>
            </div>
          </div>
          
          {/* Secondary Banner Slideshow (Tasty Turbo Bacon) - Before "Para você" */}
          <div className="mb-6">
            <Slideshow 
              images={secondaryBannerImages}
              interval={3000}
              aspectRatio="2/1"
            />
          </div>
          
          {/* Para você Section */}
          <h2 className="text-lg font-bold text-black mb-4">Para você</h2>
          
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
            {/* Frasco Molho Tasty Product Card 1 */}
            <div className="min-w-[160px] bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <img src="/images/molho-tasty.png" alt="Frasco Molho Tasty" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <p className="text-sm font-bold text-black mb-1">Frasco Molho Tasty</p>
                <p className="text-xs text-gray-600 mb-2">190g</p>
                <p className="text-lg font-bold text-black">R$ 20,00</p>
              </div>
            </div>
            
            {/* Frasco Molho Tasty Product Card 2 */}
            <div className="min-w-[160px] bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col">
              <div className="w-full aspect-square bg-gray-50 rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                <img src="/images/molho-tasty.png" alt="Frasco Molho Tasty" className="w-full h-full object-contain p-2" />
              </div>
              <div>
                <p className="text-sm font-bold text-black mb-1">Frasco Molho Tasty</p>
                <p className="text-xs text-gray-600 mb-2">190g</p>
                <p className="text-lg font-bold text-black">R$ 20,00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Button Area */}
      <div className="fixed bottom-[60px] left-0 right-0 px-4 z-40">
        <Link href="/tracking">
          <div className="bg-[#1A1A1A] text-white rounded-full py-3 px-6 flex items-center justify-between shadow-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#E35205] rounded-lg flex items-center justify-center">
                <img src="/images/icon-burger-small.png" alt="" className="w-5 h-5 object-contain" />
              </div>
              <span className="font-bold text-sm">Acompanhar seu pedido</span>
            </div>
            <ChevronRight size={20} className="text-white" />
          </div>
        </Link>
      </div>
      
      <BottomNavigation />
    </div>
  );
}
