
import type { LucideIcon } from 'lucide-react';

export const APP_NAME = "CAVPM Digital";
export const COMMAND_NAME = "Tinga Tava";
export const SUB_COMMAND_NAME = "David Silva";

export const HIERARCHY_LEVELS: string[] = [
  "Estagiário",
  "Co Piloto",
  "Comandante",
  "Comandante Sênior",
  "Instrutor",
  "Instrutor Chefe",
  "Comando de Unidade",
];

export interface DocumentInfo {
  id: string;
  title: string;
  slug: string;
  description: string;
  placeholderContent: string;
  documentUrl?: string; // Added document URL field
}

export const DOCUMENTS: DocumentInfo[] = [
  {
    id: "manual-conduta",
    title: "Manual de Conduta CAVPM",
    slug: "manual-de-conduta",
    description: "Diretrizes e normas de comportamento para os membros da CAVPM.",
    placeholderContent: "O Manual de Conduta da CAVPM estabelece os padrões de comportamento, ética e disciplina esperados de todos os membros da Coordenadoria de Aviação da Polícia Militar. Este documento serve como guia fundamental para assegurar a integridade, o profissionalismo e a excelência nas operações e no dia a dia da unidade. Abrange desde a apresentação pessoal, uso de uniformes, relações interpessoais, até a conduta em missões e o manuseio de equipamentos e informações sigilosas. A adesão estrita a este manual é crucial para manter a reputação e a eficiência da CAVPM.",
    documentUrl: "https://docs.google.com/document/d/1Y049q6zpxK3b_cljGbVFjlfjfcr9-bO_FFjcGC2i8P8/edit?usp=sharing"
  },
  {
    id: "manual-instrucao",
    title: "MANUAL DE INSTRUÇÃO TEÓRICA - CAVPM",
    slug: "manual-de-instrucao-teorica",
    description: "Material de estudo e referência para a formação teórica na CAVPM.",
    placeholderContent: "O Manual de Instrução Teórica da CAVPM é um compêndio abrangente de conhecimentos essenciais para a formação e capacitação contínua dos profissionais da aviação policial. Este manual cobre uma vasta gama de tópicos, incluindo, mas não se limitando a: aerodinâmica, meteorologia, navegação aérea, regulamentos de tráfego aéreo, procedimentos de emergência, fisiologia de voo, e especificações técnicas das aeronaves operadas pela CAVPM. Serve como base para o aprendizado teórico, complementando o treinamento prático e garantindo que todos os membros possuam o conhecimento necessário para operar com segurança e eficácia.",
    documentUrl: "https://docs.google.com/document/d/1_E6tyI1OT86_cyI8WtWegOj4khLPlnjA39L3ShswFwA/edit?usp=sharing"
  },
];

export const GOOGLE_FORM_URL = "https://forms.gle/JNC6fvDMG8TbVmV98";

export const HISTORY_PLACEHOLDER = `
A Coordenadoria de Aviação da Polícia Militar (CAVPM) da cidade de Grande Metrópole representa um marco na modernização e eficácia das forças de segurança locais. Fundada em 15 de março de 1998, a CAVPM nasceu da crescente necessidade de um suporte aéreo ágil e especializado para as diversas operações policiais em uma metrópole em franca expansão.

Nos seus primórdios, a unidade contava com apenas duas aeronaves modelo Esquilo AS350 e uma equipe de pilotos e mecânicos visionários, que enfrentaram o desafio de estruturar do zero os protocolos de operação e manutenção. As primeiras missões focavam em patrulhamento preventivo, acompanhamento tático e resgates em áreas de difícil acesso, demonstrando rapidamente o valor inestimável do componente aéreo.

Ao longo dos anos, a CAVPM expandiu sua frota, incorporando aeronaves mais modernas como o EC135 e o King Air C90, além de tecnologias de ponta em imageamento térmico e georreferenciamento. O treinamento contínuo e a especialização de seus membros tornaram a unidade uma referência nacional em aviação de segurança pública.

Dentre os marcos históricos, destacam-se a atuação heroica durante as enchentes de 2005, onde mais de 150 vidas foram salvas, e o suporte decisivo em grandes operações de combate ao crime organizado, que resultaram na desarticulação de importantes quadrilhas.

Hoje, a CAVPM é uma unidade de elite, equipada e preparada para os mais diversos cenários, reafirmando diariamente seu compromisso com a proteção da sociedade de Grande Metrópole, honrando o lema: "Voar para Servir e Proteger".
`;

export const REGULATIONS_PLACEHOLDER = `
Esta seção detalha os regulamentos internos que governam as operações, conduta e procedimentos da Coordenadoria de Aviação da Polícia Militar (CAVPM). Estes regulamentos são fundamentais para manter a ordem, a disciplina, a segurança e a eficiência em todas as atividades da unidade. O conhecimento e a adesão a estas normas são obrigatórios para todos os membros. Consulte os documentos específicos abaixo para informações detalhadas sobre cada área.
`;

export interface RegulationInfo {
  id: string;
  title: string;
  description: string;
}
export const INTERNAL_REGULATIONS: RegulationInfo[] = [
    { id: "reg1", title: "Regimento Interno Geral da CAVPM", description: "Normas gerais de funcionamento, estrutura organizacional e atribuições dos setores e membros." },
    { id: "reg2", title: "Manual de Operações Aéreas (MOP)", description: "Procedimentos padronizados para todas as missões aéreas, incluindo planejamento, execução e debriefing." },
    { id: "reg3", title: "Normas de Segurança de Voo (NSV)", description: "Diretrizes e protocolos para garantir a máxima segurança nas operações aéreas, prevenindo incidentes e acidentes." },
    { id: "reg4", title: "Código de Ética e Disciplina Aérea", description: "Princípios éticos, deveres e responsabilidades disciplinares específicas para os profissionais da aviação da CAVPM." },
];

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  keywords?: string; // for AI hint on icon if needed
}
