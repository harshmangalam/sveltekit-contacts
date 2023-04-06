import type { Actions } from './$types';
import { zfd } from 'zod-form-data';
import { fail, redirect } from '@sveltejs/kit';
import type { inferFlattenedErrors } from 'zod';
import * as z from 'zod';
import { prisma } from '$lib/server/prisma';

const contactSchema = zfd.formData({
	firstName: zfd.text(),
	lastName: zfd.text(z.string().optional()),
	twitter: zfd.text(z.string().optional()),
	avatarUrl: zfd.text(z.string().optional()),
	notes: zfd.text(z.string().optional())
});

export const actions = {
	async default({ request }) {
		const formData = await request.formData();
		const fields = Object.fromEntries(formData) as z.infer<typeof contactSchema>;
		const result = contactSchema.safeParse(formData);

		console.log(JSON.stringify(result));
		if (!result.success) {
			const data = {
				fields,
				errors: (result.error.flatten() as inferFlattenedErrors<typeof contactSchema>).fieldErrors
			};
			return fail(422, data);
		}

		const contact = await prisma.contact.create({
			data: fields
		});

		throw redirect(303, `/contacts/${contact.id}`);
	}
} satisfies Actions;
