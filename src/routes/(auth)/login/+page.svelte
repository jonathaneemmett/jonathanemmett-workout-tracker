<script>
	import { enhance } from '$app/forms';
	import { SITE_NAME } from '$lib/utils/constants';
</script>

<h1 class="login__headline">{SITE_NAME}</h1>
<p>Login and let's do this!</p>
<form action="?/login" method="POST" class="form" use:enhance>
	<div class="form__control">
		<label for="email" class="visually-hidden">Email</label>
		<input type="email" name="email" id="email" placeholder="Email" />
	</div>
	<div class="form__control">
		<label for="password" class="visually-hidden">Password</label>
		<input type="password" name="password" id="password" placeholder="Password" />
	</div>
	<div class="form__control">
		<button type="submit" class="btn btn-primary">Login</button>
	</div>
	<div class="form__switch">
		Don't have an account? <a href="/register">Register!</a>
	</div>
</form>

<style>
	.login__headline {
		margin-block-end: 1rem;
		color: var(--text1);
		font-weight: 400;
		font-family: 'Space Grotesk', sans-serif;
	}

	p {
		margin-block-end: 2rem;
		color: var(--text1);
		font-size: 0.8rem;
		line-height: 1.5;
		letter-spacing: 0.08rem;
		max-width: 75%;
		text-align: center;
	}
</style>
