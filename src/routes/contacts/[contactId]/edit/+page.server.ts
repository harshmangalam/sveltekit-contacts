import { prisma } from '$lib/server/prisma.js';
import { fail } from '@sveltejs/kit';
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
		return fail(404, {
			message: 'Contact not found'
		});
	}

	return {
		contact
	};
}
