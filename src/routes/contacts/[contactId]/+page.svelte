<script lang="ts">
	import { enhance } from '$app/forms';
	import DeleteContact from './delete-contact.svelte';
	export let data;
</script>

<section class="p-6">
	<div class="flex flex-col items-center text-center md:text-start gap-4 md:flex-row">
		<div class="flex-none">
			<img
				class="w-36 h-36 rounded-xl"
				src={data.contact?.avatarUrl}
				alt={data.contact?.firstName}
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-bold">{data.contact?.firstName} {data.contact?.lastName}</h1>
			<a href="/" class="text-xl text-blue-500">@{data.contact?.twitter}</a>
			<p class="text-gray-500">
				{data.contact?.notes}
			</p>

			<div class="flex items-center justify-center md:justify-start space-x-2">
				<a
					href={`/contacts/${data.contact?.id}/edit`}
					class="py-2 px-2 rounded-md border text-sm font-medium text-blue-500 shadow"
					type="submit">Edit</a
				>

				<DeleteContact />
			</div>
		</div>
	</div>
</section>
