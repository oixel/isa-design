<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();
</script>

<div class="figtree px-5">
	<div class="flex h-fit gap-2">
		<div class="grow">
			<h1 class="text-2xl">{data.metadata.title}</h1>
			<h2 class="font-[Figtree] text-lg font-light italic">{data.metadata.description}</h2>
		</div>
		<button
			onclick={() => goto('/')}
			class="m-3 ml-auto flex aspect-square items-center border-2 bg-white p-3 outline-0
            transition-all duration-100 hover:scale-105
            hover:cursor-pointer hover:border-dashed focus:scale-105 focus:border-dashed active:scale-105 active:border-dashed"
		>
			X
		</button>
	</div>
	<hr class="my-2" />

	<div class="stylized">
		<data.content />
	</div>
</div>
