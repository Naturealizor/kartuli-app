<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section class="flex bg-copper-still bg-right h-580px bg-no-repeat text-white">
	<div class="grid justify-items-center w-1/3 ml-16 my-12 items-center text-center">
		<h1 class="uppercase text-sm text-kartuli-peach font-futura mb-4">our collections</h1>
		<h2 class="uppercase text-2xl font-basker leading-8 ">kartuli liqueurs</h2>
		<p class="mt-7 font-josefin text-sm leading-6 font-light">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi odit perferendis
			laboriosam ad ducimus minus, omnis cum possimus, in iste exercitationem veritatis assumenda
			beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste exercitationem
			veritatis assumenda beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste
			exercitationem veritatis assumenda beatae odio mollitia
		</p>
		<img src="../images/arrow-1.png" alt="downward arrow" class="place-content-center mt-8" />
		<a href="#collection" class="text-kartuli-peach mt-2 scroll-smooth">view collection</a>
	</div>
</section>
<section class=" text-white my-20" id="collection">
	<h3
		class="uppercase text-2xl font-basker leading-10 tracking-wider font-normal  text-kartuli-orange text-center mt-20"
	>
		kartuli liqueurs
	</h3>
	<!-- 				tropical passion				 -->
	<div class="grid grid-cols-6 ml-14 mt-28  items-center justify-items-center">
		<img src="../images/liqueur-tropical.jpg" alt="tropical passion" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">tropical passion</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-tiny">learn more</a>
		</div>
		<!-- 				strawberry					 -->
		<img src="../images/liqueur-strawberry.jpg" alt="strawberry wild" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">strawberry wild</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-tiny">learn more</a>
		</div>
	</div>
	<!-- 					apricot elixer				 -->
	<div class="grid grid-cols-6 ml-14 mt-28  items-center justify-items-center">
		<img src="../images/liqueur-apricot.jpg" alt="apricot elixer vibes" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">apricot elixer</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-tiny">learn more</a>
		</div>

		<!-- 					eastern					 -->
		<img src="../images/liqueur-zen.jpg" alt="eastern zen" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">eastern zen</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-tiny">learn more</a>
		</div>
	</div>
	<!-- 									cocoa 					 -->
	<div class="grid grid-cols-6 ml-14 mt-28  items-center justify-items-center">
		<img src="../images/liqueur-cocoa.jpg" alt="cocoa bean liqueur" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">cocoa bean</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-tiny">learn more</a>
		</div>
	</div>
</section>
<Footer />
