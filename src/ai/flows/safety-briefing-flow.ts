
'use server';
/**
 * @fileOverview A Genkit flow to generate safety briefing points for aviation operations.
 *
 * - generateSafetyBriefing - A function that handles the safety briefing generation.
 * - SafetyBriefingInput - The input type for the generateSafetyBriefing function.
 * - SafetyBriefingOutput - The return type for the generateSafetyBriefing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SafetyBriefingInputSchema = z.object({
  operationType: z.string().describe('The type of aviation operation for which to generate safety points. Example: "Patrulhamento Urbano Noturno"'),
});
export type SafetyBriefingInput = z.infer<typeof SafetyBriefingInputSchema>;

const SafetyBriefingOutputSchema = z.object({
  safetyPoints: z.array(z.string()).describe('A list of key safety considerations for the operation.'),
  disclaimer: z.string().describe('A disclaimer that these points are for informational purposes only.'),
});
export type SafetyBriefingOutput = z.infer<typeof SafetyBriefingOutputSchema>;

export async function generateSafetyBriefing(input: SafetyBriefingInput): Promise<SafetyBriefingOutput> {
  return safetyBriefingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'safetyBriefingPrompt',
  input: {schema: SafetyBriefingInputSchema},
  output: {schema: SafetyBriefingOutputSchema},
  prompt: `You are an expert aviation safety officer for a police aviation unit (CAVPM).
Your task is to provide critical safety briefing points for various types of operations.

Operation Type: {{{operationType}}}

Based on the operation type provided, generate a list of 3 to 5 critical safety briefing points.
Each point should be a short, clear, and actionable sentence.
Focus on aspects like:
- Pre-flight checks specific to the operation
- Crew coordination and communication
- Environmental hazards (weather, terrain, obstacles)
- Emergency procedures relevant to the operation
- Specific risks associated with the operation type

Additionally, provide a standard disclaimer: "Estes pontos são para fins informativos e de treinamento, e não substituem os manuais oficiais, checklists completos e o julgamento profissional da tripulação. Sempre siga os procedimentos operacionais padrão (POP) da unidade."
`,
});

const safetyBriefingFlow = ai.defineFlow(
  {
    name: 'safetyBriefingFlow',
    inputSchema: SafetyBriefingInputSchema,
    outputSchema: SafetyBriefingOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      // Fallback in case the model doesn't strictly adhere to the output schema
      // or if there's an unexpected issue.
      return {
        safetyPoints: ["Não foi possível gerar os pontos de segurança. Verifique o tipo de operação e tente novamente."],
        disclaimer: "Estes pontos são para fins informativos e de treinamento, e não substituem os manuais oficiais, checklists completos e o julgamento profissional da tripulação. Sempre siga os procedimentos operacionais padrão (POP) da unidade."
      };
    }
    return output;
  }
);
