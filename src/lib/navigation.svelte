<header>
	<nav>
		<hr class="border-kartuli-orange  mt-0 md-min:mt-6" />
		<div class="grid grid-cols-6 md-min:grid-cols-8 justify-items-center items-center w-99 pr-0 ">
			<picture class="col-start-1 col-span-2 mb-4 md-min:col-span-3">
				<a href="/"><img src="../images/kartuli spirits 1.png" alt="Kartuli Logo" /></a>
			</picture>
			<picture class="col-start-3 col-span-2 md-min:col-start-4">
				<img
					class=" scale-125 rounded-full border-15 border-black"
					src="../images/crest_2.png"
					alt="Georgia Crest"
				/>
			</picture>
			<!-- mx-14 max-w-fit -->
			<div class="col-start-5 col-span-2 md-min:col-span-3 md-min:pr-4 ">
				<ul
					class="grid items-center sm-min:grid-cols-2 sm-min:gap-3 md-min:grid-cols-3 lg-min:flex"
				>
					<!-- <div> -->
					<li>
						<a
							class="font-futura no-underline text-white px-3 xl-min:pr-5 xl-min:px-0 xl-min:text-base uppercase tracking-wider font-medium not-italic text-reg items-center"
							href="../about">about</a
						>
					</li>
					<!-- </div> -->
					<!-- <div> -->
					<li>
						<a
							class="font-futura no-underline text-white px-3 xl-min:pr-5 xl-min:px-0 xl-min:text-base uppercase tracking-wider font-medium not-italic text-reg items-center"
							href="../news">news</a
						>
					</li>
					<!-- </div> -->
					<div class="dropdown">
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							class="font-futura no-underline text-white px-3 xl-min:pr-5 xl-min:px-0 xl-min:text-base  uppercase tracking-wider font-medium not-italic text-reg items-center"
							href="#"
						>
							portfolio</a
						>
						<div class="dropdown-content">
							<a href="../portfolio/artisan">artisan</a>
							<a href="../portfolio/premium">premium</a>
							<a href="../portfolio/flavored">flavored</a>
							<a href="../portfolio/international">international</a>
							<a href="../portfolio/brandy">brandy</a>
							<a href="../portfolio/liqueurs">liqueurs</a>
						</div>
					</div>
					<!-- <div> -->
					<li>
						<a
							class="font-futura no-underline text-white px-3 xl-min:pr-5 xl-min:px-0 xl-min:text-base t-2 uppercase tracking-wider font-medium not-italic text-reg items-center"
							href="../shop">shop</a
						>
					</li>
					<!-- </div> -->
					<div>
						<li class="flex">
							<img class=" my-2 pr-1" src="../images/shopping-cart 1.png" alt="cart icon" />
							<a
								class="font-futura no-underline text-white pt-1 xl-min:pt-0 uppercase tracking-wider font-medium not-italic text-reg xl-min:text-base items-center mt-1"
								href="../cart">cart</a
							>
						</li>
					</div>
				</ul>
			</div>
		</div>
		<hr class="border-kartuli-orange  mb-0" />
	</nav>
</header>

<style lang="scss">
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
		--kartuli-orange: #c88f34;
	}
	:global(html, body) {
		background-color: black;
		margin: 0;
		padding: 0;
	}
	:global(img) {
		margin: 0;
		padding: 0;
	}
	a:hover {
		color: var(--kartuli-orange);
	}
	.dropdown {
		position: relative;
		display: inline-block;
		.dropdown-content {
			display: none;
			position: absolute;
			background-color: var(--kartuli-orange);
			min-width: 275px;
			box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
			z-index: 1;
		}
	}

	.dropdown-content a {
		color: var(--white);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-transform: uppercase;
		font-size: 12px;
		line-height: 19px;
		letter-spacing: 0.05em;
	}
	.dropdown-content a:hover {
		background-color: var(--black);
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
