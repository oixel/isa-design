<script lang="ts">
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";

    let { title, url } = $props();

    let hovering = $state(false);
    let active = $state(false);

    function onmouseenter() {
        hovering = true;
    }

    function onmouseleave() {
        hovering = false;
    }

    function ontouchstart() {
        active = true;
    }

    function ontouchend() {
        active = false;
    }
</script>

<!-- Note: The portfolio tile shrinks to a square aspect ratio on mobile devices and fills 9/10 otherwise -->
<div 
    role="Portfolio tile for project named {title}"
    onclick={() => goto(`/portfolio/${url}`)}
    {onmouseenter}
    {onmouseleave}
    {ontouchstart}
    {ontouchend}
    class="
        select-none
        aspect-square sm:aspect-auto
        w-9/10 sm:h-150 bg-purple-200 
        border-2 
        hover:cursor-pointer hover:border-dashed
        active:cursor-pointer active:border-dashed
    "
>
    {#if hovering || active}
        <div transition:fade style="background-color: rgba(255, 255, 255, 0.4);" class="w-full h-full flex justify-center items-center">
            <h1 class="select-none figtree text-4xl">{title}</h1>
        </div>
    {/if}
</div>