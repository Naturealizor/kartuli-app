<script>
</script>

<header>
	<nav>
		<hr />
		<div class="navContainer">
			<picture>
				<a href="/"
					><img class="navImg" src="./images/kartuli spirits 1.png" alt="Kartuli Logo" /></a
				>
			</picture>
			<picture>
				<img class="navImg" src="./images/crest_2.png" alt="Georgia Crest" />
			</picture>
			<ul class="navLinks">
				<div>
					<li><a class="navLinks-a" href="./about-us">about</a></li>
				</div>
				<div>
					<li><a class="navLinks-a" href="./news">news</a></li>
				</div>
				<div>
					<li>
						<a class="navLinks-a" href="./portfolio">portfolio</a>
					</li>
				</div>
				<div>
					<li><a class="navLinks-a" href="./shop">shop</a></li>
				</div>
				<div>
					<li><a class="navLinks-a" href="./cart">cart</a></li>
				</div>
			</ul>
		</div>
		<hr />
	</nav>
</header>

<style>
	:root {
		/* Define Colors as colors / */
		--green: #00eb0c;
		--red: #e43c1e5e;
		--orange: hsl(17, 97%, 43%);
		--yellow: #fde24f;
		--black: #000000;
		--lightBlue: #80bfed;
		--blue: #0066ff;
		--darkBlue: #00214d;
		--grey: #2a2e35;
		--lightGrey: #f2f4f6;
		--businessGrey: #e5ebf1;
		--purple: #410b62;
		--darkPurple: #321953;
		--lightPurple: #9050cc;
		--complenentarySky: #fad7b6;
		--white: #ffffff;
		--hrColor: #c88f34;
	}
	:global(html) {
		background-color: #000000;
		margin: 0 auto;
	}
	nav {
		background-color: black;
		color: white;
	}

	.navContainer {
		box-sizing: border-box;
		display: grid;
		grid-template-rows: minmax(100px, max-content);
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		justify-items: center;
	}

	.navImg {
		object-fit: cover;
		object-position: 50% 50%;
		width: 100%;
	}

	.navLinks {
		display: flex;
	}
	ul {
		list-style: none;
	}
	.navLinks-a {
		text-decoration: none;
		/* text-transform: uppercase; */
		color: var(--white);
		/* font-size: 16px; */
		padding: 10px;
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 19px;
		/* identical to box height */
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.navLinks-a:hover {
		color: red;
	}

	nav hr {
		color: var(--hrColor);
		border: solid 1px;
		margin: 0;
	}
</style>
