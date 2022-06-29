<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section
	class="grid bg-flavored-top bg-left md-min:bg-right md-min:bg-contain bg-no-repeat text-white grid-cols-4 col-span-3 sm-min:grid-cols-2 lg-min:grid-cols-8 lg-min:min-h-[500px]"
>
	<div
		class="flex flex-col justify-center items-center text-center col-span-4 sm-min:col-span-1 lg-min:col-span-2 lg-min:col-start-2 lg-min:col mx-12 md-min:mx-2"
	>
		<h1 class="uppercase text-sm text-kartuli-peach font-futura mt-8">our collections</h1>
		<h2 class="uppercase text-2xl font-basker leading-8 ">artisan</h2>
		<p class="mt-7 font-josefin text-sm leading-6 font-light">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi odit perferendis
			laboriosam ad ducimus minus, omnis cum possimus, in iste exercitationem veritatis assumenda
			beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste exercitationem
			veritatis assumenda beatae odio mollitia sequi, qui temporibus. omnis cum possimus, in iste
			exercitationem veritatis assumenda beatae odio mollitia
		</p>
		<img src="../images/Arrow-1.png" alt="downward arrow" class="place-content-center mt-8" />
		<a href="#collection" class="text-kartuli-peach mt-2 scroll-smooth">view collection</a>
	</div>
</section>

<!-- 				starting bottom section -->
<section class=" text-white my-20" id="collection">
	<h3
		class="uppercase text-2xl font-basker leading-10 tracking-wider font-normal  text-kartuli-orange text-center mt-20"
	>
		flavor collection
	</h3>
	<!-- 				pomegranate				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-14 mt-28  items-center justify-items-center">
		<img src="../images/flavor-pmegranate.jpg" alt="pomegranate vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">pomegranate vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/pomegranate" class="uppercase underline text-sm">learn more</a>
		</div>
		<!-- 				fig					 -->
		<img src="../images/flavor-fig.jpg" alt="fig vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">fig vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/fig" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					black cherry				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-14 mt-28  items-center justify-items-center">
		<img src="../images/flavor-black-cherry.jpg" alt="black cherry" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">black cherry</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/black-cherry" class="uppercase underline text-sm">learn more</a
			>
		</div>

		<!-- 					peach					 -->

		<img src="../images/flavor-peach.jpg" alt="peach vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">peach vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/peach" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					pear					 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-14 mt-28  items-center justify-items-center">
		<img src="../images/flavored-pear.jpg" alt="pear vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">pear vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/pear" class="uppercase underline text-sm">learn more</a>
		</div>
		<!-- 					mandarin					 -->
		<img src="../images/flavor-mandarin.jpg" alt="mandarin vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">peach mandarin vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/learn-more" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
</section>
<div>
	<!-- need to make a button redirecting to flavored.svelte -->
	<a
		href="./flavored-2"
		class="flex justify-end uppercase underline text-kartuli-orange text-center text-sm font-basker p-4"
	>
		next page
	</a>
</div>
<Footer />
