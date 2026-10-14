import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tech: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
