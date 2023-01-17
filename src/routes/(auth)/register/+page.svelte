<script>
	import { enhance } from '$app/forms';
</script>

<h1 class="register__headline">Register</h1>
<form action="?/register" class="register__form" method="POST" use:enhance>
	<div class="register__control">
		<label for="name" class="visually-hidden">Name</label>
		<input type="text" name="name" id="name" placeholder="Name" />
	</div>
	<div class="register__control">
		<label for="email" class="visually-hidden">Email</label>
		<input type="email" name="email" id="email" placeholder="Email" />
	</div>
	<div class="register__control">
		<label for="password" class="visually-hidden">Password</label>
		<input type="password" name="password" id="password" placeholder="Password" />
	</div>
	<div class="register__control">
		<label for="password_confirmation" class="visually-hidden">Password Confirmation</label>
		<input
			type="password"
			name="password_confirmation"
			id="password_confirmation"
			placeholder="Password Confirmation"
		/>
	</div>
	<div class="register__control">
		<button type="submit" class="register__button">Register</button>
	</div>
	<div class="register__switch">
		Already have an account? <a href="/login">Login!</a>
	</div>
</form>

<style>
	.register__headline {
		margin-block-end: 1rem;
		color: var(--text1);
	}

	.register__form {
		width: 275px;
	}

	.register__control {
		margin-block-end: 1rem;
	}

	.register__control input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
	}

	.register__button {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		background-color: transparent;
		color: var(--text1);
	}

	.register__button:hover {
		background-color: #ccc;
		cursor: pointer;
	}

	.register__switch {
		width: 100%;
		text-align: center;
		margin-block-start: 1rem;
		color: var(--text1);
		font-size: 0.8rem;
	}

	.register__switch a {
		color: var(--text1);
	}

	.register__switch a:hover {
		color: var(--text2);
	}

	@media screen and (max-width: 37.5em) {
		.register__form {
			width: 100%;
		}
	}
</style>
