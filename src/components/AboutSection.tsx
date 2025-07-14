
import { Code, Users, Lightbulb, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Desenvolvimento",
      description: "Criação de sistemas internos e automações com tecnologias modernas"
    },
    {
      icon: Users,
      title: "Atendimento",
      description: "Excelência no suporte técnico e relacionamento com clientes"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Implementação de soluções com IA e ferramentas avançadas"
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Foco em resultados e melhoria contínua dos processos"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-fade-in">
            Sobre Mim
          </h2>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in-left">
              <div className="card-custom">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Profissional de T.I com foco em <strong className="text-foreground">resultados</strong>, 
                  <strong className="text-foreground">inovação</strong> e <strong className="text-foreground">excelência</strong>.
                  Atuo com suporte técnico, desenvolvimento de sistemas e atendimento ao cliente, sempre buscando entregar soluções práticas e eficientes.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Tive a oportunidade de trabalhar em empresas como <strong className="text-foreground">Móveis Brasília</strong>, 
                  prestando suporte direto ao sistema ERP Terasoft.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Além da atuação operacional, crio e implemento soluções internas e plataformas web, utilizando tecnologias modernas, 
                  incluindo <strong className="text-foreground">inteligência artificial</strong>, para automatizar rotinas, melhorar o controle de ativos e otimizar processos.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Se você busca um profissional que alia conhecimento técnico, visão prática e iniciativa para resolver problemas reais, 
                  estou pronto para somar ao seu time.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
              {highlights.map((item, index) => (
                <div 
                  key={item.title} 
                  className="card-custom text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
