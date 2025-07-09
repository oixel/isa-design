<script>
	import Posts from "$lib/components/Posts.svelte";
	
    let { data } = $props();

</script>

<svelte:head>
    <title>Isabela Delgado - Personal</title>
</svelte:head>

<Posts posts={data.posts} />