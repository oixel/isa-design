<script lang="ts">
    let { onclick, position } = $props();
</script>

<button
	{onclick}
	class="{position} flex w-9 sm:w-12 cursor-pointer items-center justify-center 
    border-2 bg-white p-3 outline-0 aspect-square 
    transition-all duration-100 hover:scale-105 hover:border-dashed focus:scale-105 focus:border-dashed active:scale-105 active:border-dashed"
>
	X
</button>
