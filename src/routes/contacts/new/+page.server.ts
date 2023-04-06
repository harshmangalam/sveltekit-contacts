import type { Actions } from './$types';
import { zfd } from 'zod-form-data';
import { fail, redirect } from '@sveltejs/kit';
import type { inferFlattenedErrors } from 'zod';
import * as z from 'zod';
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
		const result = contactSchema.safeParse(formData);

		console.log(JSON.stringify(result));
		if (!result.success) {
			const data = {
				fields: Object.fromEntries(formData) as z.infer<typeof contactSchema>,
				errors: (result.error.flatten() as inferFlattenedErrors<typeof contactSchema>).fieldErrors
			};
			return fail(422, data);
		}

		throw redirect(303, '/');
	}
} satisfies Actions;
