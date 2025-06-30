<script lang="ts">
	import '../app.css';
	
	import DottedBackground from '$lib/components/DottedBackground.svelte';

	import { goto } from '$app/navigation';

	let { children } = $props();
</script>

<svelte:head>
	<title>Isabela Delgado's Portfolio</title>
</svelte:head>

<!-- This is the NavBar -->
<div 
	class="fixed z-10 w-[100vw] h-[7vh] bg-white border-b-2 p-5 flex items-center
		justify-center gap-3 
		sm:justify-start sm:gap-5"
	>
	<!-- Name / portfolio button -->
	<button 
		onclick={() => goto("/")}
		class="figtree text-lg sm:text-2xl text-center text-nowrap hover:cursor-pointer hover:scale-102 transition-transform duration-100">
		Isabela Delgado
	</button>
	
	<!-- Add little divider icon to separate name from section buttons -->
	<p class="figtree select-none">
		~
	</p>

	<!-- Define a small snippet for the different section buttons to avoid redundant code -->
	{#snippet sectionButton(title : string)}
		<button
			onclick={() => goto(`/${title}`)}
			class="figtree hover:border-b-2 hover:cursor-pointer"
		>
			{title}
		</button>
	{/snippet}
	
	<!-- Create snippets for each of the section buttons -->
	{@render sectionButton("about")}
	{@render sectionButton("personal")}
	{@render sectionButton("contact")}
</div>

<div class="flex flex-col w-[100vw] h-[100vh]">
	<!-- Render out page content! -->
	<div class="h-full mt-30">
		{@render children()}
	</div>

	<DottedBackground />

	<!-- A little self promotion never hurt anybody -->
	<footer class="figtree mt-15 border-t-1 bg-white p-2 pr-4 text-right flex justify-end items-center">
		made by&nbsp;
		<a 
			href='https://github.com/oixel'
			class="underline sm:no-underline hover:scale-105 hover:cursor-pointer"
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
			font-family: "Lora", sans-serif;
			font-optical-sizing: auto;
			font-style: normal;
		}

		.figtree {
			font-family: "Figtree", sans-serif;
			font-optical-sizing: auto;
			font-style: normal;	
		}
	}
</style>