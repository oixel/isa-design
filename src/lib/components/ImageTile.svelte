<script lang="ts">
	let { src, alt } = $props();

	let imageOpen = $state(false);

	function preventDefault(e: Event) {
		if (imageOpen) {
			e.preventDefault();
		}
	}
</script>

<svelte:window on:wheel|nonpassive={preventDefault} on:touchmove|nonpassive={preventDefault} />

<div class="flex flex-col items-center justify-center gap-4 py-12">
	<input
		type="image"
		onclick={() => {
			imageOpen = true;
		}}
		{src}
		{alt}
		class="w-full border-2 transition-all duration-200 hover:scale-101 hover:cursor-zoom-in hover:border-dashed lg:3/4 xl:w-1/2 2xl:1/2"
	/>
	<h2>{alt}</h2>
</div>

{#if imageOpen}
	<div
		style="background-color: rgba(255, 255, 255, 0.90);"
		class="fixed top-0 left-0 z-20 flex justify-center items-center h-[100vh] w-[100vw] border-2"
	>
    <img class="h-9/10" {src} {alt} />
    </div>
	<button
		onclick={() => {
			imageOpen = false;
		}}
		class="fixed top-0 right-0 z-30 m-5 flex aspect-square items-center border-2 bg-white p-3 transition-all duration-200 hover:scale-105 hover:cursor-pointer hover:border-dashed active:scale-105 active:border-dashed"
	>
		X
	</button>
{/if}
