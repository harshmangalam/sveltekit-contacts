import { prisma } from '$lib/server/prisma.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import * as z from 'zod';
import type { inferFlattenedErrors } from 'zod';

const contactSchema = zfd.formData({
	firstName: zfd.text(),
	lastName: zfd.text(z.string().optional()),
	twitter: zfd.text(z.string().optional()),
	avatarUrl: zfd.text(z.string().optional()),
	notes: zfd.text(z.string().optional())
});

export async function load({ params, request }) {
	const contact = await prisma.contact.findUnique({
		where: {
			id: params.contactId
		}
	});

	if (!contact) {
		throw error(404, 'Contact not found');
	}

	return {
		contact
	};
}

export const actions = {
	async default({ params, request }) {
		const formData = await request.formData();
		const fields = Object.fromEntries(formData) as z.infer<typeof contactSchema>;
		const result = contactSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				fields,
				errors: (result.error.flatten() as inferFlattenedErrors<typeof contactSchema>).fieldErrors
			};
			return fail(422, data);
		}

		await prisma.contact.update({
			where: {
				id: params.contactId
			},
			data: fields
		});

		throw redirect(303, `/contacts/${params.contactId}`);
	}
};
