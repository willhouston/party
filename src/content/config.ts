import { defineCollection, z } from 'astro:content';

const partyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  'party': partyCollection,
};
