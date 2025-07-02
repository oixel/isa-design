<script lang="ts">
	import { goto } from '$app/navigation';
	import ExitButton from '$lib/components/ExitButton.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>Isabela Delgado: {data.metadata.title}</title>
</svelte:head>

<div class="figtree border-2 bg-white p-5">
	<div class="flex h-fit gap-2">
		<div class="grow">
			<h1 class="text-2xl">{data.metadata.title}</h1>
			<h2 class="font-[Figtree] text-lg font-light italic">{data.metadata.description}</h2>
		</div>

		<!-- Exit button for project. Exits back to previous location (essentially a back button) -->
		<ExitButton position="m-auto" />
	</div>
	<hr class="my-2" />

	<div class="text-center text-balance break-words">
		<data.content />
	</div>
</div>
