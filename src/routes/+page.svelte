<script lang="ts">
	import PortfolioTile from '$lib/components/PortfolioTile.svelte';

	let { data } = $props()
</script>

<div class="flex h-full flex-row justify-center items-center gap-10 flex-wrap">
	{#each data.projects as project}
		<PortfolioTile {...project} />
	{/each}
</div>
