<script>
	import Search from './search.svelte';
</script>

<aside class="hidden max-w-xs w-full md:flex flex-col divide-y bg-gray-100 border-r h-screen">
	<header class="py-2 px-6 flex items-center gap-2">
		<Search />
		<a href="/contacts/new" class="bg-white border text-blue-500 shadow px-2 py-2 rounded-md">
			New
		</a>
	</header>

	<section class="flex-1 overflow-y-auto px-6">
		<ul class="h-full flex flex-col space-y-2">
			{#each [...new Array(20)] as _, i}
				<li>
					<a href="/" class="py-2 block rounded-md px-2"> Person {i} </a>
				</li>
			{/each}
		</ul>
	</section>

	<footer class="py-4 flex space-x-2 items-center px-6">
		<img src="https://kit.svelte.dev/favicon.png" class="w-6 h-6" loading="lazy" alt="" />
		<span class="font-medium text-sm">Sveltekit Contacts</span>
	</footer>
</aside>
