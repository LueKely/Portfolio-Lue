<template>
	<nav>
		<div>
			<p>
				Lue <br />
				Anunciacion
			</p>
		</div>
		<ul>
			<li><a href="#home">Home</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#about">About</a></li>
		</ul>
		<button>Check My CV</button>
	</nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	nav {
		@include break.phone {
			background-color: red;
		}
		position: sticky;
		top: 0;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
	}
</style>
