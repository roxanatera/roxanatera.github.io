export type Area = "dev" | "security";

export interface Project {
  area: Area;
  icon: string;
  name: string;
  repo: string;
  image?: string;
  description: { es: string; en: string };
  outcome: { es: string; en: string };
  tags: string[];
}

const IMG_A = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80";
const IMG_B = "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&q=80";
const IMG_C = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80";

export const projects: Project[] = [
  {
    area: "security",
    icon: "🔑",
    name: "Password Strength Analyzer",
    repo: "https://github.com/roxanatera/password-strength-analyzer",
    image: IMG_A,
    description: {
      es: "Analizador de contraseñas en tiempo real con puntuación de entropía, detección de patrones y vault local.",
      en: "Real-time password analyzer with entropy scoring, pattern detection and a local vault.",
    },
    outcome: {
      es: "Consulta a Have I Been Pwned por k-anonimidad: la contraseña nunca viaja en texto plano. Vault cifrado con PBKDF2 y AES-256-GCM.",
      en: "Have I Been Pwned lookup via k-anonymity: the password never travels in plain text. Vault encrypted with PBKDF2 and AES-256-GCM.",
    },
    tags: ["Python", "PBKDF2", "AES-256-GCM", "HIBP API"],
  },
  {
    area: "security",
    icon: "📊",
    name: "Laboratorio de Monitorización",
    repo: "https://github.com/roxanatera/monitorizacion-gns3",
    image: IMG_C,
    description: {
      es: "Red virtual en GNS3 con Prometheus, Grafana, Loki y OpenTelemetry: métricas, logs centralizados y alertas.",
      en: "Virtual network in GNS3 with Prometheus, Grafana, Loki and OpenTelemetry: metrics, centralized logs and alerts.",
    },
    outcome: {
      es: "Alertas por fuerza bruta SSH (LogQL) y por uso de memoria (PromQL), validadas con un ataque simulado.",
      en: "Alerts for SSH brute force (LogQL) and high memory usage (PromQL), validated with a simulated attack.",
    },
    tags: ["GNS3", "Prometheus", "Grafana", "Loki"],
  },
  {
    area: "security",
    icon: "🐳",
    name: "Docker + Notary v2",
    repo: "https://github.com/roxanatera/docker-notary-validation",
    image: IMG_B,
    description: {
      es: "Cargas de trabajo dockerizadas con firma digital: instalación de Docker en Ubuntu y firma de imágenes con Notation CLI.",
      en: "Containerized workloads with digital signatures: Docker on Ubuntu and image signing with Notation CLI.",
    },
    outcome: {
      es: "Verificación de integridad antes de producción: cualquier alteración de la imagen invalida la firma.",
      en: "Integrity check before production: any change to the image invalidates the signature.",
    },
    tags: ["Docker", "Notary v2", "Ubuntu"],
  },
  {
    area: "security",
    icon: "🧊",
    name: "ColddBox Easy — Writeup",
    repo: "https://github.com/roxanatera/colddbox-ethical-hacking",
    image: IMG_A,
    description: {
      es: "Writeup de hacking ético de la máquina ColddBox Easy en un laboratorio controlado.",
      en: "Ethical hacking writeup of the ColddBox Easy machine in a controlled lab.",
    },
    outcome: {
      es: "Cadena de ataque completa documentada: enumeración de WordPress, reverse shell y escalada a root.",
      en: "Full attack chain documented: WordPress enumeration, reverse shell and privilege escalation to root.",
    },
    tags: ["Nmap", "WPScan", "Kali"],
  },
  {
    area: "security",
    icon: "🔥",
    name: "Firewall con iptables",
    repo: "https://github.com/roxanatera/firewall-lab-ubuntu",
    image: IMG_C,
    description: {
      es: "Laboratorio de firewall en Ubuntu: de una política abierta a una whitelist con iptables.",
      en: "Ubuntu firewall lab: from an open policy to a whitelist with iptables.",
    },
    outcome: {
      es: "Política de whitelist verificada con pruebas reales de ping y SSH.",
      en: "Whitelist policy verified with real ping and SSH tests.",
    },
    tags: ["iptables", "Ubuntu", "SSH"],
  },
  {
    area: "security",
    icon: "🛡️",
    name: "SystemGuard",
    repo: "https://github.com/roxanatera/systemguard",
    image: IMG_B,
    description: {
      es: "Herramienta Bash que audita servicios Linux en tiempo real.",
      en: "Bash tool that audits Linux services in real time.",
    },
    outcome: {
      es: "Detecta servicios activos, fallidos y sospechosos, y genera reportes automáticos con timestamp.",
      en: "Detects active, failed and suspicious services, generating automatic timestamped reports.",
    },
    tags: ["Bash", "Linux", "Systemd"],
  },
  {
    area: "security",
    icon: "🐧",
    name: "Linux Security Toolkit",
    repo: "https://github.com/roxanatera/linux-security-toolkit",
    image: IMG_C,
    description: {
      es: "Scripts Bash para automatizar tareas de seguridad en Linux.",
      en: "Bash scripts to automate Linux security tasks.",
    },
    outcome: {
      es: "Documentación de aprendizaje por módulo, con los scripts que se van construyendo.",
      en: "Learning documentation by module, with the scripts built along the way.",
    },
    tags: ["Bash", "Linux"],
  },
  {
    area: "security",
    icon: "🎯",
    name: "Bandit · OverTheWire",
    repo: "https://github.com/roxanatera/otw-bandit-writeups",
    image: IMG_B,
    description: {
      es: "Writeups de las wargames de Bandit: un concepto Unix por nivel.",
      en: "Writeups for the Bandit wargames: one Unix concept per level.",
    },
    outcome: {
      es: "Cada nivel documenta la técnica usada y el razonamiento detrás, incluidos los errores.",
      en: "Each level documents the technique used and the reasoning behind it, mistakes included.",
    },
    tags: ["Linux", "SSH", "Bash"],
  },
  {
    area: "dev",
    icon: "🌐",
    name: "Portfolio Personal",
    repo: "https://github.com/roxanatera/portfolio-cybersecurity",
    image: IMG_A,
    description: {
      es: "Este mismo portfolio, construido con Astro y Tailwind CSS.",
      en: "This very portfolio, built with Astro and Tailwind CSS.",
    },
    outcome: {
      es: "Web bilingüe y responsive, publicada en GitHub Pages con despliegue automático.",
      en: "Bilingual, responsive site published on GitHub Pages with automatic deployment.",
    },
    tags: ["Astro", "Tailwind", "GitHub Actions"],
  },
  {
    area: "dev",
    icon: "🛒",
    name: "E-commerce Backend",
    repo: "https://github.com/roxanatera/ecommercego-Backend",
    image: IMG_A,
    description: {
      es: "Backend de e-commerce en Go con AWS Lambda, Cognito, Secrets Manager y RDS.",
      en: "E-commerce backend in Go with AWS Lambda, Cognito, Secrets Manager and RDS.",
    },
    outcome: {
      es: "Backend serverless desplegado en AWS, con autenticación y gestión de secretos.",
      en: "Serverless backend deployed on AWS, with authentication and secrets management.",
    },
    tags: ["Go", "AWS Lambda", "Cognito", "RDS"],
  },
  {
    area: "dev",
    icon: "📦",
    name: "Order Management · Go",
    repo: "https://github.com/roxanatera/Backend-Order-Management-System-golang",
    image: IMG_B,
    description: {
      es: "Microservicio en Go para la gestión de pedidos, con arquitectura limpia.",
      en: "Go microservice for order management, with clean architecture.",
    },
    outcome: {
      es: "Diseño por capas con arquitectura limpia, pensado para escalar.",
      en: "Layered design with clean architecture, built to scale.",
    },
    tags: ["Go", "Microservicios", "Clean Architecture"],
  },
  {
    area: "dev",
    icon: "🐾",
    name: "veTrack",
    repo: "https://github.com/roxanatera/veTrack",
    image: IMG_C,
    description: {
      es: "Aplicación para gestionar pacientes de veterinaria.",
      en: "Application to manage veterinary patients.",
    },
    outcome: {
      es: "SPA con React y Vite, estilada con Tailwind CSS.",
      en: "SPA built with React and Vite, styled with Tailwind CSS.",
    },
    tags: ["React", "Vite", "Tailwind"],
  },
];
