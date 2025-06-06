
'use server';

import { suggestSkills as suggestSkillsFlow, type SuggestSkillsInput, type SuggestSkillsOutput } from '@/ai/flows/suggest-skills';

export async function getAISuggestedSkills(data: { projectDescriptions: string[] }): Promise<SuggestSkillsOutput> {
  if (!data.projectDescriptions || data.projectDescriptions.length === 0 || data.projectDescriptions.every(desc => desc.trim() === '')) {
    return { suggestedSkills: [] };
  }
  try {
    // Validate input against SuggestSkillsInput schema if necessary,
    // but here we assume data.projectDescriptions is already correct.
    const inputForFlow: SuggestSkillsInput = { projectDescriptions: data.projectDescriptions };
    const result = await suggestSkillsFlow(inputForFlow);
    return result;
  } catch (error) {
    console.error("Error getting AI suggested skills:", error);
    // It's better to throw the error or return a structured error response
    // For now, returning an error message in the skills array for simplicity.
    // In a real app, you might want a more robust error handling strategy.
    return { suggestedSkills: ["Error: Could not fetch suggestions at this time."] };
  }
}
