<script>
	import { SITE_NAME } from '$lib/utils/constants';
</script>

<section class="main">
	<div class="main__content">
		<h1 class="main__headline">{SITE_NAME}</h1>
		<p>Trouble tracking your workouts? Let us help!</p>
		<div class="main__actions">
			<a href="/login" class="btn btn-primary">Login</a>
			<a href="/register" class="btn btn-primary-outline">Sign Up</a>
		</div>
	</div>
</section>

<style>
	.main {
		height: auto;
		width: 100%;
		margin-block-start: 200px;
	}

	p {
		margin-block-end: 2rem;
		color: var(--text1);
		font-size: 0.7rem;
		line-height: 1.5;
		letter-spacing: 0.08rem;
		max-width: 65%;
		text-align: center;
	}

	.main__headline {
		margin-block-end: 1rem;
		color: var(--text1);
		font-weight: 600;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 3rem;
	}

	.main__content {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.main__actions {
		padding-inline: 1rem;
		width: 100%;
	}

	@media screen and (min-width: 37.5em) {
		.main__content {
			width: 400px;
		}
	}

	@media screen and (min-width: 62.5em) {
		.main {
			margin-block-start: 300px;
		}
		.main__content {
			width: 400px;
			margin-inline: auto;
		}
	}
</style>
