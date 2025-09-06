import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { WhatsAppFloat } from '../components/whatsapp-float';
import { Diamond, Sparkles, Gem, Star, ArrowRight } from 'lucide-react';
import type { Product, MetalRate, Video, HomeSection } from '../../shared/schema';

// Default fallback image URL
const ringsImage = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop';

// Types
export type Currency = 'INR' | 'BHD';

interface HomeSectionItem {
  id: string;
  productId: string;
  position: number;
}

interface HomeSectionWithItems extends HomeSection {
  items: HomeSectionItem[];
}

interface MainHomePageProps {
  allProducts: Product[];
  allMetalRates: MetalRate[];
  allVideos: Video[];
  selectedCurrency: Currency;
  ringsImage?: string;
}

// RoyalSecondaryHomePage Component with Ultra-Modern Design
function RoyalSecondaryHomePage({
  allProducts,
  selectedCurrency,
}: MainHomePageProps) {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // Fetch custom home sections for ultra-modern display
  const { data: homeSections = [] } = useQuery<HomeSectionWithItems[]>({
    queryKey: ['/api/home-sections/public'],
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });

  // Featured products for display
  const featuredProducts = useMemo(() => 
    allProducts.filter(product => product.isFeatured).slice(0, 8), 
    [allProducts]
  );

  // Auto-scroll section handler
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isScrolling) {
        setActiveSection(prev => (prev + 1) % 4);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isScrolling]);


  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ultra-Modern Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        
        {/* Dynamic Geometric Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%)
              `
            }}
          />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              animate={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Futuristic Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <Header />
      
      {/* Hero Section - Ultra-Modern */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 py-20">
          
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            {/* Futuristic Brand Logo */}
            <motion.div
              initial={{ scale: 0, rotateY: 180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30" />
                <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-full p-8 border border-cyan-400/30">
                  <Diamond className="h-20 w-20 text-cyan-400" />
                </div>
              </div>
            </motion.div>

            {/* Ultra-Modern Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black mb-6"
              style={{ 
                fontFamily: 'Inter, system-ui, sans-serif',
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff00aa 50%, #00f5ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundSize: '200% 200%',
                animation: 'gradientShift 3s ease infinite'
              }}
            >
              FUTURE
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl md:text-5xl font-light text-white/80 mb-8 tracking-[0.3em]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              JEWELRY EXPERIENCE
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl text-cyan-300/60 max-w-2xl mx-auto leading-relaxed"
            >
              Discover the intersection of luxury and innovation. Where traditional craftsmanship meets cutting-edge design.
            </motion.p>
          </motion.div>

          {/* Interactive Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { 
                icon: Sparkles, 
                title: "AI-POWERED", 
                subtitle: "Recommendations",
                color: "from-cyan-400 to-blue-500"
              },
              { 
                icon: Gem, 
                title: "QUANTUM", 
                subtitle: "Precision Cut",
                color: "from-purple-400 to-pink-500"
              },
              { 
                icon: Star, 
                title: "HOLOGRAPHIC", 
                subtitle: "Certificates",
                color: "from-green-400 to-cyan-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                onMouseEnter={() => setIsScrolling(true)}
                onMouseLeave={() => setIsScrolling(false)}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-60 transition-all duration-500`} />
                
                {/* Card Content */}
                <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                  <feature.icon className={`h-12 w-12 mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-cyan-300/60">{feature.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-12 py-4 rounded-full font-bold text-lg transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #00f5ff 0%, #ff00aa 100%)',
                boxShadow: '0 10px 30px rgba(0, 245, 255, 0.3)'
              }}
              onClick={() => window.location.href = '/collections'}
            >
              <span className="relative z-10 text-slate-900">EXPLORE FUTURE COLLECTION</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products - Ultra-Modern Grid */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span 
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                FEATURED COLLECTION
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 100, rotateX: -30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Holographic Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-40 blur transition-all duration-500" />
                
                {/* Product Card */}
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-400/50 transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.images?.[0] || ringsImage}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        {selectedCurrency === 'INR' ? '₹' : 'BD'} {selectedCurrency === 'INR' ? product.priceInr?.toLocaleString() : Number(product.priceBhd)?.toFixed(3)}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-slate-900"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <WhatsAppFloat />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

// Export the ultra-modern secondary home page
export default function MainHomePage(props: MainHomePageProps) {
  return <RoyalSecondaryHomePage {...props} />;
}