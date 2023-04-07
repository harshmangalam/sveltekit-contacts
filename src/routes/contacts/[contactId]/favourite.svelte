<script lang="ts">
	import { enhance } from '$app/forms';
	import StarIcon from '$lib/icons/star-icon.svelte';
	import StarSolidIcon from '$lib/icons/star-solid-icon.svelte';

	export let favorite = false;

	let loading = false;
</script>

<form
	method="post"
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	}}
	action="?/favorite"
>
	<button
		disabled={loading}
		class="disabled:cursor-wait"
		name="favorite"
		value={favorite ? 'false' : 'true'}
		aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
	>
		{#if favorite}
			<span class="text-orange-500">
				<StarSolidIcon />
			</span>
		{:else}
			<StarIcon />
		{/if}
	</button>
</form>
