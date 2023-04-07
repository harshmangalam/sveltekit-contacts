<script>
	import MenuIcons from '$lib/icons/menu-icons.svelte';
	import '../app.postcss';
	import Sidebar from '../lib/components/sidebar.svelte';

	let showDrawer = false;
</script>

<div class="flex">
	<!-- sidebar  -->
	<Sidebar {showDrawer} />
	<div class="block md:hidden absolute top-4 left-4">
		<button on:click={() => (showDrawer = !showDrawer)}>
			<MenuIcons />
		</button>
	</div>
	<main class="flex-1">
		<slot />
	</main>
</div>
