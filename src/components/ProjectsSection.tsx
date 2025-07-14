
import { ExternalLink, Code, Cpu, Package } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Sistema de Chamados com IA",
      description: "Otimização de tempo com automações em atendimento técnico.",
      technologies: ["IA", "Automação", "Web App"],
      icon: Cpu,
      featured: true
    },
    {
      title: "Gestor de Ativos de T.I Web",
      description: "Controle e rastreamento de equipamentos com integração em nuvem.",
      technologies: ["Web App", "Cloud", "Dashboard"],
      icon: Code,
      featured: true
    },
    {
      title: "Estoque Inteligente",
      description: "Sistema com alertas automáticos para reposição e movimentação de itens.",
      technologies: ["Lovable", "Automação", "Alertas"],
      icon: Package,
      featured: false
    }
  ];

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
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className={`card-custom group relative overflow-hidden animate-fade-in-scale ${
                  project.featured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group-hover:text-primary/80">
                  Ver mais detalhes
                  <ExternalLink size={16} />
                </button>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Destaque
                  </div>
                )}
              </div>
            ))}
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
