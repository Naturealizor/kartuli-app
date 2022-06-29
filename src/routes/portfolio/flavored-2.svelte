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
		<h2 class="uppercase text-2xl font-basker leading-8 ">flavored</h2>
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
		class="uppercase text-2xl font-basker leading-10 tracking-wider font-normal  text-kartuli-orange text-center my-20 pl-4"
	>
		flavor collection
	</h3>
	<!-- 				grapefruit				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-8 mt-20  items-center justify-items-center">
		<img src="../images/flavor-grapefruit.jpg" alt="grapefruit vodka" />
		<div class=" col-span-2 mt-20 pl-4">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">grapefruit vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit?
			</p>
			<a href="/product-descriptions/grapefruit" class="uppercase underline text-sm">learn more</a>
		</div>
		<!-- 				lemon mint					 -->
		<img src="../images/flavor-lemon-mint.jpg" alt="lemon mint vodka" />
		<div class=" col-span-2 mt-20 pl-4">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">lemon mint vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit?
			</p>
			<a href="/product-descriptions/lemon-mint" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					cucumber				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-8 mt-12  items-center justify-items-center">
		<img src="../images/flavored-cucumber.jpg" alt="cucumber vodka" />
		<div class=" col-span-2 mt-20 pl-4">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">cucumber vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit?
			</p>
			<a href="/product-descriptions/cucumber" class="uppercase underline text-sm">learn more</a>
		</div>

		<!-- 					watermelon					 -->

		<img src="../images/flavored-watermelon.jpg" alt="watermelon vodka" />
		<div class=" col-span-2 mt-20 pl-4">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">watermelon vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit?
			</p>
			<a href="/product-descriptions/watermelon" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					madagascar					 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-8 mt-12  items-center justify-items-center">
		<img src="../images/flavored-vanilla.jpg" alt="madagascar vanilla vodka" />
		<div class=" col-span-2 mt-20 pl-4">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">
				madagascar vanilla vodka
			</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit?
			</p>
			<a href="/product-descriptions/vanilla" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
</section>
<div>
	<!-- need to make a button redirecting to flavored.svelte -->
	<a
		href="./flavored"
		class="uppercase underline text-kartuli-orange text-center text-sm font-basker p-4"
	>
		previous page
	</a>
</div>
<Footer />
