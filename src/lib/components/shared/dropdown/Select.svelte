<script>
	import { fade } from 'svelte/transition';

	export let isOpen = false;
	export let selectedValue = '';
	export let placeholder = 'Select...';

	let chevron__down = false;

	// If if isOpen then add class chevron__down
	$: isOpen, (chevron__down = isOpen);

	/**
	 * @param {string} str
	 */
	function titleCase(str) {
		return str
			.toLowerCase()
			.split(' ')
			.map((/** @type {string} */ word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<div class="dropdown">
	<div
		class="dropdown__select"
		on:click={() => (isOpen = !isOpen)}
		on:keydown={() => (isOpen = !isOpen)}
	>
		{#if selectedValue}
			{titleCase(selectedValue)}
		{:else}
			{placeholder}
		{/if}

		<span class="chevron" class:chevron__down />
	</div>
	<div class="dropdown__menu" class:isOpen in:fade={{ duration: 200 }}>
		<slot />
	</div>
</div>

<style>
	.dropdown {
		width: 100%;
		position: relative;
	}

	.dropdown__menu.isOpen {
		opacity: 1;
		visibility: visible;
	}

	.dropdown__select {
		padding: 1.5rem;
		border-radius: 0.25rem;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.dropdown__menu {
		border-radius: 0.25rem;
		background-color: white;
		position: absolute;
		top: 105%;
		left: 0;
		right: 0;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.2s linear, visibility 0.2s linear;
		z-index: 1;
		border: 1px solid #e5e5e5;
	}

	/** Chevron **/
	.chevron {
		border-style: solid;
		border-width: 0.25rem 0.25rem 0 0;
		content: '';
		display: inline-block;
		height: 0.75rem;
		left: 0.15rem;
		position: relative;
		transform: rotate(-45deg);
		width: 0.75rem;
		transition: transform 0.3s linear;
	}

	.chevron.chevron__down {
		transform: rotate(135deg);
	}
</style>
