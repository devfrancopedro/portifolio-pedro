
import { Linkedin, MessageCircle, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/pedrofranco227", "_blank");
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5543984272462", "_blank");
  };

  return (
    <section id="hero" className="section-spacing pt-24 md:pt-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Profissional de T.I focado em{" "}
            <span className="text-gradient">soluções, inovação</span>{" "}
            e resultados.
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-start gap-3 text-lg md:text-xl text-muted-foreground">
              <span className="text-2xl">💡</span>
              <p>
                Com mais de <strong className="text-foreground">1.000 chamados resolvidos</strong> e{" "}
                <strong className="text-foreground">300h+ de atendimento técnico comprovados</strong>, entrego soluções que realmente fazem a diferença.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={handleLinkedInClick}
              className="btn-primary flex items-center gap-3 w-full sm:w-auto group"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="btn-secondary flex items-center gap-3 w-full sm:w-auto group"
            >
              <MessageCircle size={20} />
              <span>WhatsApp</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Chamados Resolvidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">300h+</div>
              <div className="text-muted-foreground">Atendimento Técnico</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
