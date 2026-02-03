import { defineCollection, z } from 'astro:content';

const ajudaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    order: z.number().optional(),
    icon: z.string().optional(),
    updatedAt: z.string().optional(),
  }),
});

export const collections = {
  ajuda: ajudaCollection,
};
