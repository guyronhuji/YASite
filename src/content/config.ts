import { defineCollection, z } from 'astro:content';
// Forcing rebuild of content collections
// Update: Services added

const bioCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z.string().optional(),
        role: z.string().optional(),
        email: z.string().optional(),
        address: z.string().optional(),
        social: z.array(z.object({
            label: z.string().optional(),
            url: z.string().optional(),
        })).optional(),
        backgroundImage: z.string().optional(),
    }),
});

const commonCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.coerce.date().optional(),
        order: z.number().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        backgroundImage: z.string().optional(),
    }),
});

const publicationsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        venue: z.string().optional(),
        year: z.number().optional(),
        url: z.string().optional(),
        authors: z.array(z.string()).optional(),
        backgroundImage: z.string().optional(),
    })
})

const contactCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        backgroundImage: z.string().optional(),
    })
});

const sectionsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        backgroundImage: z.string().optional(),
    }),
});

export const collections = {
    'bio': bioCollection,
    'research': commonCollection,
    'activism': commonCollection,
    'outreach': commonCollection,
    'services': commonCollection,
    'cv': commonCollection,
    'contact': contactCollection,
    'publications': publicationsCollection,
};
