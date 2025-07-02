<script lang="ts">
	import { goto } from '$app/navigation';

    let { data } = $props();
</script>

<div class="figtree px-5">
    <div class="flex gap-2 h-fit">
        <div class="grow">
            <h1 class="text-2xl">{data.metadata.title}</h1>
            <h2 class="font-[Figtree] italic font-light text-lg">{data.metadata.description}</h2>
        </div>
        <button 
            onclick={() => goto('/')} 
            class='ml-auto border-2 p-3 m-3 flex items-center aspect-square bg-white 
            hover:cursor-pointer hover:scale-105 active:scale-105 hover:border-dashed active:border-dashed transition-all duration-100'
        >
            X
        </button>
    </div>
    <hr class="my-2"/>

    <div class="stylized">    
        <data.content />
    </div>
</div>