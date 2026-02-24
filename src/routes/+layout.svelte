<script lang="ts">
	export const prerender = true;

	import '../app.css';

	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	import DottedBackground from '$lib/components/DottedBackground.svelte';

	let { children } = $props();

	let navbarHeight = $state(0);
</script>

<!-- This is the NavBar -->
<div
	bind:clientHeight={navbarHeight}
	class="figtree fixed z-10 flex h-[8%] w-full items-center justify-center gap-3 border-b-2 bg-white
		p-5 select-none
		sm:justify-start sm:gap-5"
>
	<!-- Name / portfolio button -->
	<button
		onclick={() => goto('/')}
		class="
			cursor-pointer text-center text-lg text-nowrap decoration-wavy outline-0 transition-transform
			duration-100
			hover:scale-102 hover:underline focus:scale-102
			focus:underline active:scale-102 active:underline sm:text-2xl
		"
	>
		Isabela Delgado
	</button>

	<!-- Add little divider icon to separate name from section buttons -->
	<p>~</p>

	<!-- Define a small snippet for the different section buttons to avoid redundant code -->
	{#snippet sectionButton(title: string)}
		<button
			onclick={() => goto(`/${title}`)}
			class="cursor-pointer outline-0 hover:border-b-2 focus:border-b-2 active:border-b-2
				{page.url.pathname.replace('/', '') == title ? 'border-b-2' : ''}
			"
		>
			{title}
		</button>
	{/snippet}

	<!-- Create snippets for each of the section buttons -->
	{@render sectionButton('about')}
	{@render sectionButton('personal')}
	{@render sectionButton('contact')}
</div>

<div style="padding-top: {navbarHeight}px; " class="figtree flex h-[100vh] flex-col">
	<!-- Render out page content! -->
	<div class="grow px-5 py-15">
		{@render children()}
	</div>

	<DottedBackground />

	<!-- A little self promotion never hurt anybody -->
	<footer class="flex items-center justify-end border-t-1 bg-white p-2 pr-4 text-right">
		made by&nbsp;
		<a
			href="https://github.com/oixel"
			class="cursor-pointer underline hover:scale-105 active:scale-105 sm:no-underline"
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
