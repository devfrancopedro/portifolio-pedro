
import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/20">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Pedro Franco.</span>
            <span>Feito com</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>e</span>
            <Code size={16} className="text-primary" />
          </div>

          {/* Tech Stack */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Desenvolvido com:</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-background rounded text-xs font-medium">React</span>
              <span className="px-2 py-1 bg-background rounded text-xs font-medium">TypeScript</span>
              <span className="px-2 py-1 bg-background rounded text-xs font-medium">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 pt-6 border-t border-border/20 text-center">
          <p className="text-sm text-muted-foreground">
            Especialista em T.I • Desenvolvimento • Suporte Técnico • Inovação
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
