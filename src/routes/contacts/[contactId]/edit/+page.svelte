<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	export let data;

	let submitting = false;
	$: firstNameError = form?.errors.firstName;
</script>

<section class="min-h-screen grid place-items-center">
	<form
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				submitting = false;
				await update();
			};
		}}
		method="post"
	>
		<div class="grid grid-cols-2 gap-4 max-w-md mx-auto px-4 md:px-0">
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="firstName">First name</label>
				<input value={data?.contact?.firstName ?? ''} type="text" name="firstName" id="firstName" />
				{#if firstNameError}
					<span class="text-red-500 text-sm">{firstNameError}</span>
				{/if}
			</section>
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="lastName">Last name</label>
				<input value={data?.contact?.lastName ?? ''} type="text" name="lastName" id="lastName" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="twitter">Twitter</label>
				<input value={data?.contact?.twitter ?? ''} type="text" name="twitter" id="twitter" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="avatarUrl">Avatar URL</label>
				<input value={data?.contact?.avatarUrl ?? ''} type="text" name="avatarUrl" id="avatarUrl" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="notes">Notes</label>
				<textarea value={data?.contact?.notes ?? ''} name="notes" id="notes" rows="5" />
			</section>

			<section class="flex space-x-2 items-center">
				<button
					disabled={submitting}
					class="bg-white border text-blue-500 shadow px-2 py-2 rounded-md disabled:bg-gray-100 disabled:text-gray-500"
				>
					Edit
				</button>
				<a
					href={`/contacts/${data.contact.id}`}
					class="bg-white border text-red-500 shadow px-2 py-2 rounded-md"
				>
					Cancel
				</a>
			</section>
		</div>
	</form>
</section>
