
import { Calendar, MapPin, Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Móveis Brasília",
      position: "Suporte N2",
      period: "2024 - 2025",
      location: "Londrina, PR",
      highlights: [
        "Migração e ajuda na implantação sistema ERP",
        "Suporte especializado N2",
        "Treinamento de pessoas novas",
        "Sistema Terasoft ERP"
      ],
      type: "Experiência Principal"
    },
    {
      company: "Til Transportes",
      position: "Atendimento Técnico",
      period: "2023 - 2024",
      location: "Londrina, PR",
      highlights: [
        "Suporte infraestrutura",
        "Manutenção de hardware",
        "Resolução de incidentes críticos"
      ],
      type: "Experiência Técnica"
    },
    {
      company: "Móveis Brasília",
      position: "Atendimento Técnico",
      period: "2021 - 2022",
      location: "Londrina, PR",
      highlights: [
        "Suporte técnico aos colaboradores",
        "Alimentação de um Wiki interno",
        "Manutenção de hardwares"
      ],
      type: "Experiência Técnica"
    }
  ];

  return (
    <section id="experience" className="section-spacing bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
            Experiências Profissionais
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trajetória focada em inovação e resultados concretos
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-px"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`relative flex items-center animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="card-custom group">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <h4 className="text-lg font-medium text-primary mt-1">
                            {exp.company}
                          </h4>
                        </div>
                        <Briefcase className="w-5 h-5 text-muted-foreground mt-1" />
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="card-custom text-center">
              <div className="text-2xl font-bold text-primary mb-2">2+ Anos</div>
              <div className="text-muted-foreground">Experiência Consolidada</div>
            </div>
            <div className="card-custom text-center">
              <div className="text-2xl font-bold text-primary mb-2">2 Empresas</div>
              <div className="text-muted-foreground">Diferentes Segmentos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
