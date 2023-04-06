<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;

	$: console.log(form);

	$: firstNameError = form?.errors.firstName;
</script>

<section>
	<form use:enhance method="post">
		<div class="grid grid-cols-2 gap-4 max-w-md mx-auto">
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="firstName">First name</label>
				<input type="text" name="firstName" id="firstName" />
				{#if firstNameError}
					<span class="text-red-500 text-sm">{firstNameError}</span>
				{/if}
			</section>
			<section class="col-span-1 flex flex-col space-y-2">
				<label for="lastName">Last name</label>
				<input type="text" name="lastName" id="lastName" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="twitter">Twitter</label>
				<input type="text" name="twitter" id="twitter" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="avatarUrl">Avatar URL</label>
				<input type="text" name="avatarUrl" id="avatarUrl" />
			</section>
			<section class="col-span-2 flex flex-col space-y-2">
				<label for="notes">Notes</label>
				<textarea name="notes" id="notes" rows="5" />
			</section>

			<section class="flex space-x-2 items-center">
				<button class="bg-white border text-blue-500 shadow px-2 py-2 rounded-md"> Save </button>
				<a href="/" class="bg-white border text-red-500 shadow px-2 py-2 rounded-md"> Cancel </a>
			</section>
		</div>
	</form>
</section>
