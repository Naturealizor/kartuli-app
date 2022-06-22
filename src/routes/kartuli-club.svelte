<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Nav />
<main>
	<section
		class="grid grid-cols-4 md-min:grid-cols-6 xl-min:grid-cols-12 bg-club-top bg-cover bg-no-repeat bg-center"
	>
		<div
			class="p-12 col-span-3 sm-min:col-span-2 md-min:col-span-3 xl-min:col-span-5 xl-min:col-start-2"
		>
			<h1 class="text-white text-3xl md-min:text-5xl uppercase font-basker">kartuli club</h1>
			<p
				class="text-white font-josefin-lite py-8 text-sm sm-min:text-base lg-min:text-lg lg-min:pr-24 md-min:pb-16"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur asperiores!
				Architecto neque nobis ex maxime labore doloremque ipsam omnis distinctio ducimus. Officiis
				maxime consequuntur porro rerum facere iste adipisci!
			</p>
		</div>
	</section>
	<section class="bg-white pb-8">
		<h2 class="text-center pt-8 pb-6 text-2xl uppercase font-basker">club membership</h2>
		<p class="px-6 sm-min:px-12 md-min:px-16 font-josefin-lite">
			In 2015 it was casted a limited number of the "Gold", whereupon the very process is not
			repeated any more. Each bottle has its unique number.
		</p>
		<br />
		<p class="px-6 sm-min:px-12 md-min:px-16 font-josefin-lite">
			Wise as OLD VINE, aged and seasoned - the personality traits, which since the olden times
			would be attributed not only to drinks made from grapes of old vines, but also to people
			earning such esteem.
		</p>
		<br />
		<p class="px-6 sm-min:px-12 md-min:px-16 font-josefin-lite">
			Limited Eddition Chacha finds its origins in old Kakhetian vineyards saved and famous for
			their old vines of Kakhuri Mstvane and Rkatsiteli. Thoughtfully selected grapes from these
			vineyards are harvested and vinified in Georgian traditional way giving wines vibrancy of the
			taste coupled with well pronounced unique properties. By the Tradition young wines are
			distilled together with all the solid parts of grape bunch right after completing
			fermentation. Immediately after, Chacha is distilled twice more in strict accordance with the
			local Traditions. Then, it is placed into Oak Vats, where it spends years awaiting formation
			of its expected properties. Having reached final unique taste profile, Chacha ZEARIS is
			bottled for your complete enjoyment.
		</p>
		<br />
		<p class="px-6 sm-min:px-12 md-min:px-16 font-josefin-lite">
			Limited Edition Chacha color is a harmonic play of ember and golden hues. Aroma of citrus
			flowers is echoed by the bouquet of fried nuts and dried fruits. Palate is velvety soft and
			bountiful, pronouncing slightly pungent tannins and finishes with a pleasant tingle
			reminiscent to that of beeswax.
		</p>
	</section>
	<section class="bg-black">
		<h2 class="text-white text-center pt-8 pb-6 text-2xl uppercase font-basker">benefits</h2>
		<p class="text-white px-6 font-josefin-lite text-center">
			Limited Edition Chacha has been created for your sophisticated taste.
		</p>
		<p class="text-white px-6 font-josefin-lite pb-6 text-center">
			Besides the fact that you will be informed about all the news happening in the company, you
			can also use the following services:
		</p>
		<div class="grid grid-cols-1 sm-min:grid-cols-2 gap-5">
			<div class="bg-white p-8">
				<h3 class="text-black uppercase text-xl">georgian resident member</h3>
				<ul class="text-black">
					<li>
						According to your wish, an automobile of your choice will meet you and take you to your
						destination.
					</li>
					<li>Consultation on legal issues.</li>
					<li>Consultation on economic issues.</li>
					<li>Reserve a room in the hotel for the price which is reasonalbe to you.</li>
					<li>A guided tour fully planned.</li>
					<li>We'll put you in contact with the guides.</li>
					<li>A surprise.</li>
				</ul>
			</div>
			<div class="bg-white p-8">
				<h3 class="text-black uppercase text-xl">non resident member</h3>
				<ul class="text-black">
					<li>
						According to your wish, an automobile of your choice will meet you and take you to your
						destination.
					</li>
					<li>Consultation on legal issues.</li>
					<li>Consultation on economic issues.</li>
					<li>Reserve a room in the hotel for the price which is reasonalbe to you.</li>
					<li>A guided tour fully planned.</li>
					<li>We'll put you in contact with the guides.</li>
					<li>A surprise.</li>
				</ul>
			</div>
		</div>
	</section>
</main>
<Footer />
