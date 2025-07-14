import { Brain, Github, GitBranch } from "lucide-react";

const MyStacksSection = () => {
  const stacks = [
    { name: "IA", icon: Brain },
    { name: "Lovable", icon: null, logo: "https://lovable.dev/favicon.ico" },
    { name: "Cursor", icon: null, logo: "https://img.utdstc.com/icon/a2c/de1/a2cde158af82ba714c9c50acfb13b930312e231596805f4a1a9d7ec6d8059dba:200" },
    { name: "Supabase", icon: null, logo: "https://yt3.googleusercontent.com/KVjptxDSWT7rjVfGax2TgTNVAYgplgo1z_fwaV3MFjPpcmNVZC0TIgQV030BPJ0ybCP3_Fz-2w=s900-c-k-c0x00ffffff-no-rj" },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Github }
  ];

  return (
    <section id="stacks" className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 animate-fade-in">
            My Stacks
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Tecnologias e ferramentas que utilizo no dia a dia
          </p>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-12 py-8">
              {/* First set of items */}
              {stacks.map((stack, index) => (
                <div 
                  key={`${stack.name}-1`}
                  className="flex flex-col items-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                    {stack.icon ? (
                      <stack.icon className="w-8 h-8 text-primary" />
                    ) : (
                      <img 
                        src={stack.logo} 
                        alt={stack.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {stack.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {stacks.map((stack, index) => (
                <div 
                  key={`${stack.name}-2`}
                  className="flex flex-col items-center min-w-[120px] group"
                >
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                    {stack.icon ? (
                      <stack.icon className="w-8 h-8 text-primary" />
                    ) : (
                      <img 
                        src={stack.logo} 
                        alt={stack.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {stack.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStacksSection;