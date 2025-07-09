<script lang="ts">
	import Posts from '$lib/components/Posts.svelte';
	import { LocalStorage } from '$lib/store.svelte.js';

	let { data } = $props();

	let windowSize : number = $state(0);
</script>

<svelte:head>
	<title>Isabela's Portfolio</title>
</svelte:head>

<svelte:window bind:outerWidth={windowSize} />

<Posts posts={data.posts}/>
