<script lang="ts">
	import { enhance } from '$app/forms';
	import StarIcon from '$lib/icons/star-icon.svelte';
	import StarSolidIcon from '$lib/icons/star-solid-icon.svelte';

	let favorite = false;
</script>

<form method="post" use:enhance>
	<button
		name="favorite"
		value={favorite ? 'false' : 'true'}
		aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
	>
		{#if favorite}
			<StarSolidIcon />
		{:else}
			<StarIcon />
		{/if}
	</button>
</form>
