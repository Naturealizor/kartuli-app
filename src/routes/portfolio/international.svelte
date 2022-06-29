<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section
	class="grid bg-international-top bg-center md-min:bg-right bg-cover bg-no-repeat text-white grid-cols-4 col-span-3 sm-min:grid-cols-2 lg-min:grid-cols-8 min-h-[500px]"
>
	<div
		class="flex flex-col justify-center items-center text-center col-span-4 sm-min:col-span-1 lg-min:col-span-2 lg-min:col-start-2 lg-min:col mx-12 md-min:mx-2"
	>
		<h1 class="uppercase text-sm text-kartuli-peach font-futura mt-8">our collections</h1>
		<h2 class="uppercase text-2xl font-basker leading-8 ">international</h2>
		<p class="mt-7 font-josefin text-sm leading-6 font-light">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quasi odit perferendis
			laboriosam ad ducimus minus, omnis cum possimus, in iste exercitationem veritatis assumenda
			beatae odio mollitia sequi, qui temporibus.
		</p>
		<img src="../images/arrow-1.png" alt="downward arrow" class="place-content-center mt-8" />
		<a href="#collection" class="text-kartuli-peach mt-2 scroll-smooth">view collection</a>
	</div>
</section>
<section class=" text-white my-20" id="collection">
	<h3
		class="uppercase text-2xl font-basker leading-10 tracking-wider font-normal  text-kartuli-orange text-center mt-20"
	>
		internatinoal <br /> collection
	</h3>
	<!-- 				extreme pepper				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-4 mt-20  items-center justify-items-center">
		<img src="../images/international-pepper.jpg" alt="extreme pepper" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">extreme pepper</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/pepper" class="uppercase underline text-sm">learn more</a>
		</div>
		<!-- 				dragonfruit				 -->
		<img src="../images/international-dragonfruit.jpg" alt="dragonfruit vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">dragonfruit vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/dragonfruit" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					lingonberry				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-4 mt-20  items-center justify-items-center">
		<img src="../images/international-lingonberry.jpg" alt="lingonberry vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">lingonberry vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/lingonberry" class="uppercase underline text-sm">learn more</a>
		</div>

		<!-- 					feijoa					 -->
		<img src="../images/international-feijoa.jpg" alt="feijoa vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">feijoa vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/feijoa" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
	<!-- 					persimmon				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-4 mt-20  items-center justify-items-center">
		<img src="../images/international-persimmon.jpg" alt="persimmon vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">persimmon vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/persimmon" class="uppercase underline text-sm">learn more</a>
		</div>

		<!-- 					ginger zest					 -->
		<img src="../images/international-ginger.jpg" alt="ginger zest vodka" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">ginger zest vodka</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
			<a href="/product-descriptions/zest" class="uppercase underline text-sm">learn more</a>
		</div>
	</div>
</section>
<Footer />
