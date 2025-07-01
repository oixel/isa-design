<script lang="ts">
	import PortfolioTile from './PortfolioTile.svelte';

	let { data } = $props();
</script>

<div class="flex h-full flex-col items-center gap-10">
	{#each data.projects as project}
		<PortfolioTile title={project.title} />
	{/each}
</div>
