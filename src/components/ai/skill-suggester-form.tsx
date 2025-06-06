
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAISuggestedSkills } from '@/app/actions';
import { Loader2, Lightbulb } from 'lucide-react';

const formSchema = z.object({
  projectDescriptions: z.string().min(10, {
    message: "Please enter project descriptions (at least 10 characters).",
  }),
});

export default function AISkillSuggesterForm() {
  const [suggestedSkills, setSuggestedSkills] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDescriptions: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setSuggestedSkills([]);

    const descriptionsArray = values.projectDescriptions
      .split('\n')
      .map(desc => desc.trim())
      .filter(desc => desc.length > 0);

    if (descriptionsArray.length === 0) {
      setError("Please provide at least one project description.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await getAISuggestedSkills({ projectDescriptions: descriptionsArray });
      if (result.suggestedSkills.some(skill => skill.startsWith("Error:"))) {
        setError(result.suggestedSkills[0]);
        setSuggestedSkills([]);
      } else {
        setSuggestedSkills(result.suggestedSkills);
      }
    } catch (e) {
      setError("An unexpected error occurred. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-accent" />
          <CardTitle className="font-headline text-2xl text-primary">AI Skill Suggester</CardTitle>
        </div>
        <CardDescription>
          Describe your projects (one per line) and let AI suggest relevant skills to highlight in your portfolio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="projectDescriptions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Project Descriptions</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., Developed a full-stack e-commerce platform using React, Node.js, and MongoDB..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Suggesting Skills...
                </>
              ) : (
                "Get Skill Suggestions"
              )}
            </Button>
          </form>
        </Form>

        {error && (
          <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-md">
            <p>{error}</p>
          </div>
        )}

        {suggestedSkills.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-lg text-foreground mb-3">Suggested Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1 bg-secondary/80 text-secondary-foreground">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
