<script>
	import { enhance } from '$app/forms';
</script>

<h1 class="register__headline">Register</h1>
<form action="?/register" class="form" method="POST" use:enhance>
	<div class="form__control multi__input">
		<label for="firstName" class="visually-hidden">First Name</label>
		<input type="text" name="firstName" id="firstName" placeholder="First Name" />
		<label for="lastName" class="visually-hidden">Last Name</label>
		<input type="text" name="lastName" id="lastName" placeholder="Last Name" />
	</div>
	<div class="form__control">
		<label for="email" class="visually-hidden">Email</label>
		<input type="email" name="email" id="email" placeholder="Email" />
	</div>
	<div class="form__control">
		<label for="password" class="visually-hidden">Password</label>
		<input type="password" name="password" id="password" placeholder="Password" />
	</div>
	<div class="form__control">
		<label for="password_confirmation" class="visually-hidden">Password Confirmation</label>
		<input
			type="password"
			name="password_confirmation"
			id="password_confirmation"
			placeholder="Password Confirmation"
		/>
	</div>
	<div class="form__control">
		<button type="submit" class="btn btn-primary-outline">Register</button>
	</div>
	<div class="form__switch">
		Already have an account? <a href="/login">Login!</a>
	</div>
</form>

<style>
	.register__headline {
		margin-block-end: 1rem;
		color: var(--text1);
		font-family: 'Open Sans', sans-serif;
	}
</style>
