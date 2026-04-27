import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const testimonials = [
  { text: "¡Me encantó el servicio! El ramo llegó fresquito y a la hora exacta. Mi novia quedó fascinada con los tulipanes.", author: "Andrea Castillo", initials: "AC" },
  { text: "Excelente atención por WhatsApp. Me ayudaron a elegir el box perfecto para mi aniversario. Súper recomendados en Los Olivos.", author: "Miguel Rivera", initials: "MR" },
  { text: "El peluche gigante es de muy buena calidad y el delivery fue muy cuidadoso. Gracias Quiérelo Flores.", author: "Juan Pérez", initials: "JP" }
];

const TestimonialsSection = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Auto-advance testimonials on mobile
  useEffect(() => {
    // Ensure this effect only runs on the client side
    if (typeof window !== 'undefined' && window.innerWidth < 768) { // Approx mobile breakpoint
      const interval = setInterval(() => {
        setActiveTestimonialIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  const currentTestimonial = testimonials[activeTestimonialIndex];

  return (
    <section className="py-20 md:py-40 bg-white relative overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-32 space-y-4 md:space-y-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff4d6d] font-bold tracking-[0.4em] uppercase text-xs md:text-sm block"
          >
            Historias Reales
          </motion.span>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight text-center">Lo que dicen de nosotros</h2>
        </div>

        {/* Testimonial Grid for Desktop, Carousel for Mobile */}
        <div className="relative">
          {/* Mobile Carousel Logic */}
          <div className="md:hidden overflow-hidden px-4">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeTestimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) {
                    setActiveTestimonialIndex((prev) => (prev + 1) % testimonials.length);
                  } else if (info.offset.x > 50) {
                    setActiveTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                  }
                }}
                className="bg-[#faf7f5] p-8 rounded-[3rem] relative border border-gray-100/50 shadow-sm flex flex-col h-full cursor-grab active:cursor-grabbing"
              >
                <div className="flex gap-1.5 text-[#ffb703] mb-6">
                  {[...Array(5)].map((_, i) => <Heart key={i} size={14} fill="currentColor" className="md:w-4 md:h-4" />)}
                </div>
                <p className="text-gray-900 text-lg font-medium leading-relaxed italic mb-8">"{currentTestimonial.text}"</p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-[#ff4d6d] shadow-sm">
                    {currentTestimonial.initials}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-sm">{currentTestimonial.author}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cliente Verificado</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonialIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${index === activeTestimonialIndex ? 'bg-[#ff4d6d] w-8' : 'bg-gray-200 w-2'}`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8 text-left">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -12 }}
                className="bg-[#faf7f5] p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] relative group border border-gray-100/50 shadow-sm"
              >
                <div className="flex gap-1.5 text-[#ffb703] mb-6 md:mb-10">
                  {[...Array(5)].map((_, i) => <Heart key={i} size={14} fill="currentColor" className="md:w-4 md:h-4" />)}
                </div>
                <p className="text-gray-900 text-lg md:text-xl font-medium leading-relaxed italic mb-8 md:mb-12">"{t.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center font-bold text-[#ff4d6d] shadow-sm text-sm md:text-base">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">{t.author}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cliente Verificado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.03]">
        <div className="w-full h-full border-[50px] md:border-[100px] border-gray-900 rounded-full blur-[100px] scale-150" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
