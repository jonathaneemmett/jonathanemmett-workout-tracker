<script>
	import { enhance } from '$app/forms';
</script>

<h1 class="login__headline">Login</h1>
<form action="?/login" method="POST" class="login__form" use:enhance>
	<div class="login__control">
		<label for="email" class="visually-hidden">Email</label>
		<input type="email" name="email" id="email" placeholder="Email" />
	</div>
	<div class="login__control">
		<label for="password" class="visually-hidden">Password</label>
		<input type="password" name="password" id="password" placeholder="Password" />
	</div>
	<div class="login__control">
		<button type="submit" class="login__button">Login</button>
	</div>
	<div class="login__switch">
		Don't have an account? <a href="/register">Register!</a>
	</div>
</form>

<style>
	.login__headline {
		margin-block-end: 1rem;
		color: var(--text1);
	}

	.login__form {
		width: 275px;
	}

	.login__control {
		margin-block-end: 1rem;
	}

	.login__control input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}

	.login__button {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		background-color: transparent;
		color: var(--text1);
	}

	.login__button:hover {
		background-color: #ccc;
		cursor: pointer;
	}

	.login__switch {
		width: 100%;
		text-align: center;
		margin-block-start: 1rem;
		color: var(--text1);
		font-size: 0.8rem;
	}

	.login__switch a {
		color: var(--text1);
	}

	.login__switch a:hover {
		color: var(--text2);
	}

	@media screen and (max-width: 37.5em) {
		.login {
			padding-inline: 1rem;
		}

		.login__form {
			width: 100%;
		}
	}
</style>
