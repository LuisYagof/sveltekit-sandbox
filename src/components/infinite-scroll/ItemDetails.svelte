<script lang="ts">
</script>

<div class="details">
	<h3>
		<slot name="heading" />
	</h3>
	<slot name="text" />
</div>

<style>
	.details {
		flex: 1;
		margin-left: 1rem;

		& h3 {
			font-size: 1.2rem;
			font-weight: 500;
			margin-bottom: 0.4rem;
			color: var(--color-text);
		}
	}
</style>
