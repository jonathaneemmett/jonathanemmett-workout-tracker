<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPlus } from '@fortawesome/free-solid-svg-icons';
	import Modal from '$lib/components/shared/Modal.svelte';
	import Select from '$lib/components/shared/dropdown/Select.svelte';
	import SelectItem from '$lib/components/shared/dropdown/SelectItem.svelte';

	let isOpen = false;
	let isModalOpen = true;
	let selectedValue = '';

	const sports = [
		{ label: 'Basketball', value: 'basketball' },
		{ label: 'Football', value: 'football' },
		{ label: 'Soccer', value: 'soccer' },
		{ label: 'Tennis', value: 'tennis' },
		{ label: 'Volleyball', value: 'volleyball' },
		{ label: 'Running', value: 'running' },
		{ label: 'Biking', value: 'biking' },
		{ label: 'Swimming', value: 'swimming' },
		{ label: 'CrossFit', value: 'crossfit' },
		{ label: 'Martial Arts', value: 'martial arts' }
	];

	function openModal() {
		isModalOpen = true;
	}

	/**
	 * @param {{ detail: { value: any; }; }} e
	 */
	function setSelectedValue(e) {
		selectedValue = e.detail.value;
		isOpen = false;
	}

	function handleClose() {
		isModalOpen = false;
		selectedValue = '';
	}
</script>

<section class="profile">
	<div class="profile__main">
		<div class="profile__left">left</div>
		<div class="profile__content">
			<div class="profile__headline">
				<h1>Welcome, {$page?.data.user?.name || 'Unknown'}</h1>
				<button class="btn-icon" on:click={openModal}>
					<Fa icon={faPlus} />
				</button>
			</div>
		</div>
		<div class="profile__right">right</div>
	</div>
</section>

<Modal bind:isModalOpen title="Add New Event">
	<div class="profile__modal__content">
		<form method="POST" action="?/event" class="form">
			<div class="form__control">
				<label for="title" class="visually-hidden">Type</label>
				<Select bind:selectedValue bind:isOpen placeholder="Select a sport...">
					{#each sports as sport}
						<SelectItem value={sport.value} label={sport.label} on:selected={setSelectedValue} />
					{/each}
				</Select>
			</div>
			<div class="form__control">
				<label for="description" class="visually-hidden">Description</label>
				<textarea name="description" id="description" rows="5" placeholder="Description" />
			</div>
			<div class="form__control multi__input">
				<label for="date" class="visually-hidden">Date</label>
				<input type="date" name="date" id="date" />
				<label for="time" class="visually-hidden">Time</label>
				<input type="time" name="time" id="time" />
			</div>
			<div class="form__control" />
		</form>
	</div>
	<div class="profile__modal__actions" slot="actions">
		<button class="btn btn-primary-outline" on:click={handleClose}>Close</button>
		<button class="btn btn-primary" on:click={() => (isModalOpen = false)}>Submit</button>
	</div>
</Modal>

<style>
	.profile {
		width: 100%;
	}

	.profile__main {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 0.5rem;
	}

	.profile__left,
	.profile__right {
		display: none;
	}

	.profile__content {
		width: 100%;
		background: var(--bg-body);
	}

	.profile__headline {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--text1);
		width: 100%;
		padding: 1rem;
		border-bottom: 1px solid var(--bg-body);
	}

	.profile__modal__content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding: 1rem;
	}

	.profile__modal__actions {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		gap: 1rem;
	}

	@media screen and (min-width: 37.5em) {
		.profile__main {
			display: grid;
			grid-template-columns: 1fr 2fr;
			width: 100%;
		}

		.profile__left {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.profile__right {
			display: none;
		}
	}

	@media screen and (min-width: 62.5em) {
		.profile__main {
			display: grid;
			grid-template-columns: 1fr 2fr 1fr;
			width: 100%;
		}

		.profile__left,
		.profile__right {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.profile__content {
			background: var(--bg-body);
		}
	}
</style>
