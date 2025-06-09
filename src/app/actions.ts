
'use server';

import { suggestSkills as suggestSkillsFlow, type SuggestSkillsInput, type SuggestSkillsOutput } from '@/ai/flows/suggest-skills';
import { generateAvatar as generateAvatarFlow, type GenerateAvatarInput, type GenerateAvatarOutput } from '@/ai/flows/generate-avatar-flow';

export async function getAISuggestedSkills(data: { projectDescriptions: string[] }): Promise<SuggestSkillsOutput> {
  if (!data.projectDescriptions || data.projectDescriptions.length === 0 || data.projectDescriptions.every(desc => desc.trim() === '')) {
    return { suggestedSkills: [] };
  }
  try {
    const inputForFlow: SuggestSkillsInput = { projectDescriptions: data.projectDescriptions };
    const result = await suggestSkillsFlow(inputForFlow);
    return result;
  } catch (error) {
    console.error("Error getting AI suggested skills:", error);
    return { suggestedSkills: ["Error: Could not fetch suggestions at this time."] };
  }
}

export async function generateAIAvatar(data: { prompt: string }): Promise<GenerateAvatarOutput & { error?: string }> {
  if (!data.prompt || data.prompt.trim() === '') {
    return { imageDataUri: '', error: "Prompt cannot be empty." };
  }
  try {
    const inputForFlow: GenerateAvatarInput = { prompt: data.prompt };
    const result = await generateAvatarFlow(inputForFlow);
    return result;
  } catch (error) {
    console.error("Error generating AI avatar:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error during avatar generation.";
    return { imageDataUri: '', error: `Error: Could not generate avatar. ${errorMessage}` };
  }
}
