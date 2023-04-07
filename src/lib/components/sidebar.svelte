<script>
	import { page } from '$app/stores';
	import ChevronLeftIcon from '$lib/icons/chevron-left-icon.svelte';
	import { getContext } from 'svelte';
	import Search from './search.svelte';

	const drawer = getContext('drawer');
</script>

<aside
	class={`${
		!$drawer ? 'hidden md:flex' : ''
	} absolute md:static md:max-w-xs w-full flex flex-col divide-y bg-gray-100 border-r h-screen`}
>
	<header class="z-10 py-2 px-2 md:px-6 flex items-center gap-2">
		<Search />
		<a href="/contacts/new" class="bg-white border text-blue-500 shadow px-2 py-2 rounded-md">
			New
		</a>
	</header>

	<section class="flex-1 overflow-y-auto px-2 md:px-6 py-4">
		{#if $page.data.contacts.length}
			<ul class="h-full flex flex-col space-y-2">
				{#each $page?.data?.contacts as contact}
					<li>
						<a
							href={`/contacts/${contact.id}`}
							class={`py-2 block rounded-md px-2  ${
								$page.url.pathname === `/contacts/${contact.id}`
									? 'bg-blue-500 text-white '
									: 'hover:bg-gray-200'
							}`}
						>
							{contact.firstName}
							{contact.lastName}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="text-gray-500 italic">No Contacts</p>
		{/if}
	</section>

	<footer class="py-4 flex space-x-2 items-center px-2 md:px-6">
		<img src="https://kit.svelte.dev/favicon.png" class="w-6 h-6 flex-none" loading="lazy" alt="" />
		<span class="font-medium text-sm flex-1">Sveltekit Contacts</span>
		<button class="block md:hidden" on:click={() => ($drawer = false)}>
			<ChevronLeftIcon />
		</button>
	</footer>
</aside>
