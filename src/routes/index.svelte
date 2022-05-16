<script>
	import Nav from './navigation.svelte';
	import Footer from './footer.svelte';
	import Carousel from './productCarousel.svelte';
	
	
</script>

<!--  -->
<video autoplay muted loop class="headerVid" src="./images/2022-04-29 21-20-00.mp4" />
<Nav />
<main>
	<section id="figVodka">
		<div class="sectionSideText">
			<h2 id="introP">introducing kartuli's new</h2>
			<p id="prodP">fig vodka</p>
			<p id="contentP">
				It's sweetness is subtle enough to be mixed and matched to enhance any of your favorite
				classic cocktail recipes.
			</p>
			<div class="btnWrapper">
				<button class="btnShopNow" type="button"><a href="#">shop now</a></button>
			</div>
		</div>
	</section>

	<Carousel />

	<section class="learnMore">
		<div>
			<h2 class="centeredSectionTitle">innovative georgian craftsmanship</h2>
			<p style="color: white; margin-left: 40%; margin-right: 40%;">
				Kartuli Vodka is a luxurious ultra-premium vodka made from fine Georgian grapes to be the
				toast of modern luxury.
			</p>
		</div>
	</section>
	<Footer />
</main>

<style>
	main {
		background-color: #000000;
	}
	.headerVid {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center center;
		background-attachment: fixed;
	}
	#figVodka {
		background-image: url(./images/homePage_Section2.jpg);
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		height: 878px;
		width: 100%;
	}

	.sectionSideText {
		padding: 12em 5em;
		height: 50%;
		width: 30%;
	}

	#introP {
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 21px;
		text-align: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #ffffff;
		margin: 10px;
	}

	#prodP {
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 37px;
		text-align: center;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #ca84d6;
		padding: 3px;
		margin: 10px;
	}

	#contentP {
		/* width: 90%; */
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 300;
		font-size: 16px;
		line-height: 140.4%;
		text-align: center;
		color: #ffffff;
	}

	.btnShopNow {
		padding: 10px 30px;
		position: absolute;
		width: auto;
		height: auto;
		left: 16%;
		background: #ffffff;
		border: 2px solid #000000;
		box-sizing: border-box;
		font-family: 'Futura';
		font-style: normal;
		font-weight: 500;
		font-size: 10px;
		line-height: 13px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.btnShopNow > a {
		text-decoration: none;
		color: black;
	}

	.btnShopNow:hover {
		background: red;
	}

	.btnShopNow:hover > a {
		color: white;
	}

	.centeredSectionTitle {
		text-align: center;
		color: #c88f34;
		padding-top: 25px;
		text-transform: uppercase;
		font-family: 'Baskerville';
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 37px;
		letter-spacing: 0.05em;
	}

	.learnMore {
		background-image: url(./images/grape\ in\ bottle\ close\ up\ 2.jpg);
		background-attachment: scroll;
		background-repeat: no-repeat;
		background-size: cover;
		height: 878px;
		width: 100%;
	}
</style>
