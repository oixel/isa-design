<script lang="ts">
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { title, thumbnail, slug } = $props();

	let hovering = $state(false);
	let active = $state(false);
	let focused = $state(false);
</script>

<!-- Note: The portfolio tile shrinks to a square aspect ratio on mobile devices and fills 9/10 otherwise -->
<button
	role="Portfolio tile for project named {title}"

	onclick={() => goto(`/portfolio/${slug}`)}

	onmouseenter={() => { hovering = true; }}
	onmouseleave={() => { hovering = false; }}
	ontouchstart={() => { active = true; }}
	ontouchend={() => { active = false; }}

	bind:focused
	
	style={thumbnail ? `background-image: url(${thumbnail});` : ''}
	class="
		aspect-square
		w-9/10
		border-2 bg-white
        bg-cover
        bg-center bg-no-repeat
        outline-0 select-none cursor-pointer
        hover:border-dashed
        focus:border-dashed
		active:border-dashed
        sm:aspect-auto sm:h-150
    "
>
	{#if hovering || active || focused}
		<div
			transition:fade={{duration: 150}}
			style="background-color: rgba(255, 255, 255, 0.4);"
			class="flex h-full w-full items-center justify-center"
		>
			<h1 class="border-2 bg-white px-4 py-1 text-4xl select-none">{title}</h1>
		</div>
	{/if}
</button>
