import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from 'keep-react';
import { useClickOutside } from '@/react-app/hooks/useClickOutside';

const heroImages = [
  'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/massage-therapy.jpg',
  'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/kinesiology-treatment.jpg',
  'https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/wellness-center.jpg'
];

export default function HeroHeader() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPersonalServices, setShowPersonalServices] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const personalServicesRef = useClickOutside<HTMLDivElement>(() => setShowPersonalServices(false));
  
  // Hover intent management for dropdown
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const openDropdown = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      setHideTimeout(null);
    }
    setShowPersonalServices(true);
  };
  
  const scheduleHide = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    const timeout = setTimeout(() => {
      setShowPersonalServices(false);
    }, 220);
    setHideTimeout(timeout);
  };
  
  // Handle scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  // Navigation items
  const navigation = [
    {
      name: 'Serveis',
      href: '/services'
    },
    {
      name: 'Serveis Personalitzats',
      href: '/serveis-personalitzats',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Treballadors d\'oficina', href: '/serveis/treballadors-oficina' },
        { name: 'Esportistes', href: '/serveis/esportistes' },
        { name: 'Artistes', href: '/serveis/artistes' },
        { name: 'Músics', href: '/serveis/musics' },
        { name: 'Estudiants', href: '/serveis/estudiants' },
      ]
    },
    {
      name: 'Revisió 360°',
      href: 'https://360revision.ekabalance.com',
      isExternal: true
    },
    {
      name: 'VIP',
      href: '/vip'
    }
  ];
  
  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Images with smooth transitions */}
      <div className="absolute inset-0 transition-opacity duration-1000">
        {heroImages.map((image, index) => (
          <div 
            key={image} 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`} 
            style={{ backgroundImage: `url(${image})` }} 
          />
        ))}
      </div>
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Navigation */}
      <nav 
        className={`relative z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        style={{
          position: isScrolled ? 'fixed' : 'relative',
          top: isScrolled ? 0 : 'auto',
          left: 0,
          right: 0
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14' : 'h-16'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="https://mocha-cdn.com/019867be-db17-7148-8002-575a3f797108/eka_logo.png" 
                alt="EKA Balance Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? 'w-8 h-8' : 'w-10 h-10'
                } object-contain`}
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2">
                {navigation.map(item => (
                  <div key={item.name} className={`nav-item ${item.hasDropdown ? 'relative' : ''}`} 
                       ref={item.hasDropdown ? personalServicesRef : undefined}>
                    {item.hasDropdown ? (
                      <>
                        <Link 
                          to={item.href}
                          className={`nav-trigger font-medium transition-all duration-200 flex items-center px-5 py-3 rounded-[20px] ${
                            isScrolled 
                              ? `hover:bg-gray-100 ${isActivePath(item.href) ? 'text-[#FFB405]' : 'text-gray-900 hover:text-[#FFB405]'}`
                              : `hover:bg-white/20 ${isActivePath(item.href) ? 'text-[#FFB405]' : 'text-white hover:text-[#FFB405]'}`
                          }`}
                          onMouseEnter={openDropdown}
                          onMouseLeave={scheduleHide}
                          onFocus={openDropdown}
                          onBlur={scheduleHide}
                        >
                          {item.name}
                          <ChevronDown className="ml-1 w-4 h-4" />
                        </Link>
                        
                        {/* Hover bridge for seamless navigation */}
                        <div 
                          className="hover-bridge"
                          onMouseEnter={openDropdown}
                          onMouseLeave={scheduleHide}
                          aria-hidden="true"
                        />
                        
                        {/* Dropdown menu */}
                        <div 
                          className={`nav-dropdown ${showPersonalServices ? 'is-open' : ''}`}
                          style={{ 
                            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0.85)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                          }}
                          onMouseEnter={openDropdown}
                          onMouseLeave={scheduleHide}
                          onKeyDown={(e) => {
                            if (e.key === 'Escape') {
                              setShowPersonalServices(false);
                            }
                          }}
                          role="menu"
                          aria-label={`${item.name} submenu`}
                        >
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link 
                              key={dropdownItem.name}
                              to={dropdownItem.href} 
                              onClick={() => setShowPersonalServices(false)} 
                              className={`flex items-center justify-center h-12 text-sm font-medium transition-colors duration-200 ${
                                isScrolled ? 'text-gray-900 hover:text-[#FFB405]' : 'text-white hover:text-[#FFB405]'
                              }`}
                              style={{
                                marginBottom: index < item.dropdownItems!.length - 1 ? '8px' : '0'
                              }}
                              role="menuitem"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : item.isExternal ? (
                      <a 
                        href={item.href}
                        rel="noopener noreferrer"
                        className={`font-medium transition-all duration-200 px-5 py-3 rounded-[20px] ${
                          isScrolled 
                            ? 'text-gray-900 hover:text-[#FFB405] hover:bg-gray-100'
                            : 'text-white hover:text-[#FFB405] hover:bg-white/20'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(item.href, '_blank', 'noopener,noreferrer');
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        className={`font-medium transition-all duration-200 px-5 py-3 rounded-[20px] ${
                          isScrolled 
                            ? `hover:bg-gray-100 ${isActivePath(item.href) ? 'text-[#FFB405]' : 'text-gray-900 hover:text-[#FFB405]'}`
                            : `hover:bg-white/20 ${isActivePath(item.href) ? 'text-[#FFB405]' : 'text-white hover:text-[#FFB405]'}`
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
              {/* Reserva Button */}
              <Link
                to="/booking"
                className={`hidden sm:inline-flex font-semibold px-6 py-3 rounded-full transition-all duration-200 ${
                  isScrolled 
                    ? 'bg-[#FFB405] hover:bg-[#e8a204] text-[#000035]'
                    : 'bg-[#FFB405] hover:bg-[#e8a204] text-[#000035]'
                }`}
              >
                Reserva ara
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className={`md:hidden p-2 rounded-2xl transition-colors duration-200 ${
                  isScrolled 
                    ? 'hover:bg-gray-100 text-gray-700'
                    : 'hover:bg-white/20 text-white'
                }`}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden border-t py-3 ${
              isScrolled ? 'border-gray-200 bg-white/95' : 'border-white/10 bg-black/70 backdrop-blur-lg'
            }`}>
              <div className="space-y-1">
                {navigation.map(item => (
                  <div key={item.name}>
                    {item.isExternal ? (
                      <a 
                        href={item.href}
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMenuOpen(false);
                          window.open(item.href, '_blank', 'noopener,noreferrer');
                        }}
                        className={`block px-4 py-3 rounded-xl font-medium text-base transition-colors duration-200 ${
                          isScrolled ? 'text-gray-700 hover:bg-gray-50' : 'text-white hover:bg-white/10'
                        }`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        onClick={() => setIsMenuOpen(false)} 
                        className={`block px-4 py-3 rounded-xl font-medium text-base transition-colors duration-200 ${
                          isScrolled
                            ? `${isActivePath(item.href) ? 'text-[#FFB405] bg-[#FFB405]/10' : 'text-gray-700 hover:bg-gray-50'}`
                            : `${isActivePath(item.href) ? 'text-[#FFB405] bg-[#FFB405]/10' : 'text-white hover:bg-white/10'}`
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1 mt-2">
                        {item.dropdownItems?.map(dropdownItem => (
                          <Link 
                            key={dropdownItem.name}
                            to={dropdownItem.href} 
                            onClick={() => setIsMenuOpen(false)} 
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                              isScrolled 
                                ? 'text-gray-600 hover:bg-gray-50'
                                : 'text-white/80 hover:bg-white/10'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Mobile Reserva */}
                <div className={`pt-2 mt-2 border-t ${isScrolled ? 'border-gray-200' : 'border-white/20'}`}>
                  <Link
                    to="/booking"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] font-semibold px-4 py-3 rounded-xl text-center transition-colors duration-200"
                  >
                    Reserva ara
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center text-white px-6">
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Sparkles className="w-5 h-5 mr-2" />
            <span className="font-medium">Una manera natural de sanar</span>
          </div>
          
          {/* Main Title */}
          <h1 className="apple-large-title text-white mb-8">EKA Balance</h1>
          
          {/* Subtitle */}
          <p className="apple-subtitle text-white/90 mb-12 max-w-3xl mx-auto">
            Centre de benestar integral especialitzat en massatge terapèutic, kinesiologia 
            i teràpies personalitzades al cor de Barcelona
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link to="/descobriment" className="group">
              <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl">
                És la teva primera vegada?
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/services" className="group">
              <Button size="xl" className="bg-[#FFB405] hover:bg-[#e8a204] text-[#000035] px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 shadow-xl">
                Descobreix els nostres serveis
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-light mb-2">1500+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Sessions realitzades</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">4.93★</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Valoració mitjana</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">96</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Clients feliços</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">10+</div>
              <div className="text-white/80 text-sm uppercase tracking-wider">Anys experiència</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
