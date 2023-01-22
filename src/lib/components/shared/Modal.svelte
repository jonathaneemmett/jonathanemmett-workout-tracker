<script>
	import Portal from './Portal.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faTimes } from '@fortawesome/free-solid-svg-icons';

	export let isModalOpen = false;
	export let title = '';

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<section class="modal">
			<div class="modal__body">
				<div class="modal__header">
					<h2>{title}</h2>
					<button class="btn-icon" on:click={closeModal}>
						<Fa icon={faTimes} />
					</button>
				</div>
				<div class="modal__content">
					<slot />
				</div>
				<div class="modal__actions">
					<slot name="actions" />
				</div>
			</div>
		</section>
	</Portal>
{/if}

<style>
	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.modal__body {
		background-color: var(--bg-body);
		border-radius: 0.5rem;
		width: 100%;
		max-width: 600px;
		margin-inline: 0.5rem;
	}

	.modal__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--text1);
		width: 100%;
		padding: 1rem;
	}

	.modal__content {
		padding: 1rem;
	}

	.modal__actions {
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
</style>
