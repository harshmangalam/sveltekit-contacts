import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const search = url.searchParams.get('search');

	const contacts = await prisma.contact.findMany({
		where: search?.trim().length
			? {
					OR: [
						{
							firstName: {
								contains: search
							}
						},
						{
							lastName: {
								contains: search
							}
						}
					]
			  }
			: undefined,
		select: {
			id: true,
			firstName: true,
			lastName: true
		}
	});
	return {
		contacts
	};
}
