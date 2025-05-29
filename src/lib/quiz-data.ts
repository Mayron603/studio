
export interface QuizQuestionOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizQuestionOption[];
  correctOptionId: string;
  explanation?: string;
}

export interface QuizData {
  slug: string;
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export const QUIZZES_DATA: QuizData[] = [
  {
    slug: "manual-de-conduta",
    title: "Quiz: Manual de Conduta CAVPM",
    description: "Teste seus conhecimentos sobre as diretrizes e normas de comportamento da CAVPM.",
    questions: [
      {
        id: "mc_q1",
        text: "O que o Manual de Conduta da CAVPM estabelece primordialmente?",
        options: [
          { id: "a", text: "Horários de voo e planejamento de missões." },
          { id: "b", text: "Padrões de comportamento, ética e disciplina para todos os membros." },
          { id: "c", text: "Rotinas de manutenção das aeronaves e checklist de equipamentos." },
          { id: "d", text: "Protocolos de comunicação externa e relações com a imprensa." },
        ],
        correctOptionId: "b",
        explanation: "O Manual de Conduta foca em estabelecer padrões de comportamento, ética e disciplina para todos os membros, conforme descrito em seu propósito."
      },
      {
        id: "mc_q2",
        text: "Para que serve o Manual de Conduta como guia fundamental dentro da CAVPM?",
        options: [
          { id: "a", text: "Para o planejamento de rotas aéreas táticas e estratégicas." },
          { id: "b", text: "Para assegurar a integridade, o profissionalismo e a excelência nas operações e no dia a dia." },
          { id: "c", text: "Para definir os critérios de promoção e progressão de carreira dos oficiais." },
          { id: "d", text: "Para detalhar os manuais técnicos das diferentes aeronaves da frota." },
        ],
        correctOptionId: "b",
        explanation: "Ele serve como guia fundamental para assegurar a integridade, o profissionalismo e a excelência nas operações e no cotidiano da unidade."
      },
      {
        id: "mc_q3",
        text: "Qual dos seguintes tópicos NÃO é diretamente abordado pelo Manual de Conduta, de acordo com o resumo fornecido?",
        options: [
          { id: "a", text: "Apresentação pessoal e o correto uso de uniformes." },
          { id: "b", text: "As relações interpessoais entre os membros da unidade." },
          { id: "c", text: "A conduta esperada durante a execução de missões aéreas." },
          { id: "d", text: "As especificações técnicas detalhadas dos motores das aeronaves." },
        ],
        correctOptionId: "d",
        explanation: "O manual abrange apresentação pessoal, relações interpessoais, conduta em missões e manuseio de informações, mas não especificações técnicas de aeronaves."
      },
      {
        id: "mc_q4",
        text: "Segundo o resumo, por que a adesão estrita ao Manual de Conduta é considerada crucial para a CAVPM?",
        options: [
          { id: "a", text: "Para aumentar o número de horas de voo individuais dos pilotos." },
          { id: "b", text: "Para garantir a obtenção de bonificações salariais por desempenho." },
          { id: "c", text: "Para manter a reputação e a eficiência da CAVPM perante a sociedade e o comando." },
          { id: "d", text: "Para simplificar os processos de elaboração de relatórios de missão." },
        ],
        correctOptionId: "c",
        explanation: "A adesão estrita ao manual é crucial para manter a reputação e a eficiência da CAVPM."
      }
    ],
  },
  {
    slug: "manual-de-instrucao-teorica",
    title: "Quiz: Manual de Instrução Teórica CAVPM",
    description: "Avalie seu entendimento sobre os conhecimentos teóricos essenciais para a aviação policial.",
    questions: [
      {
        id: "mit_q1",
        text: "O Manual de Instrução Teórica é descrito como um compêndio de conhecimentos essenciais para qual finalidade principal?",
        options: [
          { id: "a", text: "Apenas para pilotos que já possuem experiência de voo anterior." },
          { id: "b", text: "Para a formação e capacitação contínua dos profissionais da aviação policial." },
          { id: "c", text: "Exclusivamente para a equipe de mecânicos e manutenção de aeronaves." },
          { id: "d", text: "Para o público externo que deseja conhecer mais sobre as operações da CAVPM." },
        ],
        correctOptionId: "b",
        explanation: "O manual é um compêndio abrangente de conhecimentos essenciais para a formação e capacitação contínua dos profissionais da aviação policial."
      },
      {
        id: "mit_q2",
        text: "Qual dos seguintes temas NÃO é listado como parte do conteúdo coberto pelo Manual de Instrução Teórica, segundo o resumo?",
        options: [
          { id: "a", text: "Aerodinâmica e princípios de meteorologia aplicada à aviação." },
          { id: "b", text: "Regulamentos de tráfego aéreo e procedimentos de emergência." },
          { id: "c", text: "Táticas avançadas de combate terrestre e defesa pessoal." },
          { id: "d", text: "Fisiologia de voo e especificações técnicas das aeronaves operadas." },
        ],
        correctOptionId: "c",
        explanation: "O manual cobre temas aeronáuticos como aerodinâmica, meteorologia, regulamentos, fisiologia de voo e especificações das aeronaves, mas não táticas de combate terrestre."
      },
      {
        id: "mit_q3",
        text: "O Manual de Instrução Teórica serve como base para o aprendizado teórico, complementando qual outro aspecto fundamental da formação na CAVPM?",
        options: [
          { id: "a", text: "O programa de condicionamento físico e resistência dos membros." },
          { id: "b", text: "O treinamento prático de voo e simulações de missão." },
          { id: "c", text: "As atividades administrativas e de gestão da unidade." },
          { id: "d", text: "As normas de relações públicas e comunicação com a imprensa." },
        ],
        correctOptionId: "b",
        explanation: "Serve como base para o aprendizado teórico, complementando o treinamento prático."
      },
      {
        id: "mit_q4",
        text: "Qual o objetivo final do conhecimento fornecido pelo Manual de Instrução Teórica aos membros da CAVPM?",
        options: [
          { id: "a", text: "Permitir que os membros acumulem um maior número de horas de voo em menos tempo." },
          { id: "b", text: "Garantir que todos os membros possuam o conhecimento necessário para operar com segurança e eficácia." },
          { id: "c", text: "Qualificar os membros exclusivamente para funções de instrução e ensino dentro da unidade." },
          { id: "d", text: "Reduzir significativamente os custos operacionais com manutenção das aeronaves." },
        ],
        correctOptionId: "b",
        explanation: "O objetivo é garantir que todos os membros possuam o conhecimento necessário para operar com segurança e eficácia."
      }
    ],
  },
];
