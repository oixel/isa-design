<script lang="ts">
    let { src, alt } = $props();
</script>

<div
    class="flex flex-col justify-center items-center py-12 gap-4"
>
    <img 
    class="w-2/3 border-2 hover:cursor-pointer hover:scale-101 hover:border-dashed transition-all duration-200"
    {src}
    {alt}
    />
    <h2>{alt}</h2>
</div>