<script>
	import { page } from '$app/stores';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faUserAlt, faBars } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { SITE_NAME } from '$lib/utils/constants';

	let checked = false;
	let active = false;
	// let user = $page?.data?.user;
	// $: console.log($page);
	onMount(() => {
		let url = window.location.href;

		/** @type {NodeListOf<HTMLAnchorElement>}*/
		let links = document.querySelectorAll('.navbar__links a');
		links.forEach((link) => {
			link.addEventListener('click', () => {
				links.forEach((link) => {
					link.classList.remove('active');
				});

				link.classList.add('active');
				checked = false;
			});
		});

		links.forEach((link) => {
			if (link?.href === url) link.classList.add('active');
			else link.classList.remove('active');
		});
	});
</script>

<nav class="navbar">
	<div class="navbar__logo">
		<a href="/" class="navbar__home">
			{SITE_NAME}
			<span class="visually-hidden">(to home page)</span>
		</a>
	</div>
	<ul class="navbar__links">
		<!-- Checkbox Hack -->
		<input type="checkbox" id="checkbox__toggle" bind:checked />
		<label for="checkbox__toggle" class="hamburger">
			<Fa icon={faBars} />
		</label>

		<!-- Navigation Items -->

		<div class="header__menu">
			<li class="navbar__user">
				<span>
					<Fa icon={faUserAlt} />
					<span class="visually-hidden">User</span>
				</span>
				<ul class="dropdown">
					{#if $page.data.user}
						<li><a href="/profile" class:active>My Profile</a></li>
						<li>
							<form method="POST" action="/logout" use:enhance>
								<button type="submit">Logout</button>
							</form>
						</li>
					{:else}
						<li><a href="/login" class:active>Login</a></li>
					{/if}
				</ul>
			</li>
		</div>
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 1rem;
		padding-inline: 1rem;
		color: #fff;
	}

	.navbar__links a,
	.navbar__home {
		color: #fff;
	}

	.navbar__home {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		gap: 0.5rem;
	}

	.navbar__logo {
		font-size: 1.25rem;
		font-size: clamp(1.25rem, 0.875rem + 1vw, 1.5rem);
	}

	.header__menu {
		display: flex;
		gap: 1rem;
		font-size: 1.2rem;
	}

	.header__menu li:hover {
		width: 100%;
		background: #151515;
	}

	.header__menu li {
		padding-block: 0.25rem;
		padding-inline: 0.5rem;
	}

	a.active {
		color: teal;
	}

	.navbar__user {
		position: relative;
	}

	.dropdown {
		background-color: #151515;
		padding-block: 1rem;
		position: absolute;
		display: none;
		top: 30px;
		right: 0;
		width: 8rem;
	}

	.dropdown li {
		padding: 0.5rem 1rem;
		width: 100%;
		text-align: center;
	}

	.navbar__user:hover .dropdown {
		display: block;
	}

	/** Responsive */
	input[type='checkbox'] {
		display: none;
	}

	.hamburger {
		display: none;
		font-size: 1.5rem;
		user-select: none;
	}

	/* Media Queries */
	@media screen and (max-width: 62.5em) {
		.header__menu {
			display: none;
			position: absolute;
			background-color: #151515;
			right: 0;
			left: 0;
			text-align: right;
			padding-block: 1rem;
			padding-inline: 0.5rem;
			z-index: 1;
		}

		.header__menu li:hover {
			display: inline-block;
			background-color: #151515;
			transition: 0.3s ease-in-out;
		}

		input[type='checkbox']:checked ~ .header__menu {
			display: block;
		}

		.hamburger {
			display: block;
		}

		.dropdown {
			right: 0;
			top: 2rem;

			border: 1px solid #fff;
		}

		.dropdown li:hover {
			background-color: #151515;
		}
	}
</style>
