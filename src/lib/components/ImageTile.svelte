<script lang="ts">
	import ExitButton from "./ExitButton.svelte";

	let { src, alt, openedImage, showCaption = true } = $props();

	let imageOpen = $state(false);

	function preventDefault(e: Event) {
		if (imageOpen) {
			e.preventDefault();
		}
	}
</script>

<!-- Prevents scrolling on page when modal is open -->
<svelte:window on:wheel|nonpassive={preventDefault} on:touchmove|nonpassive={preventDefault} />

<div class="flex flex-col items-center justify-center gap-4 py-6">
	<!-- Displays an image that can be clicked on to be maximized -->
	<input
		type="image"
		onclick={() => {
			imageOpen = true;
		}}
		{src}
		{alt}
		class="lg:3/4 2xl:1/2 w-full cursor-zoom-in border-2 outline-0 transition-all duration-200 hover:scale-101 hover:border-dashed focus:scale-101 focus:border-dashed active:scale-101 active:border-dashed xl:w-1/2"
	/>

	<!-- Allows caption to be hidden (used for thumbnail photo at top of project page) -->
	{#if showCaption && alt}
		<div class="flex items-center">
			<h2 class="italic font-extralight text-sm">{alt}</h2>
		</div>
	{/if}
</div>

<!-- Opens a modal with a maximized version of this image! -->
{#if imageOpen}
	<!-- Creates a dark-tinted background for the modal and places the image in the center -->
	<div 
		style="background-color: rgba(65, 65, 65, 0.80);"
		class="fixed top-0 left-0 z-20 flex h-[100vh] w-[100vw] flex-col items-center justify-center border-2"
	>
		<img class="w-full sm:w-auto lg:h-9/11" {src} {alt} />
	</div>

	<!-- Exit button for image modal -->
	<ExitButton position="fixed top-0 right-0 z-30 m-5" />
{/if}
