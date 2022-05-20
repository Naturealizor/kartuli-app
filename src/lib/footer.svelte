<footer class="mb-11 mt-7">
	<hr class="border-kartuli-orange border mt-8" />
	<div class="grid grid-cols-10 justify-items-center items-center text-xs">
		<img
			class="scale-125 col-span-2 ml-28 mt-8"
			src="./images/kartuli spirits 1.png"
			alt="Kartuli Logo"
		/>
		<div class=" gap-2  justify-center items-center text-center">
			<ul class="anchor-links">
				<li class="flex ">
					<a class="text-center p-5 text-tiny" href="./team">team</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny " href="./distillery">distillery</a>
				</li>
				<li class="flex ">
					<a class="p-5 text-left text-tiny " href="./kartuli-club">kartuili club</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny " href="./ambassadors">ambassadors</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 botext-tiny " href="./press">press</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny lg:text-xs " href="./media-kit">media kit</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny " href="./distribution">distribution</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny " href="./legal">legal</a>
				</li>
				<li class="flex ">
					<a class="text-center p-5 text-tiny " href="./contact-us">contact</a>
				</li>
			</ul>
		</div>
		<div class="footer-right">
			<h5
				class="text-kartuli-orange text-center font-futura text-base uppercase leading-5 font-medium"
			>
				social media
			</h5>
			<div class="flex m-0 p-0 mx-8 my-4">
				<a href="#"><img src="./images/facebook.png" alt="facebook" /></a>
				<a href="#"><img src="./images/instagram.png" alt="instagram" /></a>
				<a href="#"><img src="./images/linkedin.png" alt="linkedin" /></a>
			</div>
			<div class="flex">
				<a href=""
					><p class="capitalize font-futura text-kartuli-orange text-tiny">
						please drink responsibly
					</p></a
				>
				<a href="./site-map"
					><p class="capitalize font-futura text-kartuli-orange text-tiny">site map</p></a
				>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	a {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 13px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--white);
		padding: 1em;
		text-decoration: none;
	}

	.footer-right {
		grid-column: 9 / span 2;

		h5 {
			margin-top: 8%;
		}
		a,
		p {
			margin-right: 0.5rem;
			// margin-top: 0.5rem;
			padding: 0;
		}
	}

	.anchor-links {
		display: flex;
		a {
			// padding: 1rem 1rem;
			text-align: center;
		}
	}
</style>
