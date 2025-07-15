
import { ExternalLink, Code, Cpu, Package } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gerenciamento de Ativos T.I",
      description: "Sistema completo com controle de equipamentos, chamados com IA e gestão de estoque inteligente.",
      technologies: ["IA", "Web App", "Dashboard", "Automação"],
      icon: Cpu,
      featured: true,
      link: "https://ativos-ti.vercel.app/"
    },
    {
      title: "Organizador Financeiro",
      description: "App que organiza gastos futuros e investimentos pessoais.",
      technologies: ["React", "Dashboard", "Finanças"],
      icon: Code,
      featured: false,
      link: "https://organizador-delta.vercel.app/"
    },
    {
      title: "Em Andamento",
      description: "para saber mais entre em contato",
      technologies: [],
      icon: Package,
      featured: false
    }
  ];

  const projectImages: Record<string, string[]> = {
    "Organizador Financeiro": [
      "/projeto_organizador/organizador.jpeg",
      "/projeto_organizador/organizador-1.png",
      "/projeto_organizador/organizador-2.png",
    ],
    "Gerenciamento de Ativos T.I": [
      "/projeto_ti/cont_ti.png",
      "/projeto_ti/cont_ti_1.png",
      "/projeto_ti/cont_ti_2.png",
      "/projeto_ti/cont_ti_3.png",
      "/projeto_ti/cont_ti_4.png",
      "/projeto_ti/cont_ti_5.png",
    ],
    "Em Andamento": [],
  };

  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
            Projetos
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Soluções desenvolvidas para otimizar processos e aumentar a produtividade
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const images = projectImages[project.title] || [];
              const [current, setCurrent] = useState(0);
              useEffect(() => {
                if (images.length === 0) return;
                const interval = setInterval(() => {
                  setCurrent((prev) => (prev + 1) % images.length);
                }, 3500);
                return () => clearInterval(interval);
              }, [images.length]);
              const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
              const next = () => setCurrent((prev) => (prev + 1) % images.length);
              // Customização para o projeto 'Em Andamento'
              if (project.title === "Em Andamento") {
                return (
                  <div key={project.title} className={`card-custom group relative overflow-hidden animate-fade-in-scale`} style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Imagem ilustrativa de desenvolvimento */}
                    <div className="mb-4 flex justify-center items-center w-full h-[180px] md:h-[220px] lg:h-[260px]">
                      <img
                        src="https://img.freepik.com/vetores-premium/veiculo-basculante-de-construcao-e-guindaste-no-design-de-ilustracao-vetorial-de-local-de-trabalho_24908-65161.jpg"
                        alt="Projeto em desenvolvimento"
                        className="rounded-xl max-h-full max-w-full object-contain shadow-md"
                      />
                    </div>
                    {/* Project Icon */}
                    <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-all duration-300">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Botão de contato */}
                    <button
                      className="btn-primary w-full mt-2"
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Entrar em contato
                    </button>
                  </div>
                );
              }
              // Para os outros projetos, botão com link externo
              return (
                <div key={project.title} className={`card-custom group relative overflow-hidden animate-fade-in-scale ${project.featured ? 'md:col-span-1 lg:col-span-1' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Carrossel de imagens */}
                  {images.length > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-center items-center w-full h-[180px] md:h-[220px] lg:h-[260px]">
                        <img src={images[current]} alt={project.title} className="rounded-xl max-h-full max-w-full object-contain shadow-md" />
                      </div>
                      <div className="flex justify-center gap-4 mt-2">
                        <button onClick={prev} className="bg-white/80 rounded-full p-2 shadow hover:bg-white transition" aria-label="Anterior">
                          <span className="text-xl">&#8592;</span>
                        </button>
                        <button onClick={next} className="bg-white/80 rounded-full p-2 shadow hover:bg-white transition" aria-label="Próxima">
                          <span className="text-xl">&#8594;</span>
                        </button>
                      </div>
                    </div>
                  )}
                  {/* Project Icon */}
                  <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6 group-hover:bg-primary/20 transition-all duration-300">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Action Button com link externo */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group-hover:text-primary/80"
                    >
                      Ver mais detalhes
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Destaque
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground mb-4">
              Interessado em saber mais sobre algum projeto?
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
