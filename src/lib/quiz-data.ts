
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
        id: "q1_mc",
        text: "Qual o principal objetivo do Manual de Conduta da CAVPM?",
        options: [
          { id: "a", text: "Definir os horários de voo e missões." },
          { id: "b", text: "Estabelecer os padrões de comportamento, ética e disciplina para todos os membros." },
          { id: "c", text: "Listar as especificações técnicas das aeronaves da frota." },
          { id: "d", text: "Ensinar técnicas de pilotagem para iniciantes." },
        ],
        correctOptionId: "b",
        explanation: "O Manual de Conduta foca em comportamento, ética e disciplina para assegurar integridade e profissionalismo."
      },
      {
        id: "q2_mc",
        text: "Segundo o Manual de Conduta, a adesão às suas normas é:",
        options: [
          { id: "a", text: "Opcional para membros com mais de 5 anos de serviço." },
          { id: "b", text: "Recomendada, mas flexível dependendo da situação." },
          { id: "c", text: "Crucial para manter a reputação, eficiência e segurança da CAVPM." },
          { id: "d", text: "Aplicável apenas durante missões oficiais fora da base." },
        ],
        correctOptionId: "c",
        explanation: "A adesão estrita é vital para a integridade e o funcionamento da unidade."
      },
      {
        id: "q3_mc",
        text: "O Manual de Conduta abrange qual dos seguintes aspectos?",
        options: [
          { id: "a", text: "Apenas a conduta em missões de combate." },
          { id: "b", text: "Principalmente o uso de uniformes e apresentação pessoal." },
          { id: "c", text: "Manutenção de aeronaves e equipamentos de solo." },
          { id: "d", text: "Apresentação pessoal, relações interpessoais, conduta em missões e manuseio de informações sigilosas." },
        ],
        correctOptionId: "d",
        explanation: "O manual é abrangente, cobrindo diversos aspectos do comportamento e profissionalismo."
      },
      {
        id: "q4_mc",
        text: "O que é fundamental para assegurar a integridade e o profissionalismo na CAVPM, conforme o Manual de Conduta?",
        options: [
          { id: "a", text: "O número de horas de voo individuais." },
          { id: "b", text: "A antiguidade no posto." },
          { id: "c", text: "A adesão estrita às normas do Manual de Conduta." },
          { id: "d", text: "A participação em eventos sociais da unidade." },
        ],
        correctOptionId: "c",
        explanation: "O manual enfatiza que a adesão às suas diretrizes é essencial para a integridade e profissionalismo."
      },
    ],
  },
  {
    slug: "manual-de-instrucao-teorica",
    title: "Quiz: Manual de Instrução Teórica CAVPM",
    description: "Avalie seu entendimento sobre os conhecimentos teóricos essenciais para a aviação policial.",
    questions: [
      {
        id: "q1_mit",
        text: "Qual dos seguintes tópicos é coberto pelo Manual de Instrução Teórica da CAVPM?",
        options: [
          { id: "a", text: "Técnicas de interrogatório policial." },
          { id: "b", text: "Aerodinâmica, meteorologia e navegação aérea." },
          { id: "c", text: "História da Polícia Militar do Estado de São Paulo." },
          { id: "d", text: "Manutenção de armamento leve." },
        ],
        correctOptionId: "b",
        explanation: "O manual foca em conhecimentos aeronáuticos como aerodinâmica, meteorologia e navegação."
      },
      {
        id: "q2_mit",
        text: "O Manual de Instrução Teórica serve como base para:",
        options: [
          { id: "a", text: "O treinamento físico dos membros da CAVPM." },
          { id: "b", text: "A avaliação psicológica para ingresso na unidade." },
          { id: "c", text: "O aprendizado teórico, complementando o treinamento prático em voo." },
          { id: "d", text: "As normas de conduta social dentro da unidade." },
        ],
        correctOptionId: "c",
        explanation: "O objetivo do manual é fornecer a base teórica que complementa a prática."
      },
      {
        id: "q3_mit",
        text: "Conforme o conteúdo do Manual de Instrução Teórica, qual o propósito principal deste documento?",
        options: [
          { id: "a", text: "Garantir que todos os membros possuam conhecimento para operar com segurança e eficácia." },
          { id: "b", text: "Definir os padrões de comunicação com a imprensa." },
          { id: "c", text: "Estabelecer o código de uniformes da CAVPM." },
          { id: "d", text: "Servir como um guia de referência rápida para procedimentos de emergência apenas." },
        ],
        correctOptionId: "a",
        explanation: "O manual visa garantir que os membros tenham o conhecimento necessário para operar de forma segura e eficaz."
      },
      {
        id: "q4_mit",
        text: "Além de aerodinâmica e meteorologia, que outro tema é fundamental no Manual de Instrução Teórica?",
        options:
        [
          { id: "a", text: "Técnicas de sobrevivência na selva." },
          { id: "b", text: "Direito penal militar." },
          { id: "c", text: "Regulamentos de tráfego aéreo e procedimentos de emergência." },
          { id: "d", text: "História da aviação mundial." },
        ],
        correctOptionId: "c",
        explanation: "Regulamentos de tráfego aéreo e procedimentos de emergência são cruciais para a formação teórica."
      }
    ],
  },
];

    