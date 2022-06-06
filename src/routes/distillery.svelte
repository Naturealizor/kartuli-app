<script>
	import Nav from '$lib/navigation.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Nav />
<main>
	<section class="">
		<img src="../images/distillery-top.jpg" alt="distillery" />
	</section>
	<section>
		<h1 class="font-basker text-kartuli-orange text-center uppercase mt-5">the distillery</h1>
		<p class="uppercase text-white text-center text-xs mx-12">
			"we know what it does each time, each distillation, and we felt like our distillation process
			was just right for it"
		</p>
	</section>
	<section class="grid">
		<div class="grid grid-cols-1 sm-min:grid-cols-2 md-min:grid-cols-4 text-white">
			<p class="mx-12 sm-min:mx-10 md-min:mx-4 my-8 text-sm text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt odio quam quos repellat
				voluptatum minus illum libero saepe distinctio dolores placeat culpa dignissimos, fuga
				sequi! Necessitatibus hic reprehenderit recusandae illum.
			</p>
			<p class="mx-12 sm-min:mx-10 md-min:mx-4 my-8 text-sm text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde, non expedita ut, nemo
				quibusdam doloremque, enim aut quaerat iusto consectetur voluptates aspernatur quasi dolorem
				velit mollitia labore distinctio qui?
			</p>
			<p class="mx-12 sm-min:mx-10 md-min:mx-4 my-8 text-sm text-center">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nihil minima nam odit
				tempora, hic quasi possimus omnis voluptatum optio, magnam magni incidunt cum porro
				temporibus quaerat laboriosam ducimus. Modi.
			</p>
			<p class="mx-12 sm-min:mx-10 md-min:mx-4 my-8 text-sm text-center">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, omnis facere! Dicta quasi
				esse quia deleniti, voluptatem necessitatibus! Doloribus magni dolore blanditiis, sunt fugit
				iure amet! Fugit molestias in incidunt!
			</p>
		</div>
	</section>
	<section>
		<div class="grid grid-cols-1 sm-min:grid-cols-2 md-min:grid-cols-4 gap-3 justify-items-center">
			<picture>
				<img src="../images/blog-grapes-dropping 1.png" alt="" />
			</picture>
			<picture>
				<img src="../images/blog-grapes-dropping 2.png" alt="" />
			</picture>
			<picture>
				<img src="../images/blog-grapes-dropping 3.png" alt="" />
			</picture>
			<picture>
				<img src="../images/blog-grapes-dropping 4.png" alt="" />
			</picture>
		</div>
	</section>
</main>
<Footer />
