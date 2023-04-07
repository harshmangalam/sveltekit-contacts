<script lang="ts">
	import { enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let form;
	let submitting = false;

	$: firstNameError = form?.errors.firstName;
</script>

<svelte:head>
	<title>New Contact</title>
</svelte:head>
<section class="min-h-screen grid place-items-center">
	<form
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				submitting = false;
				await invalidateAll();
				await update();
			};
		}}
		method="post"
	>
		<div class="grid grid-cols-2 gap-4 max-w-md mx-auto px-4 md:px-0">
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="firstName">First name</label>
				<input value={form?.fields?.firstName ?? ''} type="text" name="firstName" id="firstName" />
				{#if firstNameError}
					<span class="text-red-500 text-sm">{firstNameError}</span>
				{/if}
			</section>
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="lastName">Last name</label>
				<input value={form?.fields?.lastName ?? ''} type="text" name="lastName" id="lastName" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="twitter">Twitter</label>
				<input value={form?.fields?.twitter ?? ''} type="text" name="twitter" id="twitter" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="avatarUrl">Avatar URL</label>
				<input value={form?.fields?.avatarUrl ?? ''} type="text" name="avatarUrl" id="avatarUrl" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="notes">Notes</label>
				<textarea value={form?.fields?.notes ?? ''} name="notes" id="notes" rows="5" />
			</section>

			<section class="flex space-x-2 items-center">
				<button
					disabled={submitting}
					class="bg-white border text-blue-500 shadow px-2 py-2 rounded-md disabled:bg-gray-100 disabled:text-gray-500"
				>
					Save
				</button>
				<a href="/" class="bg-white border text-red-500 shadow px-2 py-2 rounded-md"> Cancel </a>
			</section>
		</div>
	</form>
</section>
