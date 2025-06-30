<script lang="ts">
	import '../app.css';
	
	import DottedBackground from '$lib/components/DottedBackground.svelte';

	import { goto } from '$app/navigation';

	let { children } = $props();

	let navbarHeight = $state(0);
</script>

<!-- This is the NavBar -->
<div 
	bind:offsetHeight={navbarHeight} 
	class="fixed w-[100vw] bg-white border-b-2 p-5 flex items-center
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

<div class="flex flex-col">
	<!-- Places an invisible div with the same dimensions as navbar to offset page content properly -->
	<div class="bg-red-500" style="height: {navbarHeight}px;"></div>
	
	<!-- Render out page content! -->
	{@render children()}
</div>

<DottedBackground />

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