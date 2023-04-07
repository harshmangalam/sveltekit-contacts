<script lang="ts">
	import { enhance } from '$app/forms';

	let loading = false;
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			await update();
		};
	}}
	method="post"
	action="?/deleteContact"
>
	<button
		disabled={loading}
		class="disabled:bg-gray-100 disabled:cursor-wait disabled:text-gray-500 py-2 px-2 rounded-md border text-sm font-medium text-red-500 shadow"
		type="submit">Delete</button
	>
</form>
