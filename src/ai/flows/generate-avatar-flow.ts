
'use server';
/**
 * @fileOverview A Genkit flow to generate avatar images.
 *
 * - generateAvatarFlow - A function that takes a prompt and returns an image data URI.
 * - GenerateAvatarInput - The input type for the generateAvatarFlow.
 * - GenerateAvatarOutput - The return type for the generateAvatarFlow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateAvatarInputSchema = z.object({
  prompt: z.string().describe('The text prompt to generate the avatar from.'),
});
export type GenerateAvatarInput = z.infer<typeof GenerateAvatarInputSchema>;

const GenerateAvatarOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "The generated avatar image as a data URI. Format: 'data:image/png;base64,<encoded_data>'."
    ),
});
export type GenerateAvatarOutput = z.infer<typeof GenerateAvatarOutputSchema>;

export async function generateAvatar(input: GenerateAvatarInput): Promise<GenerateAvatarOutput> {
  return generateAvatarFlow(input);
}

// Note: Direct prompt definition is not used here as ai.generate is called directly.
// If complex prompt templating were needed, ai.definePrompt would be used.

const generateAvatarFlow = ai.defineFlow(
  {
    name: 'generateAvatarFlow',
    inputSchema: GenerateAvatarInputSchema,
    outputSchema: GenerateAvatarOutputSchema,
  },
  async (input: GenerateAvatarInput) => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp', // Specific model for image generation
      prompt: input.prompt,
      config: {
        responseModalities: ['TEXT', 'IMAGE'], // Must include IMAGE
        // Optional: Add safety settings if needed, e.g.
        // safetySettings: [
        //   { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_LOW_AND_ABOVE' },
        // ],
      },
    });

    if (!media || !media.url) {
      throw new Error('Image generation failed or returned no media URL.');
    }

    return {imageDataUri: media.url};
  }
);
