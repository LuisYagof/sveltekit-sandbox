<script lang="ts">
</script>

<div class="spinner">
	<div class="lds-dual-ring"></div>
</div>

<style>
	.spinner {
		position: absolute;
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.spinner .lds-dual-ring {
		width: 80px;
		height: 80px;
		z-index: 2;
	}

	.spinner .lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid var(--color-theme-1);
		border-color: var(--color-theme-1) transparent var(--color-theme-1) transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}

	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
