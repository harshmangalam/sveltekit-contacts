import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export async function load({ params }) {
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
