<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<section class="p-6">
	<div class="flex flex-col gap-4 md:flex-row">
		<div class="flex-none">
			<img
				class="w-36 h-36 rounded-xl"
				src="https://avatars.githubusercontent.com/u/57381638?v=4"
				alt="harsh"
			/>
		</div>

		<div class="flex flex-col space-y-2">
			<h1 class="text-2xl font-bold">Harsh Mangalam</h1>
			<a href="/" class="text-xl text-blue-500">@harshmanglam6</a>
			<p class="text-gray-500">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, fugit.
			</p>

			<div class="flex items-center space-x-2">
				<form method="post" use:enhance>
					<button
						class="py-2 px-2 rounded-md border text-sm font-medium text-blue-500 shadow"
						type="submit">Edit</button
					>
				</form>
				<form
					use:enhance
					method="post"
					on:submit={(event) => {
						if (!confirm('Please confirm you want to delete this record.')) {
							event.preventDefault();
						}
					}}
				>
					<button
						class="py-2 px-2 rounded-md border text-sm font-medium text-red-500 shadow"
						type="submit">Delete</button
					>
				</form>
			</div>
		</div>
	</div>
</section>
