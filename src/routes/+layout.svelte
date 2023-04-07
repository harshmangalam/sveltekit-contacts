<script>
	import MenuIcons from '$lib/icons/menu-icons.svelte';
	import '../app.postcss';
	import Sidebar from '../lib/components/sidebar.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	const drawer = writable(false);

	setContext('drawer', drawer);
</script>

<div class="flex">
	<!-- sidebar  -->
	<Sidebar />
	<div class="block md:hidden absolute top-4 left-4">
		<button on:click={() => ($drawer = true)}>
			<MenuIcons />
		</button>
	</div>
	<main class="flex-1">
		<slot />
	</main>
</div>
