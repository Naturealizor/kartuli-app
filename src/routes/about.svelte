<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';

	// let {target} = "/the video"
</script>

<Nav />
<main>
	<section class="bg-white">
		<p class="px-36 py-20 font-josefin text-center text-xl text-black">
			Kartuli was established in 2012. Although the way we went through heretofore may be called a
			preparative period. The period, when it was being formed a perfect model and contents. It took
			three years for selecting the best service - staff for our organization. The very staff,
			consisted of the professional and experienced persons, started to form traditional
			manufacturing, as it is the production of Wine and Chacha made from the particular variety of
			grapes. We summed up many years’ experience and concentrated the whole knowledge, that had
			given us an opportunity of producing this unique product. With great delight we’d like to
			inform you, that the scientist-technologists and practitioner-technologists.
		</p>
	</section>
	<!-- 			1			 -->
	<div class="bg-black flex">
		<h1 class="text-kartuli-orange uppercase text-center text-4xl my-5 mx-auto font-basker">
			introduction to kartuli
		</h1>
		<p class="text-white my-6 pr-2 capitalize">watch video</p>
		<a href="/" class="pr-8 py-4"><img src="../images/about-watch-btn.png" alt="play button" /></a>
	</div>
	<!-- 			2				 -->
	<div>
		<picture><img src="../images/about-1.jpg" alt="church on a hill" /></picture>
	</div>

	<div class="bg-black flex">
		<h2 class="text-kartuli-orange uppercase text-center text-4xl my-5 mx-auto font-basker">
			distillation proccess
		</h2>
		<p class="text-white my-6 pr-2">watch video</p>
		<a href="/" class="pr-8 py-4"><img src="../images/about-watch-btn.png" alt="play button" /></a>
	</div>
	<div>
		<picture><img src="../images/about-2.jpg" alt="distillery" /></picture>
	</div>
	<!-- 			3			 -->
	<div class="bg-black flex">
		<h2 class="text-kartuli-orange uppercase text-center text-4xl my-5 mx-auto font-basker">
			introduction to kartuli
		</h2>
		<p class="text-white my-6 pr-2">watch video</p>
		<a href="/" class="pr-8 py-4"><img src="../images/about-watch-btn.png" alt="play button" /></a>
	</div>
	<div>
		<picture><img src="../images/about-3.jpg" alt="water falling" /></picture>
	</div>
</main>
<Footer />
