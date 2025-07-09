<script lang="ts">
	import PostTile from '$lib/components/PostTile.svelte';
	import { LocalStorage } from '$lib/store.svelte.js';

	let { posts } = $props();

	const isList = new LocalStorage('isList', true);

	let windowSize: number = $state(0);
</script>

<svelte:window bind:outerWidth={windowSize} />

<div class="flex flex-col justify-center select-none">
    <!-- Only renders posts if posts exist -->
	{#if posts.length}
		<!-- Adds options to toggle between list and grid on large screen -->
		<div class="mx-auto mb-8 hidden w-9/10 justify-end gap-6 lg:flex">
			<div class="flex w-25 items-center justify-center gap-2 border-2 bg-white py-2">
				<button
					onclick={() => {
						isList.current = true;
					}}
					class="{isList.current
						? 'border-b-2'
						: ''} cursor-pointer outline-0 hover:border-b-2 focus:border-b-2 active:border-b-2"
				>
					list
				</button>
				<p class="font-thin">|</p>
				<button
					onclick={() => {
						isList.current = false;
					}}
					class="{!isList.current
						? 'border-b-2'
						: ''} cursor-pointer outline-0 hover:border-b-2 focus:border-b-2 active:border-b-2"
				>
					grid
				</button>
			</div>
		</div>

		<!-- Renders posts as a list or grid (grid only allowed on large devices) -->
		<div
			class="list
                {isList.current || windowSize < 1025
				? 'flex h-full flex-row flex-wrap items-center justify-center gap-10'
				: 'gap-y-15 lg:grid lg:grid-cols-3 lg:justify-items-center'}
            "
		>
			{#each posts as post}
				<PostTile {...post} />
			{/each}
		</div>
    
    <!-- Otherwise, render a WIP message -->
	{:else}
		<div class="flex h-full items-center justify-center text-center text-3xl">
			<h1>~ More to come in the future ~</h1>
		</div>
	{/if}
</div>
