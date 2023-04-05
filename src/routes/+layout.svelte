<script>
	import '../app.postcss';
	import Sidebar from '../lib/components/sidebar.svelte';
</script>

<div class="flex">
	<!-- sidebar  -->
	<Sidebar />
	<main class="flex-1">
		<slot />
	</main>
</div>
