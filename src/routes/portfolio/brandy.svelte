<script>
	import Nav from '$lib/navigation.svelte';
	import Icon from 'svelte-awesome';
	import Footer from '$lib/footer.svelte';
	import longArrowDown from 'svelte-awesome/icons/longArrowDown';
</script>

<Nav />
<section
	class="grid bg-brandy-top bg-right sm-min:min-h-full bg-no-repeat text-white grid-cols-3 sm-min:grid-cols-2"
>
	<div
		class="grid grid-cols-1 sm:min-grid-cols-2  justify-items-center   items-center text-center col-span-2 sm-min:col-span-1 mx-12"
	>
		<h1 class="uppercase text-sm text-kartuli-peach font-futura mb-4">our collections</h1>
		<h2 class="uppercase text-2xl font-basker leading-8 ">brandy/cognac</h2>
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
		grande cask brandy
	</h3>
	<!-- 				hors D'Age				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-14 mt-28  items-center justify-items-center">
		<img src="../images/brandy-hors.jpg" alt="Hors D'Age bottle" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker capitalize text-kartuli-orange text-xl mb-5">hors D'Age</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/horsdage" class="uppercase underline text-tiny">learn more</a>
		</div>
		<!-- 				xo					 -->
		<img src="../images/brandy-xo.jpg" alt="XO brandy" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker uppercase text-kartuli-orange text-xl mb-5">xo</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/xo" class="uppercase underline text-tiny">learn more</a>
		</div>
	</div>
	<!-- 					vsop				 -->
	<div class="grid grid-cols-3 sm-min:grid-cols-6 mx-14 mt-28  items-center justify-items-center">
		<img src="../images/brandy-vsop.jpg" alt="VSOP brandy" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker uppercase text-kartuli-orange text-xl mb-5">vsop</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/vsop" class="uppercase underline text-tiny">learn more</a>
		</div>

		<!-- 					VS					 -->
		<img src="../images/brandy-vs.jpg" alt="VS brandy" />
		<div class=" col-span-2 mt-20">
			<h4 class="font-basker uppercase text-kartuli-orange text-xl mb-5">vs</h4>
			<p class="grid font-josefin text-sm leading-6 font-light pr-4 pb-8">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, fugit? Ipsam possimus
				eos esse dolores, Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
				fugit? Ipsam possimus eos esse dolores,
			</p>
			<a href="/product-descriptions/vs" class="uppercase underline text-tiny">learn more</a>
		</div>
	</div>
</section>
<Footer />
