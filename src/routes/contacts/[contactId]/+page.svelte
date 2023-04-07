<script lang="ts">
	import DeleteContact from './delete-contact.svelte';
	import Favourite from './favourite.svelte';
	export let data;
</script>

<section class="p-6">
	<div
		class="flex flex-col items-center md:items-start text-center md:text-start gap-4 md:flex-row"
	>
		<div class="flex-none">
			<img
				class="w-36 h-36 rounded-xl"
				src={data.contact?.avatarUrl ||
					'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=996&t=st=1680856511~exp=1680857111~hmac=2ea5e2b237c5da1755e858ed01dd5d3d6e5638d3edcfa0e34c62dc5bc518435a'}
				alt={data.contact?.firstName}
			/>
		</div>

		<div class="flex flex-col space-y-2 justify-center md:justify-start">
			<div class="flex items-center gap-4 justify-center md:justify-start">
				<h1 class="text-2xl font-bold">{data.contact?.firstName} {data.contact?.lastName}</h1>
				<Favourite favorite={data.contact.favorite} />
			</div>
			{#if data.contact.twitter}
				<a
					href={`https://twitter.com/${data.contact.twitter}`}
					target="_blank"
					class="text-xl text-blue-500">@{data.contact?.twitter}</a
				>
			{/if}
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
