<script></script>

<div class="auth">
	<slot />
</div>

<style>
	.auth {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media screen and (max-width: 37.5em) {
		.auth {
			padding-inline: 1rem;
		}
	}
</style>
