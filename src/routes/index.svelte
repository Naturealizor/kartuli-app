<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import Carousel from '$lib/productCarousel.svelte';
	import { fade, fly } from 'svelte/transition';

	function redirect() {
		window.location.href = 'portfolio/artisan';
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Baskervville&family=Josefin+Sans:wght@300&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<video
	muted
	loop
	class="md:hidden  bg-center bg-fixed bg-cover w-full"
	src="./images/2022-04-29 21-20-00.mp4"
/>
<Nav />
<main>
	<section class="bg-kartuli-fig bg-no-repeat bg-center bg-cover h-[517px]">
		<div class="grid grid-cols-4 ">
			<div class="m-5 col-span-2">
				<h2
					class="font-futura font-medium text-center text-base leading-5 uppercase tracking-wider text-white"
				>
					introducing kartuli's new
				</h2>
				<p
					class="font-basker font-normal text-3xl tracking-wider text-center uppercase text-kartuli-orange p-1 m-3"
				>
					fig vodka
				</p>
				<p class="font-josefin font-light text-center not-italic leading-6 text-white">
					It's sweetness is subtle enough to be mixed <br />and matched to enhance any of your
					favorite classic cocktail recipes.
				</p>
				<div class="btnWrapper">
					<button
						class="bg-white text-black  py-2 px-4 lg:px- border border-black hover:border-kartuli-orange rounded-none align-middle mt-4 uppercase font-futura not-italic font-medium text-xs leading-3 tracking-wider justify-center"
						type="button"><a href="./shop">shop now</a></button
					>
				</div>
			</div>
		</div>
	</section>

	<Carousel />

	<section class="section-3">
		<div class="flex flex-col items-center ">
			<h2
				class="font-basker font-normal text-center tracking-wider leading-9 text-2xl text-kartuli-orange mt-5 uppercase px-5"
			>
				innovative georgian craftsmanship
			</h2>
			<p
				class="font-josefin text-xl text-black text-center px-5 sm-min:px-8 md-min:px-24 lg-min:px-36 mt-6"
			>
				Kartuli Vodka is a luxurious ultra-premium vodka made from fine Georgian grapes to be the
				toast of modern luxury.
			</p>
			<button
				class="bg-white text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded-none align-middle mt-4 uppercase text-sm"
				>learn more</button
			>
		</div>
	</section>
	<section class="grid grid-cols-1 sm-min:grid-cols-3 gap-2 gap-y-2 my-2 w-full">
		<picture class="col-span-1 bg-cover">
			<img src="./images/drink-collection-1-md.jpg" alt="citrus drink" />
		</picture>
		<picture class="col-span-1 bg-cover">
			<img src="./images/drink-collection-2-md.jpg" alt="pink fizzy drink" />
		</picture>
		<picture>
			<img src="./images/drink-collection-3-md.jpg" alt="cucumber drink" />
		</picture>
		<picture class="col-span-1 sm-min:col-span-2 bg-home-grid-4-xl">
			<!-- <img src="./images/drink-collection-big-md.jpg" alt="friends cheering drinks" /> -->
		</picture>
		<picture>
			<div class=" bg-kartuli-orange grid-cols-3 grid-rows-2 relative">
				<img class="" src="./images/drink-collection-text.jpg" alt="rum and coke" />
				<div class="grid grid-cols-2">
					<h3 class="capitalize font-basker text-white text-2xl sm-min:text-base px-4">
						kartuli drink collection
					</h3>
					<!-- xl:bottom-2   xl:py-2 xl:px-3 -->
					<button
						on:click={redirect}
						class="absolute right-2 border my-2 py-4 sm-min:py-2  font-futura text-base sm-min:text-tiny uppercase border-black"
						>drink recipies</button
					>
				</div>
			</div>
		</picture>
	</section>
	<Footer />
</main>

<style lang="scss">
	.btnWrapper {
		text-align: center;
	}

	.section-3 {
		background-image: url(/images/vineyard-2.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		height: 517px;
	}
</style>
