<script lang="ts">
	import { enhance } from '$app/forms';

	let favorite = false;
</script>

<form method="post" use:enhance>
	<button
		name="favorite"
		value={favorite ? 'false' : 'true'}
		aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
	>
		{favorite ? '★' : '☆'}
	</button>
</form>
