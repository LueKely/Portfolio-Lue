<template>
	<footer>
		<div class="logo-wrapper">
			<img src="../assets/logo.svg" alt="logo" />
			<p>
				Lue <br />
				Anunciacion.
			</p>
			<hr />
			<div>
				<h2>Contact Me</h2>
				<div class="details-wrapper">
					<p>Github: &nbsp;</p>
					<a target="_blank" href="https://github.com/LueKely">@Lue Kely</a>
				</div>
				<div class="details-wrapper">
					<p>Email:</p>
					<p class="email">&nbsp;luebuiss@gmail.com</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	.details-wrapper {
		display: flex;
	}

	hr {
		border: 1px solid var(--clr-brown-300);
		width: 100%;
	}
	footer {
		background-color: var(--clr-brown-200);

		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		flex-direction: column;
		padding-block: 10px;
		padding-inline: 20px;
	}

	.link-wrapper {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;

		gap: 30px;
	}
	.underline-wrapper {
		border-top: 1px solid var(--clr-brown-300);
	}
	.email {
		text-decoration: underline;
	}

	.contact-me {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		gap: 20px;
	}

	.logo-wrapper {
		display: flex;
		gap: 10px;
		justify-items: center;
		align-items: center;
		width: 100%;
	}

	.logo-wrapper > img {
		aspect-ratio: 1/1;
		width: clamp(1.2rem, 5vw, 2.5rem);
	}
	.logo-wrapper > p {
		font-family: var(--ff-bold);
	}
	.title {
		font-family: var(--ff-regular);
		font-size: var(--fs-m);
	}
	p,
	a {
		font-size: var(--fs-sm);
	}
	h2 {
		font-size: var(--fs-m);
	}
</style>
