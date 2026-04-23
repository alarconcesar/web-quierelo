import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, ChevronDown, ArrowUpDown } from 'lucide-react';

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
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold py-6 text-gray-900 group"
      >
        <span className="text-lg md:text-xl transition-colors group-hover:text-[#ff4d6d]">{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-gray-400 group-hover:text-[#ff4d6d]"
        >
          <ChevronDown size={24} />
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
            <div className="text-gray-600 text-lg pb-8 leading-relaxed max-w-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('relevancia');

  const categories = ['Todos', 'Ramos', 'Tulipanes', 'Box Premium', 'Peluches', 'Dulces'];
  
  const products = [
    { id: 1, name: 'Ramo 25 Rosas', category: 'Ramos', price: 40, img: '/products/imgi_5_Q0216.webp', isSoldOut: true, description: 'Elegante ramo de 25 rosas seleccionadas con follaje de estación.' },
    { id: 2, name: 'Ramo Romántico 20 Rosas', category: 'Ramos', price: 96, img: '/products/imgi_7_Q0201.webp', isSoldOut: true, description: '20 Rosas rojas Gipsofila Lazo Tarjeta de dedicatoria.' },
    { id: 3, name: 'Ramo Clásico 8 Rosas', category: 'Ramos', price: 39, img: '/products/imgi_6_Q0202.webp', description: '8 Rosas rojas Gipsophilia Tarjeta de dedicatoria.' },
    { id: 4, name: 'Ramo 7 Rosas Fushion', category: 'Ramos', price: 37, img: '/products/imgi_8_Q0203.webp', description: '7 rosas fushion, follaje y envoltura premium.' },
    { id: 5, name: 'Ramo 4 Girasoles Y 30 Rosas', category: 'Ramos', price: 165, img: '/products/imgi_9_Q0204.webp', description: '30 rosas blancas y 4 girasoles premium con tarjeta.' },
    { id: 6, name: 'Ramo 20 Rosas Y Clavel', category: 'Ramos', price: 106, img: '/products/imgi_10_Q0205.webp', description: '20 Rosas fucsia y rosada, clavel blanco, coronita y banda con mensaje.' },
    { id: 7, name: 'Ramo Girasol Y 7 Rosas', category: 'Ramos', price: 45, img: '/products/imgi_11_Q0206.webp', description: '1 girasol, 7 rosas rosadas, gipson y tarjeta de dedicatoria.' },
    { id: 8, name: 'Ramo 13 Rosas', category: 'Ramos', price: 71, img: '/products/imgi_12_Q0207.webp', description: '13 rosas rojas, astromelias y envoltura de lujo.' },
    { id: 9, name: 'Ramo Lirio Y 6 Rosas', category: 'Ramos', price: 76, img: '/products/imgi_13_Q0208.webp', isSoldOut: true, description: '1 lirio, 6 rosas rosadas, variedad y limonium.' },
    { id: 10, name: 'Ramo 11 Rosas Amarillas Y Girasol', category: 'Ramos', price: 71, img: '/products/imgi_14_Q0209.webp', description: '11 rosas amarillas, 1 girasol y astromelias.' },
    { id: 11, name: 'Ramo 7 Girasoles Y Clavel', category: 'Ramos', price: 65, img: '/products/imgi_15_Q0210.webp', description: '7 girasoles, clavel y fino follaje de estación.' },
    { id: 12, name: 'Ramo 7 Girasoles', category: 'Ramos', price: 70, img: '/products/imgi_16_Q0211.webp', description: '7 girasoles premium con lazo y tarjeta personalizada.' },
    { id: 13, name: 'Ramo 30 Rosas Rojas', category: 'Ramos', price: 125, img: '/products/imgi_17_Q0212.webp', description: '30 rosas rojas de exportación y gipson.' },
    { id: 14, name: 'Ramo Clásico 8 Rosas Amarillas', category: 'Ramos', price: 40, img: '/products/imgi_18_Q0213.webp', description: '8 Rosas amarillas Gipsophilia Tarjeta de dedicatoria.' },
    { id: 15, name: 'Ramo 13 Rosas Amarillas', category: 'Ramos', price: 71, img: '/products/imgi_19_Q0214.webp', description: '13 rosas amarillas, astromelias y cinta de raso.' },
    { id: 16, name: 'Ramo Girasoles Y Astromelias', category: 'Ramos', price: 35, img: '/products/imgi_20_Q0215.webp', description: 'Girasoles vibrantes combinados con astromelias frescas.' },
    { id: 17, name: 'Osito Meloso', category: 'Peluches', price: 100, img: '/products/imgi_22_Q0501.webp', isSoldOut: true, description: '3 Tulipanes Tejidos, 3 Rosas Eternas, Follaje de ocasión , 1 Osito de Peluche.' },
    { id: 18, name: 'Tulipán Eterno Amarillo Y Blanco', category: 'Tulipanes', price: 35, img: '/products/imgi_23_Q0505.webp', description: '2 Tulipanes Tejidos de Hilo en Color Amarillo y Blanco.' },
    { id: 19, name: 'Tulipán Rosado Eterno', category: 'Tulipanes', price: 35, img: '/products/imgi_24_Q0504.webp', description: '2 Tulipanes Tejidos de Hilo en Color Rosado.' },
    { id: 20, name: 'Tulipán Rojo Eterno', category: 'Tulipanes', price: 35, img: '/products/imgi_25_Q0503.webp', description: '2 Tulipanes Tejidos de Hilo en Color Rojo.' },
    { id: 21, name: 'Tulipán Amarillo Eterno', category: 'Tulipanes', price: 35, img: '/products/imgi_26_Q0502.webp', description: '2 Tulipanes Tejidos de Hilo en Color Amarillo.' },
    { id: 22, name: 'Bombones Choc Monfer Corazon Dorado X5un', category: 'Dulces', price: 17, img: '/products/imgi_25_Q0503.webp', description: 'Bombones de chocolate fino en estuche de corazón.' },
    { id: 23, name: 'Bombones Choc Monfer Corazon Dorado X8un', category: 'Dulces', price: 23, img: '/products/imgi_24_Q0504.webp', description: 'Bombones artesanales en caja premium.' },
    { id: 24, name: 'Ferrero Rocher Chocolate (100g)', category: 'Dulces', price: 45, img: '/products/imgi_23_Q0505.webp', description: 'Caja de 100g de los clásicos bombones Ferrero Rocher.' },
    { id: 25, name: 'Bombones Ferrero Rocher 4Un', category: 'Dulces', price: 23, img: '/products/imgi_22_Q0501.webp', description: 'Pack de 4 unidades de bombones Ferrero.' },
    { id: 26, name: 'Arreglo Imperial Girasoles', category: 'Arreglos', price: 250, img: '/products/imgi_21_Q0401.webp', description: 'Girasoles premium y follaje selecto en base artesanal.' },
  ];

  const getSortedProducts = () => {
    let filtered = activeCategory === 'Todos' 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);
    
    if (sortBy === 'precio-menor') return filtered.sort((a, b) => a.price - b.price);
    if (sortBy === 'precio-mayor') return filtered.sort((a, b) => b.price - a.price);
    return filtered; 
  };

  const filteredProducts = getSortedProducts();

  return (
    <div className="min-h-screen bg-[#fcfaf8] text-gray-900 selection:bg-[#ff4d6d]/10 selection:text-[#ff4d6d] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="h-10 md:h-12"
          >
            <img src="/logo.svg" alt="Quiérelo Flores" className="h-full object-contain" />
          </motion.div>
          
          <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
            {['Inicio', 'Catálogo', 'Nosotros', 'Contacto'].map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                key={item} 
                href="#" 
                className="hover:text-[#ff4d6d] transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-3 md:gap-6 items-center">
            <div className="hidden sm:flex gap-4 items-center text-gray-600 border-r border-gray-200 pr-6 mr-2">
              {[
                { icon: FacebookIcon, color: '#1877F2' },
                { icon: InstagramIcon, color: '#E4405F' },
                { icon: TikTokIcon, color: '#000000' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  href="#" 
                  whileHover={{ color: social.color, y: -2 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/51947171972" 
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-black shadow-lg shadow-green-200"
            >
              <WhatsAppIcon size={16} />
              <span className="hidden md:inline">+51 947 171 972</span>
              <span className="md:hidden">WhatsApp</span>
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="initial" animate="animate" variants={stagger} className="space-y-10 text-left">
            <motion.div variants={fadeInUp} className="space-y-6">
              <span className="text-[#ff4d6d] font-bold tracking-[0.4em] uppercase text-sm block">Hecho con amor en Lima Norte</span>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] text-gray-900 tracking-tight">
                Detalles que <br />
                <span className="italic text-gray-500">Enamoran</span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-lg text-gray-800 max-w-md leading-relaxed font-medium">
              Elegancia floral diseñada para celebrar la vida. Somos tu florería boutique de confianza en Los Olivos.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-5 bg-black text-white rounded-full font-bold flex items-center gap-3 shadow-xl hover:bg-gray-900 transition-colors"
              >
                Explorar Colección <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
              <img src="/products/imgi_2_banner1.webp" alt="Flores Premium" className="w-full h-full object-cover" />
            </div>
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[2rem] shadow-2xl glass-card hidden sm:block border border-gray-100"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-[#ff4d6d] mb-1">Calidad Premium</p>
              <p className="text-xl font-serif font-bold text-gray-900">Flores Frescas <br/> Cada Día</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        id="catalogo" 
        className="py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-10 text-gray-900 tracking-tight">Nuestra Colección</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <motion.button
                    key={cat}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                      activeCategory === cat ? 'bg-black text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="relative min-w-[220px] flex items-center">
              <ArrowUpDown size={14} className="absolute left-6 text-gray-800 pointer-events-none" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none bg-gray-100 border-none pl-14 pr-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest text-gray-900 cursor-pointer focus:ring-2 focus:ring-[#ff4d6d]/20 outline-none"
              >
                <option value="relevancia">Relevancia</option>
                <option value="precio-menor">Precio: Menor a Mayor</option>
                <option value="precio-mayor">Precio: Mayor a Menor</option>
              </select>
              <ChevronDown size={14} className="absolute right-6 pointer-events-none text-gray-800" />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  key={product.id} 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.95 }} 
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="group relative"
                >
                  <div className={`aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 relative bg-gray-100 shadow-sm border border-gray-100 ${product.isSoldOut ? 'grayscale-[0.5]' : ''}`}>
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    
                    {product.isSoldOut && (
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">Agotado</span>
                      </div>
                    )}
                    
                    {!product.isSoldOut && (
                      <div className="absolute top-6 right-6">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white/95 backdrop-blur rounded-full text-gray-400 hover:text-[#ff4d6d] transition-colors shadow-md"
                        >
                          <Heart size={18} />
                        </motion.button>
                      </div>
                    )}
                  </div>
                  <div className="px-2 space-y-1">
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#ff4d6d] transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm leading-tight mb-2 min-h-[40px]">{product.description}</p>
                    <div className="flex justify-between items-center border-t border-gray-50 pt-2 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{product.category}</span>
                      <span className="text-lg font-black text-[#ff4d6d]">S/ {product.price}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Custom Gift Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="bg-gray-950 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div className="space-y-6">
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#ff4d6d] font-bold tracking-[0.5em] uppercase text-xs block"
                  >
                    Exclusividad Total
                  </motion.span>
                  <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
                    ¿Buscas algo <br/> <span className="italic text-gray-500 text-4xl md:text-6xl font-normal">Realmente Único?</span>
                  </h2>
                  <p className="text-gray-400 text-xl leading-relaxed font-medium max-w-md">
                    Tu visión, nuestra artesanía. Creamos piezas botánicas irrepetibles que cuentan tu historia personal.
                  </p>
                </div>
                
                <motion.a 
                  href="https://wa.me/51947171972" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black rounded-full font-bold text-lg hover:bg-[#25D366] hover:text-white transition-colors group shadow-xl"
                >
                  <WhatsAppIcon size={24} />
                  Personalizar Detalles
                </motion.a>
              </div>

              <div className="relative hidden lg:block">
                <motion.div 
                  initial={{ rotate: 10, scale: 0.9, opacity: 0 }}
                  whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                  className="aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl relative"
                >
                  <img src="/products/imgi_4_banner3.webp" alt="Personalización" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#ff4d6d] flex items-center justify-center shadow-lg shadow-[#ff4d6d]/20">
                      <Heart size={24} fill="white" className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Artesanía</p>
                      <p className="text-lg font-bold text-white">100% Personalizado</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#ff4d6d]/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-white relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-32 space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#ff4d6d] font-bold tracking-[0.4em] uppercase text-sm block"
            >
              Historias Reales
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight text-center">Lo que dicen de nosotros</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { text: "¡Me encantó el servicio! El ramo llegó fresquito y a la hora exacta. Mi novia quedó fascinada con los tulipanes.", author: "Andrea Castillo", initials: "AC" },
              { text: "Excelente atención por WhatsApp. Me ayudaron a elegir el box perfecto para mi aniversario. Súper recomendados en Los Olivos.", author: "Miguel Rivera", initials: "MR" },
              { text: "El peluche gigante es de muy buena calidad y el delivery fue muy cuidadoso. Gracias Quiérelo Flores.", author: "Juan Pérez", initials: "JP" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12 }}
                className="bg-[#faf7f5] p-12 rounded-[4rem] relative group border border-gray-100/50 shadow-sm"
              >
                <div className="flex gap-1.5 text-[#ffb703] mb-10">
                  {[...Array(5)].map((_, i) => <Heart key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-900 text-xl font-medium leading-relaxed italic mb-12">"{t.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-bold text-[#ff4d6d] shadow-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.author}</p>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Cliente Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
          <div className="w-full h-full border-[100px] border-gray-900 rounded-full blur-[100px] scale-150" />
        </div>
      </section>

      {/* FAQ Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-40 bg-[#fcfaf8]"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-32 space-y-6">
            <h2 className="text-5xl font-serif font-bold text-gray-900 tracking-tight text-center">Dudas Comunes</h2>
            <div className="w-20 h-1 bg-[#ff4d6d] mx-auto rounded-full" />
            <p className="text-gray-600 text-xl font-medium text-center">Resolvemos tus inquietudes para que tu experiencia sea perfecta</p>
          </div>
          
          <div className="space-y-4 bg-white p-4 md:p-12 rounded-[4rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100">
            <FAQItem question="¿Realizan entregas el mismo día?" answer="Sí, para pedidos realizados antes de las 2:00 PM contamos con entrega express en toda Lima Norte (Los Olivos, SMP, Comas, Independencia)." />
            <FAQItem question="¿Cuáles son los métodos de pago?" answer="Aceptamos todas las tarjetas de crédito/débito, transferencias bancarias, Yape y Plin para tu total comodidad." />
            <FAQItem question="¿Puedo personalizar mi arreglo?" answer="¡Absolutamente! Somos especialistas en diseño personalizado. Contáctanos por WhatsApp y crearemos algo único para ti." />
            <FAQItem question="¿Llegan a todo Lima?" answer="Nos especializamos en Lima Norte para garantizar frescura máxima, pero realizamos envíos a otros distritos previa coordinación por WhatsApp." />
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <motion.img 
                whileHover={{ rotate: -5, scale: 1.1 }}
                src="/logo.svg" alt="Quiérelo" className="h-10 brightness-0 invert" 
              />
              <p className="text-gray-300 text-sm leading-relaxed font-bold">Transmitimos emociones a través de la frescura de nuestras flores. Boutique floral líder en Lima Norte.</p>
              <div className="flex gap-4">
                {[
                  { icon: FacebookIcon, color: '#1877F2' },
                  { icon: InstagramIcon, color: '#E4405F' },
                  { icon: TikTokIcon, color: '#ffffff' }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href="#" 
                    whileHover={{ backgroundColor: social.color, y: -5, scale: 1.1 }}
                    className="p-3 bg-white/10 rounded-full transition-colors"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-10 uppercase tracking-widest text-[11px] text-[#ff4d6d]">Navegación</h4>
              <ul className="space-y-4 text-gray-300 text-sm font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#catalogo" className="hover:text-white transition-colors">Catálogo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-10 uppercase tracking-widest text-[11px] text-[#ff4d6d]">Información</h4>
              <ul className="space-y-4 text-gray-300 text-sm font-bold">
                <li><a href="#" className="hover:text-white transition-colors">Política de Envíos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-10 uppercase tracking-widest text-[11px] text-[#ff4d6d]">¿Dónde estamos?</h4>
              <ul className="space-y-6 text-gray-300 text-sm font-bold">
                <li className="flex gap-4">
                  <WhatsAppIcon size={20} className="text-[#ff4d6d] shrink-0" />
                  <span>+51 947 171 972<br/><span className="text-[10px] text-gray-500">Atención 24/7 vía WhatsApp</span></span>
                </li>
                <li className="flex gap-4">
                  <div className="w-5 h-5 border-2 border-[#ff4d6d] rounded-sm shrink-0 mt-1" />
                  <span>Los Olivos, Lima Norte<br/><span className="text-[10px] text-gray-500">Envíos a todo el distrito</span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            <p>&copy; 2026 Quiérelo Flores. Detalles que Enamoran.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-[#ff4d6d] transition-colors border-b border-transparent hover:border-[#ff4d6d]">Privacidad</a>
              <a href="#" className="hover:text-[#ff4d6d] transition-colors border-b border-transparent hover:border-[#ff4d6d]">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
