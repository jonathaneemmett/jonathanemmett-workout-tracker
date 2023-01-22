<script></script>

<div class="auth">
	<slot />
</div>

<style>
	.auth {
		height: auto;
		margin-block-start: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	@media screen and (max-width: 37.5em) {
		.auth {
			padding-inline: 1rem;
		}
	}
</style>
