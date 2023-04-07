<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form use:enhance method="post" action="?/deleteContact">
	<button class="py-2 px-2 rounded-md border text-sm font-medium text-red-500 shadow" type="submit"
		>Delete</button
	>
</form>
