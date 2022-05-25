<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
	import Carousel from '$lib/productCarousel.svelte';
	import { fade, fly } from 'svelte/transition';
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
	<section class="section-1">
		<div
			class="grid auto-col-max py-28 lg:py-26 xl:py-22 px-24 lg:px-5 xl:px-3 w-2/5 lg:w-1/2 xl:w-3/5"
		>
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
	</section>

	<Carousel />

	<section class="section-3">
		<div class="flex flex-col items-center ">
			<h2 class="centeredSectionTitle">innovative georgian craftsmanship</h2>
			<p
				class="font-josefin text-xl font-light leading-7 text-white text-center w-2/5 mx-auto mt-8"
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
	<section class="grid grid-cols-3 gap-5 gap-y-5 mt-5 mb-2 w-full">
		<picture class="col-span-1 bg-cover">
			<img src="./images/drink-collection-1-md.jpg" alt="citrus drink" />
		</picture>
		<picture>
			<img src="./images/drink-collection-2-md.jpg" alt="pink fizzy drink" />
		</picture>
		<picture>
			<img src="./images/drink-collection-3-md.jpg" alt="cucumber drink" />
		</picture>
		<picture class="col-span-2 my-0">
			<img src="./images/drink-collection-big2.jpg" alt="friends cheering drinks" />
		</picture>
		<picture>
			<div class=" bg-kartuli-orange grid-cols-3 grid-rows-2 relative">
				<img class="" src="./images/drink-collection-text.jpg" alt="rum and coke" />
				<h3
					class="capitalize font-basker text-white text-3xl  xl:text-2xl lg:text-base absolute bottom-5 xl:bottom-1 left-4 z-20"
				>
					kartuli drink collection
				</h3>
				<!-- xl:bottom-2   xl:py-2 xl:px-3 -->
				<button
					class="absolute right-6 xl:right-4  bottom-4 border py-3 font-futura text-sm uppercase border-black"
					>drink recipies</button
				>
			</div>
		</picture>
	</section>
	<Footer />
</main>

<style lang="scss">
	.btnWrapper {
		text-align: center;
	}

	.section-1 {
		// class="bg-kartuli-fig bg-cover bg-fixed md:bg-scroll bg-no-repeat md:bg-cover h-517px bg-center"
		background-image: url(/images/homePage_Section2.jpg);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 517px;
	}

	.section-3 {
		background-image: url(/images/vineyard-2.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		background-attachment: scroll;
		height: 517px;
	}

	.centeredSectionTitle {
		text-align: center;
		color: #c88f34;
		margin-top: 5%;
		text-transform: uppercase;
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 37px;
		letter-spacing: 0.05em;
	}
</style>
