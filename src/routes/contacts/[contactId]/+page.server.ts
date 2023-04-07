import { prisma } from '$lib/server/prisma';
import { error, fail, redirect, type ServerLoadEvent } from '@sveltejs/kit';

export async function load({ params }: ServerLoadEvent) {
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
	async deleteContact({ params }) {
		await prisma.contact.delete({
			where: {
				id: params.contactId
			}
		});

		throw redirect(303, '/');
	},

	async favorite({ params }) {
		const contact = await prisma.contact.findUnique({
			where: {
				id: params.contactId
			},
			select: {
				favorite: true
			}
		});
		await prisma.contact.update({
			where: {
				id: params.contactId
			},
			data: {
				favorite: !contact?.favorite
			}
		});
	}
};
