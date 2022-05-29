<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import Carousel from '$lib/productCarousel.svelte';
</script>

<Nav />
<section class="grid bg-elite-top lg-min:bg-right bg-no-repeat min-h-fit sm-min:grid-cols-3 ">
	<div class="text-center px-8 sm-min:col-span-2">
		<h2 class="font-basker font-normal text-3xl text-kartuli-orange pt-6 uppercase">elite</h2>
		<h3>product description</h3>
		<p class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7">
			Chacha is far too more than other alcoholic drinks. Chacha for us is above all the other kinds
			of alcoholic beverages, because we get the very product in the country, acknowledged as a
			homeland of wine and vine. We use a unique method of distillation, the mysterious part of
			which gives us possibilities of inimitable unification of the Georgian antique tradition and
			contemporaneity precisely in our product.
		</p>
		<div class="grid grid-cols-2 gap-8">
			<div class="grid mb-6">
				<h3>abv</h3>
				<h3>calories</h3>
				<h3>available sizes</h3>
			</div>
			<div class="">
				<p class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7">
					40%
				</p>
				<p class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7">
					70 per 10g alcohol
				</p>
				<div class="abvSizes">
					<p
						class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7"
					>
						1.75 ml
					</p>
					<p
						class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7"
					>
						750 ml
					</p>
					<p
						class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7"
					>
						1.75 ml
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="grid bg-elite-second bg-left bg-no-repeat min-h-full sm-min:grid-cols-4">
	<div class="col-start-3 col-span-2 text-center">
		<h2>elite</h2>
		<h3>vodka</h3>
		<h4>tasting notes</h4>
		<p
			class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7 text-left"
		>
			Chacha is far too more than other alcoholic drinks. Chacha for us is above all the other kinds
			of alcoholic beverages, because we get the very product in the country, acknowledged as a
			homeland of wine and vine.
		</p>
		<h4>finish</h4>
		<p
			class="text-white font-josefin font-extralight leading-6 text-base tracking-wider mt-7 text-left"
		>
			Chacha is far too more than other alcoholic drinks. Chacha for us is above all the other kinds
			of alcoholic beverages, because we get the very product in the country, acknowledged as a
			homeland of wine and vine.
		</p>
	</div>
</section>
<Carousel />

<Footer />

<style>
	h3,
	h4 {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 21px;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		margin-top: 2em;
		color: #c88f34;
	}
	.abvSizes {
		display: grid;
		grid-template-columns: 0.25fr 0.25fr 0.25fr;
		margin-top: 1em;
	}
</style>
