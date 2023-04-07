import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const search = url.searchParams.get('search');

	// if (search) {
	// 	const contacts = await prisma.contact.findMany({
	// 		where: {
	// 			OR: [
	// 				{
	// 					firstName: {
	// 						contains: search
	// 					}
	// 				},
	// 				{
	// 					lastName: {
	// 						contains: search
	// 					}
	// 				}
	// 			]
	// 		}
	// 	});

	// 	return {
	// 		contacts
	// 	};
	// }
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
			: undefined
	});
	return {
		contacts
	};
}
