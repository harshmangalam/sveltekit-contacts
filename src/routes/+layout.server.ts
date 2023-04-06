import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export async function load() {
	try {
		const contacts = await prisma.contact.findMany();
		return {
			contacts
		};
	} catch (error) {
		return fail(500);
	}
}
