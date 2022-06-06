<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Nav />
<main>
	<section class="grid grid-cols-4 bg-club-top bg-cover bg-no-repeat bg-center">
		<div class="p-12 col-span-3 sm-min:col-span-2">
			<h1 class="text-white text-3xl uppercase font-basker">kartuli club</h1>
			<p class="text-white font-josefin-lite p-2 text-sm">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, pariatur asperiores!
				Architecto neque nobis ex maxime labore doloremque ipsam omnis distinctio ducimus. Officiis
				maxime consequuntur porro rerum facere iste adipisci!
			</p>
		</div>
	</section>
	<section class="bg-white">
		<h2>club membership</h2>
		<p>
			In 2015 it was casted a limited number of the "Gold", whereupon the very process is not
			repeated any more. Each bottle has its unique number.
		</p>
		<p>
			Wise as OLD VINE, aged and seasoned - the personality traits, which since the olden times
			would be attributed not only to drinks made from grapes of old vines, but also to people
			earning such esteem.
		</p>
		<p>
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
		<p>
			Limited Edition Chacha color is a harmonic play of ember and golden hues. Aroma of citrus
			flowers is echoed by the bouquet of fried nuts and dried fruits. Palate is velvety soft and
			bountiful, pronouncing slightly pungent tannins and finishes with a pleasant tingle
			reminiscent to that of beeswax.
		</p>
	</section>
	<section class="bg-black">
		<h2 class="text-white">benefits</h2>
		<p class="text-white">Limited Edition Chacha has been created for your sophisticated taste.</p>
		<p class="text-white">
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
