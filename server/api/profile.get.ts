import { getQuery } from 'h3';
import { z } from 'zod';
import type { Component } from '~/types/component';
import { getProfile } from '~/server/services/ProfileService';
import { info, error } from 'firebase-functions/logger';

const querySchema = z.object({
    username: z.string()
        .min(3, { message: 'The username query parameter is required' })
        .refine((value) => value.startsWith('@'), { message: 'The username query parameter is required' })
});

export default defineEventHandler<{ query: { username: string } }>(async (event): Promise<{ components: Component[] }> => {
    try {
        const { username: slug } = querySchema.parse(getQuery(event));

        const profile = await getProfile(slug.slice(1));

        info("Profile found", profile);

        if (!profile) {
            throw createError({
                status: 404,
                statusMessage: 'The user does not exist'
            });
        }

        return profile
    } catch (e) {
        error("Error:", e);
        throw createError({
            status: 404,
            statusMessage: e instanceof z.ZodError ? e.errors[0].message : "The request is invalid"
        });
    }
});