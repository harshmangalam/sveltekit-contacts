<script lang="ts">
	import { enhance } from '$app/forms';
	import StarIcon from '$lib/icons/star-icon.svelte';
	import StarSolidIcon from '$lib/icons/star-solid-icon.svelte';

	export let favorite = false;
</script>

<form method="post" use:enhance action="?/favorite">
	<button
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
