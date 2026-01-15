import { defineConfig } from "tinacms";

const commonFields = [
    { type: "string" as const, name: "title", label: "Title", isTitle: true, required: true },
    { type: "string" as const, name: "description", label: "Description" },
    { type: "datetime" as const, name: "date", label: "Date" },
    { type: "number" as const, name: "order", label: "Order" },
    { type: "image" as const, name: "image", label: "Image" },
    { type: "image" as const, name: "backgroundImage", label: "Background Image" },
    { type: "boolean" as const, name: "openLinksInNewTab", label: "Open Links in New Tab" },
    { type: "rich-text" as const, name: "body", label: "Body", isBody: true },
];

export default defineConfig({
    branch:
        process.env.TINA_BRANCH ||
        process.env.VERCEL_GIT_COMMIT_REF ||
        process.env.HEAD ||
        "main",
    clientId: process.env.TINA_CLIENT_ID || "dummy-client-id",
    token: process.env.TINA_TOKEN || "dummy-token",
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "uploads",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "bio",
                label: "Bio / Homepage",
                path: "src/content/bio",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title" },
                    { type: "string", name: "role", label: "Role" },
                    { type: "image", name: "image", label: "Profile Image" },
                    { type: "image", name: "backgroundImage", label: "Background Image" },
                    { type: "string", name: "email", label: "Email" },
                    { type: "string", name: "address", label: "Physical Address", ui: { component: "textarea" } },
                    {
                        type: "object",
                        name: "social",
                        label: "Social Links",
                        list: true,
                        fields: [
                            { type: "string", name: "label", label: "Platform Name" },
                            { type: "string", name: "url", label: "URL" },
                        ],
                    },
                    { type: "rich-text", name: "body", label: "Body", isBody: true },
                ],
            },
            {
                name: "research",
                label: "Research",
                path: "src/content/research",
                format: "md",
                fields: commonFields,
                ui: {
                    allowedActions: {
                        create: true,
                        delete: true,
                    },
                    // @ts-ignore
                    itemProps: (item: any) => {
                        return { label: item?.data?.order ? `${item.data.order}. ${item.data.title}` : item?.data?.title }
                    },
                },
            },
            {
                name: "activism",
                label: "Activism",
                path: "src/content/activism",
                format: "md",
                fields: commonFields,
                ui: {
                    // @ts-ignore
                    itemProps: (item: any) => {
                        return { label: item?.data?.order ? `${item.data.order}. ${item.data.title}` : item?.data?.title }
                    },
                },
            },
            {
                name: "outreach",
                label: "Outreach and Public Engagement",
                path: "src/content/outreach",
                format: "md",
                fields: commonFields,
                ui: {
                    // @ts-ignore
                    itemProps: (item: any) => {
                        return { label: item?.data?.order ? `${item.data.order}. ${item.data.title}` : item?.data?.title }
                    },
                },
            },
            {
                name: "services",
                label: "Research Services",
                path: "src/content/services",
                format: "md",
                fields: commonFields,
                ui: {
                    // @ts-ignore
                    itemProps: (item: any) => {
                        return { label: item?.data?.order ? `${item.data.order}. ${item.data.title}` : item?.data?.title }
                    },
                },
            },

            {
                name: "contact",
                label: "Contact Page",
                path: "src/content/contact",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "image", name: "backgroundImage", label: "Background Image" },
                ],
            },
            {
                name: "cv",
                label: "CV",
                path: "src/content/cv",
                format: "md",
                fields: commonFields,
                ui: {
                    allowedActions: {
                        create: true,
                        delete: true,
                    },
                },
            },
            {
                name: "publications",
                label: "Publications",
                path: "src/content/publications",
                format: "md",
                fields: [
                    { type: "string", name: "title", label: "Title", isTitle: true, required: true },
                    { type: "string", name: "venue", label: "Venue" },
                    { type: "number", name: "year", label: "Year" },
                    { type: "string", name: "url", label: "URL" },
                    { type: "image" as const, name: "backgroundImage", label: "Background Image" },
                    {
                        type: "string",
                        name: "authors",
                        label: "Authors",
                        list: true,
                    },
                    { type: "rich-text", name: "body", label: "Abstract", isBody: true },
                ],
                ui: {
                    allowedActions: {
                        create: true,
                        delete: true,
                    },
                },
            },
        ],
    },
});
