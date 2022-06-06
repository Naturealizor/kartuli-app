<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Nav />
<main>
	<section>
		<img src="../images/contact-top.jpg" alt="woman looking at a bottle of wine" />
	</section>
	<section>
		<h1
			class="uppercase font-basker text-kartuli-orange text-xl sm-min:text-2xl md-min:text-2xl mt-8 text-center"
		>
			contact <br /> us
		</h1>
		<div class="grid grid-cols-2 sm-min:grid-cols-3 md-min:grid-cols-4 m-6 justify-items-center">
			<div class="m-2">
				<h3 class="text-kartuli-orange text-base capitalize font-basker">
					los angeles, california
				</h3>
				<p class="text-white text-tiny font-futura uppercase">
					corporate office / us & asia market sales
				</p>
				<br />
				<p class="text-white text-xs font-josefin-lite capitalize ">
					312 south beverly drive suite 3722
				</p>
				<p class="text-white text-xs font-josefin-lite capitalize ">
					beverly hills, california 90212
				</p>
			</div>
			<div class="m-2">
				<h3 class="text-kartuli-orange text-base capitalize font-basker">tbilisi, georgia</h3>
				<p class="text-white text-tiny font-futura uppercase">
					product development & manufacturing
				</p>
				<br />
				<p class="text-white text-xs font-josefin-lite capitalize">digomi 8, sikharuli street #1</p>
				<p class="text-white text-xs font-josefin-lite capitalize">tbilisi 0158 georgia</p>
			</div>
			<div class="m-2">
				<h3 class="text-kartuli-orange text-base capitalize font-basker">
					los angeles, california
				</h3>
				<p class="text-white text-tiny font-futura uppercase">
					corporate office / us & asia market sales
				</p>
				<br />
				<p class="text-white text-xs font-josefin-lite capitalize">
					312 south beverly drive suite 3722
				</p>
				<p class="text-white text-xs font-josefin-lite capitalize">
					beverly hills, california 90212
				</p>
			</div>
			<div class="m-2">
				<h3 class="text-kartuli-orange text-base capitalize font-basker">
					los angeles, california
				</h3>
				<p class="text-white text-tiny font-futura uppercase">
					corporate office / us & asia market sales
				</p>
				<br />
				<p class="text-white text-xs font-josefin-lite capitalize">
					312 south beverly drive suite 3722
				</p>
				<p class="text-white text-xs font-josefin-lite capitalize">
					beverly hills, california 90212
				</p>
			</div>
		</div>
	</section>
	<section>
		<img src="../images/contact-mid.jpg" alt="overlooking a city" />
	</section>
	<section class="bg-kartuli-orange-dark">
		<h2 class="text-center text-black font-basker text-2xl uppercase py-4">send us a message</h2>
	</section>
</main>
<Footer />
