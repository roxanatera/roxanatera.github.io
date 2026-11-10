export interface Project {
  icon: string;
  name: string;
  repo: string;
  image?: string;
  description: { es: string; en: string };
  tags: string[];
  badge?: { es: string; en: string };
}

export const projects: Project[] = [
  {
    icon: "🌐",
    name: "Portfolio Personal",
    repo: "https://github.com/roxanatera/portfolio-cybersecurity",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: {
      es: "Este mismo portfolio. Construido con Astro y Tailwind CSS con diseño dark mode elegante y soporte bilingüe.",
      en: "This very portfolio. Built with Astro and Tailwind CSS with elegant dark mode design and bilingual support.",
    },
    tags: ["Astro", "Tailwind", "CSS"],
  },
  {
    icon: "🐧",
    name: "Linux Security Toolkit",
    repo: "https://github.com/roxanatera/linux-security-toolkit",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    description: {
      es: "Scripts Bash para auditoría y seguridad en Linux. Documentación de aprendizaje por módulo.",
      en: "Bash scripts for Linux auditing and security. Learning documentation by module.",
    },
    tags: ["Linux", "Bash"],
    badge: { es: "En progreso", en: "In progress" },
  },
  {
    icon: "🛡️",
    name: "SystemGuard",
    repo: "https://github.com/roxanatera/systemguard",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: {
      es: "Herramienta Bash que audita servicios Linux en tiempo real. Detecta servicios activos, fallidos y sospechosos, generando reportes automáticos con timestamp.",
      en: "Bash tool that audits Linux services in real time. Detects active, failed and suspicious services, generating automatic timestamped reports.",
    },
    tags: ["Bash", "Linux", "Systemd"],
    badge: { es: "Seguridad", en: "Security" },
  },
  {
    icon: "🧊",
    name: "ColddBox Easy — Writeup",
    repo: "https://github.com/roxanatera/colddbox-ethical-hacking",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: {
      es: "Writeup de hacking ético de la máquina ColddBox Easy: reconocimiento, enumeración de WordPress, reverse shell y escalada a root en un laboratorio controlado.",
      en: "Ethical hacking writeup of the ColddBox Easy machine: recon, WordPress enumeration, reverse shell and privilege escalation to root in a controlled lab.",
    },
    tags: ["Nmap", "WordPress", "Privesc"],
  },
  {
    icon: "🎯",
    name: "Bandit · OverTheWire",
    repo: "https://github.com/roxanatera/otw-bandit-writeups",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    description: {
      es: "Serie de writeups de las wargames de Bandit: cada nivel documenta el concepto Unix que enseña y cómo lo resolví.",
      en: "Writeup series for the Bandit wargames: each level documents the Unix concept it teaches and how I solved it.",
    },
    tags: ["Linux", "SSH", "Bash"],
    badge: { es: "En progreso", en: "In progress" },
  },
  {
    icon: "🔥",
    name: "Firewall con iptables",
    repo: "https://github.com/roxanatera/firewall-lab-ubuntu",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: {
      es: "Laboratorio de firewall en Ubuntu: de una política abierta a una whitelist con iptables, verificada con pruebas de ping y SSH.",
      en: "Ubuntu firewall lab: from an open policy to a whitelist with iptables, verified with ping and SSH tests.",
    },
    tags: ["iptables", "Ubuntu", "SSH"],
  },
  {
    icon: "🔑",
    name: "Password Strength Analyzer",
    repo: "https://github.com/roxanatera/password-strength-analyzer",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
    description: {
      es: "Analizador de contraseñas en tiempo real con puntuación de entropía, detección de patrones, consulta a Have I Been Pwned y vault local cifrado con AES-256-GCM.",
      en: "Real-time password analyzer with entropy scoring, pattern detection, Have I Been Pwned lookup and a local vault encrypted with AES-256-GCM.",
    },
    tags: ["Python", "AES-256-GCM", "HIBP API"],
  },
  {
    icon: "🐳",
    name: "Docker + Notary v2",
    repo: "https://github.com/roxanatera/docker-notary-validation",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80",
    description: {
      es: "Cargas de trabajo dockerizadas con firma digital: instalación de Docker en Ubuntu y firma y verificación de imágenes con Notation CLI.",
      en: "Containerized workloads with digital signatures: Docker installation on Ubuntu and image signing and verification with Notation CLI.",
    },
    tags: ["Docker", "Notary v2", "Ubuntu"],
  },
  {
    icon: "📊",
    name: "Laboratorio de Monitorización",
    repo: "https://github.com/roxanatera/monitorizacion-gns3",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    description: {
      es: "Laboratorio GNS3 con Prometheus, Grafana, Loki y OpenTelemetry: métricas, logs centralizados y alertas ante fuerza bruta SSH.",
      en: "GNS3 lab with Prometheus, Grafana, Loki and OpenTelemetry: metrics, centralized logs and alerts for SSH brute-force attacks.",
    },
    tags: ["GNS3", "Prometheus", "Loki"],
    badge: { es: "Detección", en: "Detection" },
  },
];
