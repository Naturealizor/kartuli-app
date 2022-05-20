<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section class="flex flex-col bg-copper-still bg-contain bg-right h-full bg-no-repeat text-white">
	<div class="grid justify-items-center w-1/3 ml-16 my-36 items-center text-center">
		<h1 class="uppercase text-base text-kartuli-peach font-futura mb-4">our collections</h1>
		<h2 class="uppercase text-3xl font-basker leading-8 ">artisan</h2>
		<p class="mt-7 font-josefin text-base leading-6 font-light">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi odit perferendis
			laboriosam ad ducimus minus, omnis cum possimus, in iste exercitationem veritatis assumenda
			beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste exercitationem
			veritatis assumenda beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste
			exercitationem veritatis assumenda beatae odio mollitia
		</p>
		<img src="./images/arrow-1.png" alt="downward arrow" class="place-content-center mt-12" />
		<a href="#collection" class="text-kartuli-peach mt-2">view collection</a>
	</div>
</section>
<section class=" text-white" id="collection">
	<h3
		class="uppercase text-3xl font-basker leading-10 tracking-wider font-normal scroll-smooth text-kartuli-orange text-center mt-20"
	>
		artisan <br /> collection
	</h3>
	<div class="grid grid-cols-6 ml-14 mt-28  items-center justify-items-center">
		<img src="./images/artisan-elite.jpg" alt="artisan elite" />
		<div class=" col-span-2">
			<h4 class="capitalize text-kartuli-orange text-2xl mb-5">elite</h4>
			<p class="grid font-josefin text-base leading-6 font-light pr-20">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase">learn more</a>
		</div>
		<img src="./images/artisan-elite.jpg" alt="artisan elite" />
		<div class=" col-span-2">
			<h4 class="capitalize text-kartuli-orange text-2xl mb-5">elite</h4>
			<p class="grid font-josefin text-base leading-6 font-light pr-20">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase">learn more</a>
		</div>
	</div>
	<div class="grid grid-cols-6 ml-14 mt-28  items-center justify-items-center">
		<img src="./images/artisan-elite.jpg" alt="artisan elite" />
		<div class=" col-span-2">
			<h4 class="capitalize text-kartuli-orange text-2xl mb-5">elite</h4>
			<p class="grid font-josefin text-base leading-6 font-light pr-20">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase">learn more</a>
		</div>
		<img src="./images/artisan-elite.jpg" alt="artisan elite" />
		<div class=" col-span-2">
			<h4 class="capitalize text-kartuli-orange text-2xl mb-5">elite</h4>
			<p class="grid font-josefin text-base leading-6 font-light pr-20">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase">learn more</a>
		</div>
	</div>
</section>
<Footer />
