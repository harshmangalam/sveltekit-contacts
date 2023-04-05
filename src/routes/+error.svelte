<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
</script>

<section class="min-h-screen grid place-items-center">
	<div class="max-w-md w-full mx-auto text-center flex flex-col space-y-4">
		<h1 class="text-2xl font-bold">Oops!</h1>
		<p class="text-gray-600">Sorry, an unexpected error has occurred.</p>
		<p>
			<i class="text-gray-400">{$page.error?.message}</i>
		</p>
	</div>
</section>
