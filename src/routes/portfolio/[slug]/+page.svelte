<script lang="ts">
    let { data } = $props();
</script>

<div class="px-5">
    <h1>{data.metadata.title}</h1>
    <h2><i>{data.metadata.description}</i></h2>
    <hr class="my-2"/>
    <data.content />
</div>

<style>
    h1 {
        font-size: x-large;
    }
</style>