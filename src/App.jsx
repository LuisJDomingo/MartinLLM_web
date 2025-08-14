import React from 'react';
import { Bot, Cpu, Database, Zap, ShieldCheck, BarChart, Settings, Code, Users, CheckCircle, ArrowRight } from 'lucide-react';

// Importa las nuevas imágenes para la sección de capacidades
import aiConfigPanel from './assets/images/ai-configuration-panel.png';
import modelManagement from './assets/images/model-management-interface.png';
import fineTuning from './assets/images/llm-fine-tuning-dashboard.png';
import monitoringCharts from './assets/images/real-time-monitoring-charts.png';
import systemPerformance from './assets/images/system-performance-dashboard.png';
import appScreenshot from './assets/images/app-screenshot.png';

// --- CONFIGURACIÓN DEL ENLACE DE DESCARGA ---
// Reemplaza 'TU_ID_DE_ARCHIVO_AQUI' con el ID de tu archivo de Google Drive
const GOOGLE_DRIVE_DOWNLOAD_URL = "https://drive.google.com/file/d/TU_ID_DE_ARCHIVO_AQUI/view?usp=sharing";

const App = () => {
  return (
    <div className="bg-background text-foreground tech-pattern">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AdvancedCapabilitiesSection />
        <PricingSection />
        <StatsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
    <div className="container mx-auto px-4 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-primary" />
        <span className="text-2xl font-bold">Martin LLM</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#features" className="hover:text-primary transition-colors">Características</a>
        <a href="#capabilities" className="hover:text-primary transition-colors">Capacidades</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Planes</a>
      </nav>
      <a href={GOOGLE_DRIVE_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg glow-effect transition-all">
        Descargar
      </a>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="py-20 md:py-32 hero-gradient">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Tu Interfaz Definitiva para <span className="text-primary">Modelos de IA</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
        Martin LLM es una interfaz profesional para interactuar con modelos de lenguaje. Potencia tu productividad con chat inteligente, múltiples modelos y monitoreo en tiempo real.
      </p>
      <div className="flex justify-center items-center space-x-4 mb-12">
        <a href={GOOGLE_DRIVE_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-lg glow-effect transition-all text-lg">
          Descargar Gratis
        </a>
        <a href="#capabilities" className="bg-secondary hover:bg-muted text-secondary-foreground font-semibold px-8 py-4 rounded-lg transition-colors text-lg">
          Ver Capacidades
        </a>
      </div>
      <div className="relative max-w-5xl mx-auto">
        <img src={appScreenshot} alt="Screenshot de la aplicación Martin LLM" className="rounded-xl shadow-2xl border-2 border-border glow-effect" />
      </div>
    </div>
  </section>
);

const features = [
  { icon: <Bot />, title: "Chat Inteligente", description: "Interfaz avanzada con múltiples modos de chat y soporte para varios modelos de IA." },
  { icon: <Settings />, title: "Múltiples Modelos", description: "Configuración personalizable para ajustar parámetros y cambiar de modelo fácilmente." },
  { icon: <BarChart />, title: "Monitoreo en Tiempo Real", description: "Visualiza métricas de sistema como CPU, RAM y disco directamente en la interfaz." },
  { icon: <Code />, title: "Interfaz Profesional", description: "Diseño inspirado en IDEs modernos, con una estética técnica y funcional." },
  { icon: <Cpu />, title: "Alto Rendimiento", description: "Optimización de recursos para un funcionamiento fluido y eficiente en tu sistema." },
  { icon: <ShieldCheck />, title: "Seguro y Confiable", description: "Todo el procesamiento se realiza de forma local, garantizando tu privacidad y seguridad." },
];

const FeaturesSection = () => (
  <section id="features" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Características Principales</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border border-border card-hover">
            <div className="text-primary mb-4">{React.cloneElement(feature.icon, { className: "w-10 h-10" })}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const advancedCapabilities = [
    {
        title: "Configuración Avanzada de IA",
        description: "Ajusta con precisión los parámetros del modelo, como temperatura y top-p, para obtener respuestas a medida. Guarda y gestiona presets para diferentes tareas.",
        image: aiConfigPanel,
        alt: "Panel de configuración de IA"
    },
    {
        title: "Gestión Inteligente de Modelos",
        description: "Descarga, actualiza y administra múltiples modelos LLM desde una única interfaz. Cambia entre modelos locales y remotos con un solo clic.",
        image: modelManagement,
        alt: "Interfaz de gestión de modelos"
    },
    {
        title: "Fine-Tuning y Personalización",
        description: "Utiliza tus propios datasets para especializar modelos. Nuestra interfaz guiada simplifica el proceso de fine-tuning para un rendimiento superior.",
        image: fineTuning,
        alt: "Dashboard de fine-tuning de LLM"
    },
    {
        title: "Monitoreo y Analytics Avanzados",
        description: "Obtén insights detallados sobre el uso de tokens, latencia de respuesta y costos por sesión. Optimiza tus interacciones con datos en tiempo real.",
        image: monitoringCharts,
        alt: "Gráficos de monitoreo en tiempo real"
    },
    {
        title: "Sistema de Rendimiento Optimizado",
        description: "Visualiza el impacto de cada modelo en tu hardware. Gestiona la asignación de VRAM y CPU para equilibrar rendimiento y consumo de recursos.",
        image: systemPerformance,
        alt: "Dashboard de rendimiento del sistema"
    }
];

const AdvancedCapabilitiesSection = () => (
    <section id="capabilities" className="py-20 bg-card/50 border-t border-b border-border">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Capacidades Avanzadas</h2>
                <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                    Lleva tu interacción con la IA al siguiente nivel con herramientas de grado profesional.
                </p>
            </div>

            <div className="space-y-16">
                {advancedCapabilities.map((capability, index) => (
                    <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-3 text-primary">{capability.title}</h3>
                            <p className="text-muted-foreground text-lg">{capability.description}</p>
                        </div>
                        <div className="md:w-1/2">
                            <img 
                                src={capability.image} 
                                alt={capability.alt} 
                                className="rounded-lg shadow-lg border border-border glow-effect w-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const plans = [
  { name: "Básico", price: "Gratis", features: ["Acceso a modelos básicos", "5 conversaciones al día", "Historial de 3 días", "Soporte comunitario"] },
  { name: "Profesional", price: "$29", period: "/mes", features: ["Acceso a todos los modelos", "Conversaciones ilimitadas", "Historial completo", "Fine-tuning básico", "Soporte prioritario"], popular: true },
  { name: "Empresarial", price: "$99", period: "/mes", features: ["Todo en Profesional", "Múltiples usuarios", "Acceso a API personalizada", "Soporte dedicado 24/7"] },
];

const PricingSection = () => (
  <section id="pricing" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Planes de Monetización</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`bg-card p-8 rounded-lg border ${plan.popular ? 'border-primary glow-effect' : 'border-border'} flex flex-col card-hover`}>
            {plan.popular && <div className="text-center"><span className="text-sm font-bold bg-primary text-primary-foreground px-3 py-1 rounded-full -translate-y-12">MÁS POPULAR</span></div>}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg font-normal text-muted-foreground">{plan.period}</span></p>
            <ul className="space-y-3 text-muted-foreground mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-muted'}`}>
              {plan.name === "Básico" ? "Empezar Gratis" : "Elegir Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  { value: "10K+", label: "Usuarios Activos" },
  { value: "50+", label: "Modelos Soportados" },
  { value: "99.9%", label: "Tiempo de Actividad" },
  { value: "Local", label: "Procesamiento de Datos" },
];

const StatsSection = () => (
  <section className="py-20 bg-card/50 border-t border-b border-border">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
            <p className="text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="py-20 text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Desbloquea tu Potencial con IA</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Descarga Martin LLM hoy mismo y experimenta una nueva era de interacción con modelos de lenguaje.
      </p>
      <a href={GOOGLE_DRIVE_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-5 rounded-lg glow-effect transition-all text-xl inline-flex items-center">
        Descargar Ahora <ArrowRight className="w-6 h-6 ml-2" />
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-bold mb-4">Producto</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#features" className="hover:text-primary">Características</a></li>
            <li><a href="#pricing" className="hover:text-primary">Planes</a></li>
            <li><a href={GOOGLE_DRIVE_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Descargas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Recursos</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Documentación</a></li>
            <li><a href="#" className="hover:text-primary">Blog</a></li>
            <li><a href="#" className="hover:text-primary">Soporte</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Compañía</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Sobre nosotros</a></li>
            <li><a href="#" className="hover:text-primary">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#" className="hover:text-primary">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-primary">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-muted-foreground border-t border-border pt-8 mt-8">
        <p>&copy; {new Date().getFullYear()} Martin LLM. Todos los derechos reservados.</p>
        <p className="text-sm">Desarrollado por Luis Domingo</p>
      </div>
    </div>
  </footer>
);

export default App;