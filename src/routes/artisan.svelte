<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section class="flex flex-col bg-copper-still bg-fit bg-right min-h-max bg-no-repeat text-white">
	<div class="grid justify-items-center w-1/3 ml-16 my-24 items-center text-center">
		<h1 class="uppercase text-xl text-kartuli-orange font-futura">our collections</h1>
		<h2 class="uppercase text-3xl font-basker leading-8 ">artisan</h2>
		<p class="mt-7 font-josefin">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi odit perferendis
			laboriosam ad ducimus minus, omnis cum possimus, in iste exercitationem veritatis assumenda
			beatae odio mollitia sequi, qui temporibus.
		</p>
		<!-- <span class="scale-150">&#8595;</span> -->
		<!-- <Icon class="scale-150 text-8xl" data={longArrowDown} /> -->
		<img src="./images/arrow-1.png" alt="downward arrow" class="place-content-center mt-5" />
		<a href="#collection">view collection</a>
	</div>
</section>
<section class=" text-white" id="collection">
	<h3 class="uppercase text-3xl font-basker leading-8 text-kartuli-orange text-center">
		artisan collection
	</h3>
	<div class="container grid grid-cols-6 ml-14 items-center">
		<img src="./images/artisan-elite.jpg" alt="artisan elite" />
		<div class="">
			<h4 class="capitalize text-kartuli-orange text-2xl mb-5">elite</h4>
			<p class="font-josefin col-span-2 col-start-2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase">learn more</a>
		</div>
	</div>
</section>
<Footer />
