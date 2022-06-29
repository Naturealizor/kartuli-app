<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Nav />
<main>
	<!-- section with a full width image and a div with text -->
	<section class="bg-news-banner bg-cover bg-no-repeat bg-center min-h-[500px]">
		<div class="pt-24 mx-12 md-min:mx-4 grid grid-cols-4 xl-min:grid-cols-6">
			<div
				class="flex flex-col justify-center col-span-4 md-min:col-span-3 md-min:col-start-2 lg-min:col-span-2 lg-min:col-start-3 xl-min:col-start-4"
			>
				<p class="text-center text-kartuli-orange font-futura text-xl uppercase ">
					stay in the loop
				</p>
				<h1 class="text-center text-3xl font-basker">
					<span class="text-white uppercase leading-5 tracking-wider">Kartuli</span>
					<span class="text-white uppercase leading-5 tracking-wider">News</span>
				</h1>
				<p class="text-center text-lg text-white font-josefin-lite pt-5 px-2 md-min:px-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget
					consectetur sagittis, nisl lobortis nisi, euismod nisl nisi euismod nisl.
				</p>
			</div>
		</div>
	</section>
	<!-- Blog style content starts here -->
</main>
<Footer />
