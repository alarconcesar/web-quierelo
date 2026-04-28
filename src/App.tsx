import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, ChevronLeft, ChevronDown, MapPin, Truck, Sparkles, ShieldCheck } from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';

const FacebookIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.353-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.393 0 12.03c0 2.123.555 4.196 1.613 6.041L0 24l6.155-1.613a11.782 11.782 0 005.889 1.554h.005c6.638 0 12.039-5.393 12.042-12.031a11.79 11.79 0 00-3.528-8.503z" />
  </svg>
);

const TikTokIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const } 
  }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } }
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold py-5 text-gray-900 group"
      >
        <span className="text-base md:text-lg transition-colors group-hover:text-[#ff4d6d]">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-gray-300 group-hover:text-[#ff4d6d]"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="text-gray-500 text-sm md:text-base pb-6 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProductGallery = ({ product }: { product: any }) => {
  const [activeIndex, setActiveImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);

  useEffect(() => {
    const discoverImages = async () => {
      const pathParts = product.img.split('/');
      const fileName = pathParts.pop();
      const folder = pathParts.join('/') + '/';
      
      const dotIndex = fileName.lastIndexOf('.');
      const nameWithoutExt = fileName.substring(0, dotIndex);
      const extension = fileName.substring(dotIndex);

      const match = nameWithoutExt.match(/^imgi_(\d+)_/);
      
      let candidateImages: string[] = [product.img];

      if (match) {
        const id = match[1];
        const rest = nameWithoutExt.replace(`imgi_${id}_`, '');
        
        // Construimos la lista de posibles variantes de alta resolución
        const variants = [
          `imgi_${id}_1_${rest}${extension}`,
          `imgi_${id}_2_${rest}${extension}`,
          `imgi_${id}_3_${rest}${extension}`,
          `imgi_${id}_4_${rest}${extension}`,
        ];

        // Intentamos cargar cada variante. Si carga, la añadimos.
        const validVariants: string[] = [];
        await Promise.all(variants.map(name => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              validVariants.push(folder + name);
              resolve(true);
            };
            img.onerror = () => resolve(false);
            img.src = folder + name;
          });
        }));

        // REGLA DE ORO: Si hay variantes de alta resolución (_1_, _2_...), 
        // ignoramos la imagen base del catálogo para evitar duplicidad y baja calidad.
        if (validVariants.length > 0) {
          // Ordenamos alfabéticamente para que _1_ sea siempre la primera
          candidateImages = validVariants.sort();
        }
      }

      setImages(candidateImages);
      setActiveImageIndex(0);
      setIsZooming(false);
    };
    
    discoverImages();
  }, [product.img]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y });
  };

  const currentImg = images[activeIndex] || product.img;

  // Solo mostrar carrusel si hay más de una imagen real encontrada
  const hasMultipleImages = images.length > 1;

  return (
    <div className="relative h-full flex flex-col group/gallery bg-gray-50">
      {/* Main Image with Zoom */}
      <div 
        className={`relative flex-grow overflow-hidden ${isZooming ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        onClick={() => setIsZooming(!isZooming)}
        onMouseMove={handleMouseMove}
      >
        <img 
          src={currentImg} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isZooming ? 'scale-150' : 'scale-100'}`}
          style={isZooming ? { transformOrigin: `${zoomPos.x}% ${zoomPos.y}%` } : {}}
        />

        {/* Navigation Arrows (Darker & High Contrast) */}
        {hasMultipleImages && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev - 1 + images.length) % images.length); setIsZooming(false); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all opacity-0 group-hover/gallery:opacity-100 shadow-2xl"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); setActiveImageIndex(prev => (prev + 1) % images.length); setIsZooming(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all opacity-0 group-hover/gallery:opacity-100 shadow-2xl"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Zoom Indicator */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full pointer-events-none opacity-0 group-hover/gallery:opacity-100 transition-opacity">
          {isZooming ? 'Click para Salir' : 'Click para Zoom'}
        </div>
      </div>

      {/* Thumbnails (Only if multiple) */}
      {hasMultipleImages && (
        <div className="flex gap-3 p-5 bg-white border-t border-gray-100 overflow-x-auto no-scrollbar justify-center items-center">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => { setActiveImageIndex(i); setIsZooming(false); }}
              className={`relative w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all duration-300 flex-shrink-0 shadow-sm ${activeIndex === i ? 'border-[#ff4d6d] scale-110 shadow-lg' : 'border-transparent opacity-40 hover:opacity-100 hover:scale-105'}`}
            >
              <img src={img} className="w-full h-full object-cover" alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [activeOccasion, setActiveOccasion] = useState('Todas');
  const [sortBy, setSortBy] = useState('relevancia');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = ['Todos', 'Ramos', 'Tulipanes', 'Box Premium', 'Peluches', 'Dulces'];
  const occasions = ['Todas', 'Amor', 'Aniversario', 'Cumpleaños', 'Amistad', 'Agradecimiento', 'Detalles', 'Reconciliación'];
  
  const products = [
    { id: 1, name: 'Ramo 25 Rosas', category: 'Ramos', price: 40, img: '/products/imgi_5_Q0216.webp', isSoldOut: false, description: 'Aprovecha Ramo de 25 Rosas hasta el domingo 19 de Abril 2026.', occasions: ['Amor', 'Aniversario', 'Detalles'] },
    { id: 2, name: 'Ramo Romántico 20 Rosas', category: 'Ramos', price: 96.70, img: '/products/imgi_7_Q0201.webp', isSoldOut: false, description: '20 Rosas rojas Gipsofila Lazo Tarjeta de dedicatoria.', occasions: ['Amor', 'Aniversario', 'Reconciliación'] },
    { id: 3, name: 'Ramo Clásico 8 Rosas', category: 'Ramos', price: 39.90, img: '/products/imgi_6_Q0202.webp', description: '8 Rosas rojas Gipsophilia Tarjeta de dedicatoria.', occasions: ['Amor', 'Aniversario', 'Detalles'] },
    { id: 4, name: 'Ramo 7 Rosas Fushion', category: 'Ramos', price: 37.90, img: '/products/imgi_8_Q0203.webp', description: '7 rosas fushion, follaje y envoltura premium.', occasions: ['Cumpleaños', 'Amor', 'Agradecimiento'] },
    { id: 5, name: 'Ramo 4 Girasoles Y 30 Rosas', category: 'Ramos', price: 165.10, img: '/products/imgi_9_Q0204.webp', description: '30 rosas blancas y 4 girasoles premium con tarjeta.', occasions: ['Cumpleaños', 'Aniversario', 'Agradecimiento'] },
    { id: 6, name: 'Ramo 20 Rosas Y Clavel', category: 'Ramos', price: 106.40, img: '/products/imgi_10_Q0205.webp', description: '20 Rosas fucsia y rosada, clavel blanco, coronita y banda con mensaje.', occasions: ['Cumpleaños', 'Amor', 'Agradecimiento'] },
    { id: 7, name: 'Ramo Girasol Y 7 Rosas', category: 'Ramos', price: 45.50, img: '/products/imgi_11_Q0206.webp', description: '1 girasol, 7 rosas rosadas, gipson y tarjeta de dedicatoria.', occasions: ['Cumpleaños', 'Amistad', 'Detalles'] },
    { id: 8, name: 'Ramo 13 Rosas', category: 'Ramos', price: 71.60, img: '/products/imgi_12_Q0207.webp', description: '13 rosas rojas, astromelias y envoltura de lujo.', occasions: ['Amor', 'Aniversario', 'Reconciliación'] },
    { id: 9, name: 'Ramo Lirio Y 6 Rosas', category: 'Ramos', price: 76.00, img: '/products/imgi_13_Q0208.webp', isSoldOut: true, description: '1 lirio, 6 rosas rosadas, variedad y limonium.', occasions: ['Cumpleaños', 'Amor', 'Agradecimiento'] },
    { id: 10, name: 'Ramo 11 Rosas Amarillas Y Girasol', category: 'Ramos', price: 71.70, img: '/products/imgi_14_Q0209.webp', description: '11 rosas amarillas, 1 girasol y astromelias.', occasions: ['Cumpleaños', 'Amistad', 'Agradecimiento'] },
    { id: 11, name: 'Ramo 7 Girasoles Y Clavel', category: 'Ramos', price: 65.10, img: '/products/imgi_15_Q0210.webp', description: '7 girasoles, clavel y fino follaje de estación.', occasions: ['Cumpleaños', 'Amistad', 'Detalles'] },
    { id: 12, name: 'Ramo 7 Girasoles', category: 'Ramos', price: 70.40, img: '/products/imgi_16_Q0211.webp', description: '7 girasoles premium con lazo y tarjeta personalizada.', occasions: ['Cumpleaños', 'Amistad', 'Agradecimiento'] },
    { id: 13, name: 'Ramo 30 Rosas Rojas', category: 'Ramos', price: 125.00, img: '/products/imgi_17_Q0212.webp', description: '30 rosas rojas de exportación y gipson.', occasions: ['Amor', 'Aniversario', 'Reconciliación'] },
    { id: 14, name: 'Ramo Clásico 8 Rosas Amarillas', category: 'Ramos', price: 40.10, img: '/products/imgi_18_Q0213.webp', description: '8 Rosas amarillas Gipsophilia Tarjeta de dedicatoria.', occasions: ['Cumpleaños', 'Amistad', 'Agradecimiento'] },
    { id: 15, name: 'Ramo 13 Rosas Amarillas', category: 'Ramos', price: 71.60, img: '/products/imgi_19_Q0214.webp', description: '13 rosas amarillas, astromelias y cinta de raso.', occasions: ['Cumpleaños', 'Amistad', 'Agradecimiento'] },
    { id: 16, name: 'Ramo Girasoles Y Astromelias', category: 'Ramos', price: 35.00, img: '/products/imgi_20_Q0215.webp', description: 'Girasoles vibrantes combinados con astromelias frescas.', occasions: ['Cumpleaños', 'Amistad', 'Detalles'] },
    { id: 17, name: 'Osito Enamorado', category: 'Peluches', price: 209.00, img: '/products/imgi_21_Q0401.webp', description: 'Peluche Musical Alto: 100cm Color: Lila.', occasions: ['Amor', 'Aniversario', 'Cumpleaños'] },
    { id: 18, name: 'Osito Meloso', category: 'Peluches', price: 100.00, img: '/products/imgi_22_Q0501.webp', isSoldOut: true, description: '3 Tulipanes Tejidos, 3 Rosas Eternas, Follaje de ocasión , 1 Osito de Peluche.', occasions: ['Amor', 'Cumpleaños', 'Aniversario'] },
    { id: 19, name: 'Tulipán Eterno Amarillo Y Blanco', category: 'Tulipanes', price: 35.00, img: '/products/imgi_23_Q0505.webp', description: '2 Tulipanes Tejidos de Hilo en Color Amarillo y Blanco.', occasions: ['Amistad', 'Cumpleaños', 'Detalles'] },
    { id: 20, name: 'Tulipán Rosado Eterno', category: 'Tulipanes', price: 35.00, img: '/products/imgi_24_Q0504.webp', description: '2 Tulipanes Tejidos de Hilo en Color Rosado.', occasions: ['Amor', 'Cumpleaños', 'Detalles'] },
    { id: 21, name: 'Tulipán Rojo Eterno', category: 'Tulipanes', price: 35.00, img: '/products/imgi_25_Q0503.webp', description: '2 Tulipanes Tejidos de Hilo en Color Rojo.', occasions: ['Amor', 'Aniversario', 'Detalles'] },
    { id: 22, name: 'Tulipán Amarillo Eterno', category: 'Tulipanes', price: 35.00, img: '/products/imgi_26_Q0502.webp', description: '2 Tulipanes Tejidos de Hilo en Color Amarillo.', occasions: ['Amistad', 'Cumpleaños', 'Detalles'] },
    { id: 23, name: 'Bombones Choc Monfer Corazon Dorado X5un', category: 'Dulces', price: 17.00, img: '/products/imgi_27_Q0104.webp', description: 'Bombones de chocolate fino en estuche de corazón.', occasions: ['Amor', 'Aniversario', 'Cumpleaños'] },
    { id: 24, name: 'Bombones Choc Monfer Corazon Dorado X8un', category: 'Dulces', price: 23.00, img: '/products/imgi_28_Q0103.webp', description: 'Bombones artesanales en caja premium.', occasions: ['Amor', 'Aniversario', 'Cumpleaños'] },
    { id: 25, name: 'Ferrero Rocher Chocolate (100g)', category: 'Dulces', price: 45.00, img: '/products/imgi_29_Q0102.webp', description: 'Caja de 100g de los clásicos bombones Ferrero Rocher.', occasions: ['Cumpleaños', 'Amor', 'Agradecimiento'] },
    { id: 26, name: 'Bombones Ferrero Rocher 4Un', category: 'Dulces', price: 23.00, img: '/products/imgi_30_Q0101.webp', description: 'Pack de 4 unidades de bombones Ferrero.', occasions: ['Detalles', 'Cumpleaños', 'Agradecimiento'] },
  ];

  const getSortedProducts = () => {
    let filtered = [...products];

    if (activeCategory !== 'Todos') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activeOccasion !== 'Todas') {
      filtered = filtered.filter(p => p.occasions.includes(activeOccasion));
    }

    if (sortBy === 'precio-menor') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'precio-mayor') {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Mover productos agotados al final manteniendo el orden previo
    return filtered.sort((a, b) => {
      if (a.isSoldOut && !b.isSoldOut) return 1;
      if (!a.isSoldOut && b.isSoldOut) return -1;
      return 0;
    });
  };
  const filteredProducts = getSortedProducts();

  return (
    <div className="min-h-screen bg-[#fdfcfb] text-gray-900 selection:bg-[#ff4d6d]/10 selection:text-[#ff4d6d] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="h-8 md:h-12"
          >
            <img src="/logo.svg" alt="Quiérelo Flores" className="h-full object-contain" />
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { name: 'Catálogo', href: '#catalogo' },
              { name: 'Personalizados', href: '#personalizados' },
              { name: 'Testimonios', href: '#testimonios' }
            ].map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-[#ff4d6d] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex gap-3 md:gap-6 items-center">
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/51947171972" 
              className="flex items-center gap-2 bg-[#25D366] text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-[#22c35e] transition-colors"
            >
              <WhatsAppIcon size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">+51 947 171 972</span>
              <span className="sm:hidden">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-6 lg:space-y-8 text-center md:text-left">
            <motion.div variants={fadeInUp} className="space-y-3 lg:space-y-4">
              <span className="text-[#ff4d6d] font-bold tracking-[0.4em] uppercase text-xs md:text-sm block leading-relaxed">
                Florería en <br className="md:hidden" /> Los Olivos, Lima
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif font-bold leading-[1.1] text-gray-900 tracking-tight">
                Detalles que <br />
                <span className="italic text-gray-400 font-normal">Enamoran</span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-base md:text-lg text-gray-500 max-w-md mx-auto md:mx-0 leading-relaxed font-medium">
              Encuentra el arreglo perfecto y sorprende hoy mismo. Contamos con entrega express en todo Lima Norte.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-6 lg:space-y-8 pt-2 lg:pt-4">
              {/* Social Proof Above Button */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Client" className="w-full h-full object-cover grayscale" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-gray-900 font-bold text-sm leading-tight">+1,000 Clientes</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Felices este año</p>
                </div>
              </div>

              <div className="flex justify-center md:justify-start">
                <motion.a 
                  href="#catalogo"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 lg:px-10 py-4 lg:py-5 bg-black text-white rounded-full font-bold flex items-center justify-center gap-3 shadow-2xl shadow-black/20 hover:bg-gray-900 transition-all text-sm md:text-base"
                >
                  Sorprender Ahora <ChevronRight size={20} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative px-4 md:px-0"
          >
            <div className="aspect-[5/6] lg:aspect-[1/1] max-h-[500px] lg:max-h-[600px] rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/20 mx-auto">
              <img src="/products/imgi_2_banner1.webp" alt="Flores Premium" className="w-full h-full object-cover" />
            </div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                ease: "easeInOut" 
              }}
              className="absolute -bottom-4 md:-bottom-6 lg:right-0 -right-2 md:-right-6 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl glass-card border border-gray-100 scale-90 md:scale-100"
            >
              <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#ff4d6d] mb-1">Calidad Premium</p>
              <p className="text-base md:text-xl font-serif font-bold text-gray-900 leading-tight text-nowrap">Flores Frescas <br/> Cada Día</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-[#ff4d6d] to-transparent"
          />
        </motion.div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-gray-50/50 border-y border-gray-100 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Truck, title: "Envío Express", desc: "Entrega hoy mismo en Lima Norte" },
              { icon: Sparkles, title: "Máxima Frescura", desc: "Flores seleccionadas cada mañana" },
              { icon: ShieldCheck, title: "Compra Segura", desc: "Pago contra entrega o transferencia" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 lg:gap-5 justify-center md:justify-start group"
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-white flex items-center justify-center text-[#ff4d6d] shadow-sm group-hover:shadow-md transition-shadow">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base mb-0.5">{item.title}</h4>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        id="catalogo" 
        className="py-16 md:py-20 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-8 mb-8 lg:mb-12">
            <div className="w-full">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 lg:mb-6 text-gray-900 tracking-tight">Nuestra Colección</h2>
              
              <div className="space-y-4 lg:space-y-5">
                {/* Categories Scrollable Container */}
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 lg:mb-2.5 ml-1">Colección</p>
                  <div className="flex overflow-x-auto pb-2 -mx-6 px-6 md:px-0 md:mx-0 no-scrollbar gap-2">
                    {categories.map((cat) => (
                      <motion.button
                        key={cat}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`whitespace-nowrap px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex-shrink-0 shadow-sm ${
                          activeCategory === cat 
                            ? 'bg-[#ff4d6d] text-white shadow-[#ff4d6d]/20' 
                            : 'bg-gray-50 text-gray-500 hover:bg-gray-100 border border-gray-100'
                        }`}
                      >
                        {cat}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Occasions Scrollable Container */}
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-2 lg:mb-2.5 ml-1">Ocasión</p>
                  <div className="flex overflow-x-auto pb-2 -mx-6 px-6 md:px-0 md:mx-0 no-scrollbar gap-2">
                    {occasions.map((occ) => (
                      <motion.button
                        key={occ}
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveOccasion(occ)}
                        className={`whitespace-nowrap px-5 lg:px-6 py-2 lg:py-2.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 flex-shrink-0 shadow-sm ${
                          activeOccasion === occ 
                            ? 'bg-[#ff4d6d] text-white border-transparent shadow-[#ff4d6d]/20' 
                            : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100'
                        }`}
                      >
                        {occ}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative w-full md:w-auto flex items-center self-end border-b border-gray-200 pb-2">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 mr-3">Ordenar:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent border-none pl-0 pr-8 py-1 text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-900 cursor-pointer focus:ring-0 outline-none"
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-menor">Menor Precio</option>
                <option value="precio-mayor">Mayor Precio</option>
              </select>
              <ChevronDown size={14} className="absolute right-0 pointer-events-none text-gray-400" />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  key={product.id} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-white rounded-2xl md:rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-700 flex flex-col h-full overflow-hidden cursor-pointer"
                >
                  <div className={`aspect-square md:aspect-[4/5] relative overflow-hidden bg-gray-50`}>
                    <motion.img 
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Hover Overlay Badge - Reubicado abajo */}
                    <div className="absolute inset-0 flex items-end justify-center p-6 md:p-8 pointer-events-none z-10">
                      <div className="bg-white/95 backdrop-blur-xl px-5 py-2.5 rounded-xl shadow-2xl border border-white/20 flex items-center gap-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                        <Sparkles size={14} className="text-[#ff4d6d]" />
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-gray-900">Ver Detalle</span>
                      </div>
                    </div>
                    
                    {product.isSoldOut && (
                      <div className="absolute top-4 md:top-8 left-4 md:left-8">
                        <span className="bg-black/90 backdrop-blur-md text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-2xl">Agotado</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-8 flex flex-col flex-grow">
                    <div className="mb-4 md:mb-6">
                      <h3 className="text-[16px] md:text-xl font-bold text-gray-900 leading-tight group-hover:text-[#ff4d6d] transition-colors mb-2">{product.name}</h3>
                      <p className="text-gray-500 text-[11px] md:text-sm leading-relaxed line-clamp-2 opacity-80">{product.description}</p>
                    </div>
                    
                    <div className="mt-auto space-y-4">
                      <div className="flex justify-between items-center border-t border-gray-100 pt-4 md:pt-6">
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">{product.category}</span>
                        <span className="text-lg md:text-2xl font-bold text-[#ff4d6d]">S/ {product.price.toFixed(2)}</span>
                      </div>

                      {product.isSoldOut ? (
                        <div className="w-full flex items-center justify-center gap-2 bg-gray-50 text-gray-400 py-3.5 md:py-4 rounded-2xl text-[11px] md:text-xs font-bold cursor-not-allowed border border-gray-100">
                          Próximamente
                        </div>
                      ) : (
                        <motion.a 
                          href={`https://wa.me/51947171972?text=${encodeURIComponent(`Hola Quiérelo Flores, deseo pedir el producto: ${product.name}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 bg-black text-white py-3.5 md:py-4 rounded-2xl text-[11px] md:text-xs font-bold hover:bg-gray-900 transition-all"
                        >
                          <WhatsAppIcon size={16} />
                          Pedir
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Gift Section (Exclusividad Total) */}
      <section id="personalizados" className="py-20 md:py-24 lg:py-28 px-4 md:px-6 overflow-hidden bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#0a0a0a] rounded-[4rem] md:rounded-[6rem] p-8 md:p-20 lg:p-24 text-white relative overflow-hidden group shadow-[0_100px_200px_-50px_rgba(0,0,0,0.7)] border border-white/5"
          >
            {/* Ambient Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,77,109,0.18),transparent_60%)]" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff4d6d]/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute inset-0 bg-luxury-pattern opacity-[0.04] pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 lg:space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-center lg:justify-start gap-4"
                  >
                    <div className="h-px w-10 bg-[#ff4d6d]/60" />
                    <span className="text-[#ff4d6d] font-bold tracking-[0.6em] uppercase text-[9px] md:text-xs">
                      Exclusividad Total
                    </span>
                  </motion.div>
                  
                  <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1] tracking-tight !text-white">
                    ¿Buscas algo <br/> 
                    <span className="relative inline-block mt-4">
                      <span className="italic !text-gray-400 font-normal md:text-6xl">Realmente Único</span>
                      <svg className="absolute -bottom-6 left-0 w-full h-4 text-[#ff4d6d]/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                      </svg>
                    </span>
                  </h2>
                  
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                    Tu visión, nuestra artesanía. Creamos piezas botánicas irrepetibles que capturan emociones en cada pétalo.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 pt-6">
                  <motion.a 
                    href="https://wa.me/51947171972" 
                    whileHover={{ scale: 1.05, backgroundColor: "#ff4d6d", borderColor: "#ff4d6d", color: "#fff" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 px-12 md:px-16 py-6 md:py-8 border-2 border-white/20 rounded-full font-bold text-base md:text-xl transition-all duration-500 group backdrop-blur-sm"
                  >
                    <WhatsAppIcon size={28} />
                    <span>Diseñar mi Pedido</span>
                  </motion.a>
                </div>
              </div>

              <div className="relative">
                <motion.div 
                  initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] max-h-[500px] rounded-[3rem] md:rounded-[4rem] overflow-hidden border-[16px] border-white/5 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] group/img mx-auto"
                >
                  <img 
                    src="/products/imgi_4_banner3.webp" 
                    alt="Personalización" 
                    className="w-full h-full object-cover scale-110 group-hover/img:scale-100 transition-transform duration-[3s] ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-70" />
                  
                  {/* Glass Card Overlay */}
                  <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[85%] bg-white/10 backdrop-blur-2xl border border-white/20 p-6 md:p-10 rounded-[2.5rem] shadow-2xl"
                  >
                    <div className="flex items-center gap-6 md:gap-8">
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.2rem] md:rounded-[1.5rem] bg-[#ff4d6d] flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(255,77,109,0.5)]">
                        <Heart size={32} fill="white" className="text-white md:w-10 md:h-10" />
                      </div>
                      <div>
                        <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-[#ff4d6d] mb-1 md:mb-2">Artesanía de Lujo</p>
                        <p className="text-lg md:text-3xl font-serif font-bold text-white italic">100% Personalizado</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <TestimonialsSection />


      {/* FAQ Section */}
      <motion.section 
        id="faq"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 md:py-24 lg:py-28 bg-[#fcfaf8]"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16 lg:mb-20 space-y-4 lg:space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight text-center">Dudas Comunes</h2>
            <div className="w-16 md:w-20 h-1 bg-[#ff4d6d] mx-auto rounded-full" />
            <p className="text-gray-500 text-base md:text-xl font-medium text-center max-w-2xl mx-auto leading-relaxed">Resolvemos tus inquietudes para que tu experiencia sea tan perfecta como nuestras flores.</p>
          </div>
          
          <div className="space-y-1 md:space-y-2 bg-white p-6 md:p-12 lg:p-14 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.05)] border border-gray-100/50">
            <FAQItem question="¿Realizan entregas el mismo día?" answer="¡Claro que sí! Para pedidos realizados antes de las 2:00 PM, garantizamos entrega express en toda Lima Norte (Los Olivos, SMP, Comas, Independencia)." />
            <FAQItem question="¿Cuáles son los métodos de pago?" answer="Ofrecemos flexibilidad total: aceptamos tarjetas de crédito/débito, transferencias bancarias, Yape y Plin." />
            <FAQItem question="¿Puedo personalizar mi arreglo?" answer="Es nuestra especialidad. Si tienes una visión específica o quieres combinar elementos, nuestro equipo de diseño floral lo hará realidad vía WhatsApp." />
            <FAQItem question="¿Llegan a todo Lima?" answer="Nos enfocamos en Lima Norte para asegurar la máxima frescura y rapidez, pero llegamos a otros distritos previa coordinación especial." />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contacto" className="bg-gray-900 text-white pt-16 md:pt-20 pb-8 md:pb-10 border-t-4 border-[#ff4d6d]">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 mb-12 md:mb-16 border-b border-gray-800 pb-10 md:pb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.svg" className="w-32 md:w-40 brightness-0 invert" alt="Logo Quierelo Flores y Detalles" />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Somos tu mejor opción en Lima Norte. Transformamos flores en sonrisas y momentos inolvidables.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: FacebookIcon, href: "https://www.facebook.com/Quierelo.pe/" },
                  { icon: InstagramIcon, href: "https://www.instagram.com/quierelo.pe/" },
                  { icon: TikTokIcon, href: "https://www.tiktok.com/@quierelo.pe" }
                ].map((social, i) => (
                  <a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#ff4d6d] transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Contáctanos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#ff4d6d] mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-white font-bold text-sm">Tienda Física</span>
                    <a 
                      href="https://maps.app.goo.gl/KuvkVcwp5bDmsGZs8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-[#ff4d6d] transition-colors text-sm block mt-1 leading-relaxed"
                    >
                      Av. Marañon 583, Los Olivos, Lima, Perú.<br/>
                      <span className="text-[11px] opacity-70 italic">Ref: Frente al Mercado Gladys Carrillo.</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <WhatsAppIcon className="text-[#ff4d6d] mt-1 shrink-0" size={20} />
                  <div>
                    <span className="block text-white font-bold text-sm">Pedidos y Delivery</span>
                    <a 
                      href="https://wa.me/51947171972" 
                      className="text-gray-300 hover:text-[#ff4d6d] transition-colors text-sm block mt-1"
                    >
                      +51 947 171 972
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-xs md:text-sm">
            <p>© 2026 Quiérelo Flores y Detalles. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1 uppercase tracking-widest font-bold opacity-80">
              Diseñado con <Heart size={12} fill="#ff4d6d" className="text-[#ff4d6d]" /> para enamorar
            </p>
          </div>
        </div>
      </footer>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 py-6 md:p-12 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:grid md:grid-cols-2 max-h-full"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors md:text-gray-900 md:bg-gray-100 md:border-gray-200"
              >
                <ChevronDown size={24} />
              </button>

              <div className="relative aspect-square md:aspect-auto overflow-hidden bg-gray-50 h-[45vh] md:h-full">
                <ProductGallery product={selectedProduct} />
                
                {/* Floating Badges */}
                <div className="absolute top-8 left-8 flex flex-col gap-3 pointer-events-none z-20">
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-xl border border-white/40 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl"
                  >
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4d6d] mb-1">Colección</p>
                    <p className="text-sm md:text-lg font-serif font-bold text-gray-900 leading-tight">{selectedProduct.category}</p>
                  </motion.div>

                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white/80 backdrop-blur-xl border border-white/40 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] shadow-xl"
                  >
                    <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff4d6d] mb-1">Ideal para</p>
                    <p className="text-sm md:text-lg font-serif font-bold text-gray-900 leading-tight">
                      {selectedProduct.occasions.slice(0, 2).join(", ")}
                    </p>
                  </motion.div>
                </div>
              </div>

              <div className="p-8 md:p-20 flex flex-col justify-center overflow-y-auto">
                <div className="space-y-6 md:space-y-10">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-[1.1]">{selectedProduct.name}</h2>
                    <p className="text-2xl md:text-4xl font-bold text-[#ff4d6d]">S/ {selectedProduct.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-400">Descripción</p>
                    <p className="text-gray-600 text-base md:text-xl leading-relaxed font-medium">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div className="pt-6 md:pt-10">
                    {selectedProduct.isSoldOut ? (
                      <div className="w-full flex items-center justify-center gap-4 bg-gray-100 text-gray-400 py-5 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] text-base md:text-xl font-bold cursor-not-allowed border border-gray-200">
                        Próximamente
                      </div>
                    ) : (
                      <motion.a 
                        href={`https://wa.me/51947171972?text=${encodeURIComponent(`Hola Quiérelo Flores, deseo pedir el producto: ${selectedProduct.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full flex items-center justify-center gap-4 bg-[#25D366] text-white py-5 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] text-base md:text-xl font-bold transition-all hover:bg-[#22c35e]"
                      >
                        <WhatsAppIcon size={24} />
                        Pedir por WhatsApp
                      </motion.a>
                    )}
                    <p className="text-center text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-6">
                      {selectedProduct.isSoldOut ? 'Te avisaremos cuando vuelva' : 'Entrega Hoy en Lima Norte'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
