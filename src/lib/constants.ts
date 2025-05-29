
import type { LucideIcon } from 'lucide-react';
import { FileText, Gavel, ClipboardEdit, LayoutDashboard, ScrollText, Users, Plane, Image as ImageIcon, GraduationCap, Youtube, ClipboardCheck, Type, Contact, Target, ShieldAlert } from 'lucide-react';

export const APP_NAME = "CAVPM";
export const COMMAND_NAME = "Tinga Tava";
export const SUB_COMMAND_NAME = "David Silva";

export const HIERARCHY_LEVELS: string[] = [
  "Comando de Unidade",
  "Instrutor Chefe",
  "Instrutor",
  "Comandante Sênior",
  "Comandante",
  "Co Piloto",
  "Estagiário",
];

export interface DocumentInfo {
  id: string;
  title: string;
  slug: string;
  description: string;
  placeholderContent: string;
  documentUrl?: string;
}

export const DOCUMENTS: DocumentInfo[] = [
  {
    id: "manual-conduta",
    title: "Manual de Conduta - CAVPM",
    slug: "manual-de-conduta",
    description: "Diretrizes e normas de comportamento para os membros da CAVPM.",
    placeholderContent: "O Manual de Conduta da CAVPM estabelece os padrões de comportamento, ética e disciplina esperados de todos os membros do Comando de Aviação da Polícia Militar do Estado de São Paulo. Este documento serve como guia fundamental para assegurar a integridade, o profissionalismo e a excelência nas operações e no dia a dia da unidade. Abrange desde a apresentação pessoal, uso de uniformes, relações interpessoais, até a conduta em missões e o manuseio de equipamentos e informações sigilosas. A adesão estrita a este manual é crucial para manter a reputação e a eficiência da CAVPM.",
    documentUrl: "https://docs.google.com/document/d/1Y049q6zpxK3b_cljGbVFjlfjfcr9-bO_FFjcGC2i8P8/edit?usp=sharing"
  },
  {
    id: "manual-instrucao",
    title: "Manual de Instrução Teórica - CAVPM",
    slug: "manual-de-instrucao-teorica",
    description: "Material de estudo e referência para a formação teórica na CAVPM.",
    placeholderContent: "O Manual de Instrução Teórica da CAVPM é um compêndio abrangente de conhecimentos essenciais para a formação e capacitação contínua dos profissionais da aviação policial. Este manual cobre uma vasta gama de tópicos, incluindo, mas não se limitando a: aerodinâmica, meteorologia, navegação aérea, regulamentos de tráfego aéreo, procedimentos de emergência, fisiologia de voo, e especificações técnicas das aeronaves operadas pela CAVPM. Serve como base para o aprendizado teórico, complementando o treinamento prático e garantindo que todos os membros do Comando de Aviação da Polícia Militar do Estado de São Paulo possuam o conhecimento necessário para operar com segurança e eficácia.",
    documentUrl: "https://docs.google.com/document/d/1_E6tyI1OT86_cyI8WtWegOj4khLPlnjA39L3ShswFwA/edit?usp=sharing"
  },
];

export const GOOGLE_FORM_URL = "https://forms.gle/JNC6fvDMG8TbVmV98";

export const HISTORY_PLACEHOLDER = `
O Comando de Aviação da Polícia Militar do Estado de São Paulo (CAVPM) da cidade de Grande Metrópole representa um marco na modernização e eficácia das forças de segurança locais. Fundada em 15 de março de 1998, a CAVPM nasceu da crescente necessidade de um suporte aéreo ágil e especializado para as diversas operações policiais no Estado de São Paulo, uma região em franca expansão.

Nos seus primórdios, a unidade contava com apenas duas aeronaves modelo Esquilo AS350 e uma equipe de pilotos e mecânicos visionários, que enfrentaram o desafio de estruturar do zero os protocolos de operação e manutenção. As primeiras missões focavam em patrulhamento preventivo, acompanhamento tático e resgates em áreas de difícil acesso, demonstrando rapidamente o valor inestimável do componente aéreo.

Ao longo dos anos, a CAVPM expandiu sua frota, incorporando aeronaves mais modernas como o EC135 e o King Air C90, além de tecnologias de ponta em imageamento térmico e georreferenciamento. O treinamento contínuo e a especialização de seus membros tornaram a unidade uma referência nacional em aviação de segurança pública.

Dentre os marcos históricos, destacam-se a atuação heroica durante as enchentes de 2005, onde mais de 150 vidas foram salvas, e o suporte decisivo em grandes operações de combate ao crime organizado, que resultaram na desarticulação de importantes quadrilhas.

Hoje, a CAVPM é uma unidade de elite, equipada e preparada para os mais diversos cenários, reafirmando diariamente seu compromisso com a proteção da sociedade do Estado de São Paulo, honrando o lema: "Voar para Servir e Proteger".
`;

