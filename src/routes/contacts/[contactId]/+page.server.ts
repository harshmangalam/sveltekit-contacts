import { prisma } from '$lib/server/prisma';
import { fail, redirect, type ServerLoadEvent } from '@sveltejs/kit';

export async function load({ params }: ServerLoadEvent) {
	try {
		const contact = await prisma.contact.findUnique({
			where: {
				id: params.contactId
			}
		});
		return {
			contact
		};
	} catch (error) {
		throw fail(500);
	}
}

export const actions = {
	async deleteContact({ params }) {
		await prisma.contact.delete({
			where: {
				id: params.contactId
			}
		});

		throw redirect(303, '/');
	}
};
