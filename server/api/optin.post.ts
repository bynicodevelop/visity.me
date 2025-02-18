import { readBody, createError } from 'h3';
import { z } from 'zod';
import { saveEmail } from '../services/EmailService';

const postSchema = z.object({
    email: z.string().email("L'email est invalide"),
    username: z.string()
        .min(3, { message: 'The username query parameter is required' })
        .refine((value) => value.startsWith('@'), { message: 'The username query parameter is required' }),
});

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const parsedBody = postSchema.parse(body);

        if (process.env.NODE_ENV !== 'production') {
            console.info("Requête reçue :", JSON.stringify(parsedBody));
        }

        await saveEmail(
            parsedBody.email, 
            parsedBody.username.slice(1)
        );

        return {
            status: 200,
            response: "L'email a été soumis avec succès.",
            data: null,
        };
    } catch (error) {
        console.error("Erreur :", error);
        throw createError({
            status: 400,
            statusMessage: "La requête est invalide",
        });
    }
});