export const REGULATIONS_PLACEHOLDER = `
Esta seção detalha os regulamentos internos que governam as operações, conduta e procedimentos do Comando de Aviação da Polícia Militar do Estado de São Paulo (CAVPM). Estes regulamentos são fundamentais para manter a ordem, a disciplina, a segurança e a eficiência em todas as atividades da unidade. O conhecimento e a adesão a estas normas são obrigatórios para todos os membros. Consulte os documentos específicos abaixo para informações detalhadas sobre cada área.
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
  keywords?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { href: "/", label: "Início", icon: LayoutDashboard },
  { href: "/historia", label: "História", icon: ScrollText },
  { href: "/regulamentos", label: "Regulamentos", icon: Gavel },
  { href: "/hierarquia", label: "Hierarquia", icon: Users },
  { href: "/documentos", label: "Documentos", icon: FileText },
  { href: "/frota", label: "Frota", icon: Plane },
  { href: "/formulario", label: "Formulário", icon: ClipboardEdit },
  { href: "/galeria", label: "Galeria", icon: ImageIcon },
  { href: "/treinamentos", label: "Treinamentos", icon: GraduationCap },
  { href: "/safety-briefing", label: "Briefing de Segurança", icon: ShieldAlert },
];


export interface QuickLinkItem {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const QUICK_LINKS: QuickLinkItem[] = [
  {
    id: "documentos",
    href: "/documentos",
    title: "Documentos Oficiais",
    description: "Acesse manuais e diretrizes importantes.",
    icon: FileText,
  },
  {
    id: "regulamentos",
    href: "/regulamentos",
    title: "Regulamentos",
    description: "Consulte as normas e procedimentos internos.",
    icon: Gavel,
  },
  {
    id: "formulario",
    href: "/formulario",
    title: "Formulário de Inscrição",
    description: "Inscreva-se para o processo seletivo.",
    icon: ClipboardEdit,
  },
];

export interface AircraftInfo {
  id: string;
  name: string;
  type: string;
  description: string;
  specifications: { label: string; value: string }[];
}

export const FLEET_DATA: AircraftInfo[] = [
  {
    id: "as350",
    name: "Helibras AS350 Esquilo",
    type: "Helicóptero Utilitário Leve",
    description: "Versátil e ágil, o AS350 Esquilo é amplamente utilizado para patrulhamento, observação, transporte rápido e missões de apoio. Sua confiabilidade o torna a peça chave na frota da CAVPM, operando com excelência em diversas condições.",
    specifications: [
      { label: "Capacidade", value: "1 Piloto + 3 Tripulantes (Copiloto, Atirador Delta, Atirador Echo)" },
      { label: "Velocidade de Cruzeiro", value: "245 km/h (132 kt)" },
      { label: "Autonomia", value: "Aprox. 3 horas / 660 km" },
      { label: "Motor", value: "Turbomeca Arriel 2B" },
      { label: "Peso Máx. Decolagem", value: "2.250 kg (4.960 lb)" },
      { label: "Função Principal", value: "Multimissão (Patrulha, Resgate, Transporte)" },
    ],
  },
];


export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  aiHint: string; 
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'img1', src: 'https://source.unsplash.com/featured/600x400/?helicopter,city,police', alt: 'Aeronave em patrulha sobre a cidade', title: 'Patrulha Aérea Urbana', description: 'Nossas aeronaves em constante vigilância sobre a metrópole, garantindo a segurança.', aiHint: 'helicopter city' },
  { id: 'img2', src: 'https://source.unsplash.com/featured/600x400/?police,training,tactical', alt: 'Equipe de pilotos e tripulantes em treinamento tático', title: 'Treinamento de Equipe', description: 'Capacitação contínua para missões complexas e de alto risco.', aiHint: 'police training' },
  { id: 'img3', src: 'https://source.unsplash.com/featured/600x400/?helicopter,forest,aerial', alt: 'Helicóptero AS350 Esquilo sobrevoando área de mata', title: 'Operação em Área Remota', description: 'Cobertura aérea estratégica em diversas paisagens do estado.', aiHint: 'helicopter forest' },
  { id: 'img4', src: 'https://source.unsplash.com/featured/600x400/?rescue,helicopter,medical', alt: 'Aeronave da CAVPM em missão de resgate aeromédico', title: 'Missão de Resgate Aeromédico', description: 'Agilidade e precisão no salvamento e transporte de vidas.', aiHint: 'rescue helicopter' },
  { id: 'img5', src: 'https://source.unsplash.com/featured/600x400/?aircraft,maintenance,helicopter', alt: 'Mecânico realizando manutenção preventiva em helicóptero', title: 'Manutenção Preventiva', description: 'Garantindo a segurança e operacionalidade da frota com rigor técnico.', aiHint: 'aircraft maintenance' },
  { id: 'img6', src: 'https://source.unsplash.com/featured/600x400/?cockpit,night,aviation', alt: 'Vista da cabine do piloto durante um voo noturno', title: 'Visão Noturna do Cockpit', description: 'A perspectiva do piloto em missões durante o período noturno.', aiHint: 'cockpit night' },
];


export interface TrainingMaterial {
  id: string;
  title: string;
  type: 'document' | 'video' | 'quiz' | 'instruction';
  description: string;
  content?: string; 
  url?: string; 
  icon: LucideIcon;
  quizSlug?: string; 
}

export interface TrainingCategory {
  id: string;
  title: string;
  description: string;
  materials: TrainingMaterial[];
}

export const TRAINING_DATA: TrainingCategory[] = [
  {
    id: 'basico',
    title: 'Módulo Básico de Pilotagem e Conduta',
    description: 'Fundamentos essenciais e normas de comportamento.',
    materials: [
      { id: 'bas_doc_01', title: 'Manual de Conduta - CAVPM', type: 'document', description: 'Normas de comportamento e ética.', url: '/documentos/manual-de-conduta', icon: FileText },
      { id: 'bas_quiz_01', title: 'Quiz: Manual de Conduta', type: 'quiz', description: 'Teste seus conhecimentos sobre o Manual de Conduta.', icon: ClipboardCheck, quizSlug: 'manual-de-conduta' },
      { id: 'bas_doc_02', title: 'Manual de Instrução Teórica - CAVPM', type: 'document', description: 'Conhecimentos teóricos essenciais.', url: '/documentos/manual-de-instrucao-teorica', icon: FileText },
      { id: 'bas_quiz_02', title: 'Quiz: Instrução Teórica Básica', type: 'quiz', description: 'Teste seus conhecimentos sobre a Instrução Teórica.', icon: ClipboardCheck, quizSlug: 'manual-de-instrucao-teorica' },
    ]
  }
];

export interface FormSubmissionData {
  fullName: string;
  email: string;
  birthDate: Date;
  areaOfInterest: string;
  message: string;
  agreedToTerms: boolean;
}

export const OPERATION_TYPES = [
  { value: "patrulhamento_urbano_diurno", label: "Patrulhamento Urbano Diurno" },
  { value: "patrulhamento_urbano_noturno", label: "Patrulhamento Urbano Noturno" },
  { value: "busca_salvamento_mata", label: "Busca e Salvamento em Mata" },
  { value: "apoio_operacoes_especiais", label: "Apoio a Operações Especiais" },
  { value: "transporte_tropa", label: "Transporte de Tropa" },
  { value: "voo_reconhecimento", label: "Voo de Reconhecimento" },
  { value: "resgate_aeromedico", label: "Resgate Aeromédico" },
  { value: "combate_incendio_florestal", label: "Combate a Incêndio Florestal (com Bambi Bucket)" },
];
    
