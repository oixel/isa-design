<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { title, slug } = $props();

	let hovering = $state(false);
	let active = $state(false);
</script>

<!-- Note: The portfolio tile shrinks to a square aspect ratio on mobile devices and fills 9/10 otherwise -->
<div
	role="Portfolio tile for project named {title}"

	onclick={() => goto(`/portfolio/${slug}`)}

	onmouseenter={() => {hovering = true;}}
	onmouseleave={() => {hovering = false;}}
	ontouchstart={() => {active = true;}}
	ontouchend={() => {active = false;}}

	class="
        aspect-square
        w-9/10 border-2
        bg-purple-200 select-none hover:cursor-pointer
        hover:border-dashed
        active:cursor-pointer active:border-dashed
        sm:aspect-auto sm:h-150
    "
>
	{#if hovering || active}
		<div
			transition:fade
			style="background-color: rgba(255, 255, 255, 0.4);"
			class="flex h-full w-full items-center justify-center"
		>
			<h1 class="figtree text-4xl select-none">{title}</h1>
		</div>
	{/if}
</div>
