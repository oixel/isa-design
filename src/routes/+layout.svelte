<script lang="ts">
	import '../app.css';

	import DottedBackground from './DottedBackground.svelte';

	import { goto } from '$app/navigation';

	let { children } = $props();
</script>

<svelte:head>
	<title>Isabela Delgado's Portfolio</title>
</svelte:head>

<!-- This is the NavBar -->
<div
	class="fixed z-10 flex h-[7vh] w-[100vw] items-center justify-center gap-3 border-b-2
		bg-white p-5
		sm:justify-start sm:gap-5"
>
	<!-- Name / portfolio button -->
	<button
		onclick={() => goto('/')}
		class="figtree text-center text-lg text-nowrap decoration-wavy transition-transform duration-100 hover:scale-102 hover:cursor-pointer hover:underline sm:text-2xl"
	>
		Isabela Delgado
	</button>

	<!-- Add little divider icon to separate name from section buttons -->
	<p class="figtree select-none">~</p>

	<!-- Define a small snippet for the different section buttons to avoid redundant code -->
	{#snippet sectionButton(title: string)}
		<button onclick={() => goto(`/${title}`)} class="figtree hover:cursor-pointer hover:border-b-2">
			{title}
		</button>
	{/snippet}

	<!-- Create snippets for each of the section buttons -->
	{@render sectionButton('about')}
	{@render sectionButton('personal')}
	{@render sectionButton('contact')}
</div>

<div class="flex h-[100vh] w-[100vw] flex-col">
	<!-- Render out page content! -->
	<div class="mt-30 h-full">
		{@render children()}
	</div>

	<DottedBackground />

	<!-- A little self promotion never hurt anybody -->
	<footer
		class="figtree mt-15 flex items-center justify-end border-t-1 bg-white p-2 pr-4 text-right"
	>
		made by&nbsp;
		<a
			href="https://github.com/oixel"
			class="underline hover:scale-105 hover:cursor-pointer sm:no-underline"
		>
			oixel
		</a>
		&nbsp;♥
	</footer>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

	:global {
		.lora {
			font-family: 'Lora', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}

		.figtree {
			font-family: 'Figtree', sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}
	}
</style>
