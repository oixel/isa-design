<script lang="ts">
	import PortfolioTile from '$lib/components/PortfolioTile.svelte';

	let { data } = $props()

	let isList = $state(true);
</script>

<svelte:head>
	<title>
		Isabela's Portfolio
	</title>
</svelte:head>


<div class="figtree flex flex-col justify-center">
	<!-- Adds options to toggle between list and grid on large screen -->
	<div class="w-9/10 mx-auto flex justify-end mb-8 gap-6">
		<div class="hidden lg:visible lg:flex w-25 py-2 border-2 gap-2 justify-center items-center bg-white">
			<button onclick={() => { isList = true; }} class="{(isList) ? 'border-b-2' : ''} hover:border-b-2 cursor-pointer">list</button>
			<button onclick={() => { isList = false; }} class="{(!isList) ? 'border-b-2' : ''} hover:border-b-2 cursor-pointer">grid</button>
		</div>
	</div>

	<!-- Renders portfolio projects as a list or grid (grid only allowed on large devices) -->
	<div class="list {(isList) ? 'list' : 'grid'}">
		{#each data.projects as project}
			<PortfolioTile {...project} />
		{/each}
	</div>
</div>

<style>
	@import 'tailwindcss';

	.list {
		@apply flex h-full flex-row justify-center items-center gap-10 flex-wrap;
	}

	.grid {
		@apply lg:grid lg:grid-cols-3 lg:justify-items-center;
	}
</style>
