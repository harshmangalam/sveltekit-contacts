import type { Actions } from './$types';
import { zfd } from 'zod-form-data';
import { fail, redirect } from '@sveltejs/kit';

const contactSchema = zfd.formData({
	firstName: zfd.text(),
	lastName: zfd.text(),
	twitter: zfd.text(),
	avatar: zfd.text(),
	notes: zfd.text()
});

export const actions = {
	async default(event) {
		const { request } = event;
		const formData = await request.formData();

		const result = contactSchema.safeParse(formData);
		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			return fail(422, data);
		}

		// redirect the user
		throw redirect(303, '/');
	}
} satisfies Actions;
