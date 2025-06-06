// src/ai/flows/suggest-skills.ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting skills to add to a developer's portfolio based on their project descriptions.
 *
 * - suggestSkills - A function that takes project descriptions as input and returns a list of suggested skills.
 * - SuggestSkillsInput - The input type for the suggestSkills function.
 * - SuggestSkillsOutput - The return type for the suggestSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSkillsInputSchema = z.object({
  projectDescriptions: z
    .array(z.string())
    .describe('An array of project descriptions.'),
});
export type SuggestSkillsInput = z.infer<typeof SuggestSkillsInputSchema>;

const SuggestSkillsOutputSchema = z.object({
  suggestedSkills: z
    .array(z.string())
    .describe('An array of suggested skills based on the project descriptions.'),
});
export type SuggestSkillsOutput = z.infer<typeof SuggestSkillsOutputSchema>;

export async function suggestSkills(input: SuggestSkillsInput): Promise<SuggestSkillsOutput> {
  return suggestSkillsFlow(input);
}

const suggestSkillsPrompt = ai.definePrompt({
  name: 'suggestSkillsPrompt',
  input: {schema: SuggestSkillsInputSchema},
  output: {schema: SuggestSkillsOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant skills for a developer's portfolio based on their project descriptions.

  Given the following project descriptions, suggest a list of skills that the developer should include in their portfolio. Only include skills directly related to the project descriptions, do not add any additional skills. Respond as an array of strings.

  Project Descriptions:
  {{#each projectDescriptions}}
  - {{{this}}}
  {{/each}}`,
});

const suggestSkillsFlow = ai.defineFlow(
  {
    name: 'suggestSkillsFlow',
    inputSchema: SuggestSkillsInputSchema,
    outputSchema: SuggestSkillsOutputSchema,
  },
  async input => {
    const {output} = await suggestSkillsPrompt(input);
    return output!;
  }
);
