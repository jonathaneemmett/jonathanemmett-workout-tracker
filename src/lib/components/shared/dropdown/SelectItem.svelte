<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let label = '';
	export let value = '';

	function onSelected() {
		dispatch('selected', { value });
	}
</script>

<div class="dropdown__item" on:click={onSelected} on:keyup={onSelected}>{label}</div>

<style>
	.dropdown__item {
		padding: 1rem;
		font-size: 1.4rem;
	}

	.dropdown__item:hover {
		background-color: #f5f5f5;
		cursor: pointer;
	}
</style>
