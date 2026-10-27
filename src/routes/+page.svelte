<script lang="ts">
	const business = {
		name: "Maximise Health Solutions",
		tagline: "Your Partner in Better Health & Wellness",
		description: "Personalised care, expert guidance, and practical solutions to help you live your healthiest life.",
		phone: "+44 (0) 1273 XXX XXX",
		email: "hello@maximisehealthsolutions.co.uk",
		address: "Brighton & Hove, United Kingdom"
	};

	const services = [
		{ title: "Health Assessments", desc: "Comprehensive reviews to understand your current health and identify areas for improvement.", icon: "📋" },
		{ title: "Wellness Planning", desc: "Custom diet, movement, and lifestyle plans built around your goals and circumstances.", icon: "🌿" },
		{ title: "Chronic Condition Support", desc: "Practical guidance to help manage long-term health conditions and improve quality of life.", icon: "❤️" },
		{ title: "Mental Wellbeing", desc: "Strategies for stress management, better sleep, and emotional balance.", icon: "🧠" },
		{ title: "Senior Care & Nutrition", desc: "Specialised health and nutrition support for older adults to maintain independence.", icon: "👵" },
		{ title: "Health Education", desc: "Workshops and one-to-one sessions to build your knowledge and confidence in self-care.", icon: "📚" }
	];

	const reasons = [
		{ title: "Person-Centred Care", desc: "Every plan is built around YOU." },
		{ title: "Experienced Professionals", desc: "Fully qualified practitioners." },
		{ title: "Evidence-Based", desc: "Advice rooted in research." },
		{ title: "Local & Accessible", desc: "Serving Brighton & Hove." }
	];
</script>

<svelte:head>
	<title>Maximise Health Solutions | Brighton & Hove</title>
	<meta name="description" content="Personalised health and wellness support in Brighton and Hove." />
</svelte:head>

<div class="page-wrapper">
	<nav class="navbar">
		<div class="nav-inner">
			<a href="/" class="brand">{business.name}</a>
			<div class="nav-links">
				<a href="/" class="link">Home</a>
				<a href="#services" class="link">Our Services</a>
				<a href="/login" class="link">Login</a>
			</div>
		</div>
	</nav>

	<main>
		<section class="hero">
			<div class="hero-content">
				<h1>{business.name}</h1>
				<p class="tagline">{business.tagline}</p>
				<p class="intro">{business.description}</p>
				<div class="hero-buttons">
					<a href="/contact" class="btn primary">Book a Consultation</a>
					<a href="#services" class="btn secondary">Our Services</a>
				</div>
			</div>
			<div class="hero-visual">
				<div class="circle"></div>
				<span class="icon">🌱</span>
			</div>
		</section>

		<section id="services" class="services">
			<div class="section-head">
				<h2>How We Can Help You</h2>
				<p>Holistic health solutions designed to fit your life</p>
			</div>
			<div class="cards-grid">
				{#each services as s}
					<div class="card">
						<span class="card-icon">{s.icon}</span>
						<h3>{s.title}</h3>
						<p>{s.desc}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="why-us">
			<div class="section-head">
				<h2>Why Choose Us</h2>
			</div>
			<div class="reasons-grid">
				{#each reasons as r}
					<div class="reason-card">
						<h3>{r.title}</h3>
						<p>{r.desc}</p>
					</div>
				{/each}
			</div>
		</section>

		<section class="cta">
			<h2>Ready to Take Control?</h2>
			<p>Small steps lead to big changes. Let's start today.</p>
			<div class="contact-info">
				<p>📞 {business.phone}</p>
				<p>✉️ {business.email}</p>
				<p>📍 {business.address}</p>
			</div>
			<a href="/contact" class="btn primary large">Get In Touch</a>
		</section>
	</main>

	<footer class="footer">
		<p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
	</footer>
</div>

<style>
	/* === CRITICAL: These styles must apply === */
	.page-wrapper {
		all: unset;
		display: block;
		min-height: 100vh;
		font-family: system-ui, -apple-system, sans-serif;
		color: #1F2937;
		background: linear-gradient(to bottom, #F0FDF4, #FFFFFF);
		line-height: 1.6;
	}

	/* Navigation */
	.navbar {
		background: white;
		box-shadow: 0 2px 8px rgba(16,185,129,0.08);
		padding: 1rem 2rem;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.nav-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.brand {
		font-size: 1.25rem;
		font-weight: 700;
		color: #10B981;
		text-decoration: none;
	}
	.nav-links { display: flex; gap: 2rem; }
	.link {
		text-decoration: none;
		color: #1F2937;
		font-weight: 500;
	}
	.link:hover { color: #10B981; }

	/* Hero */
	.hero {
		max-width: 1200px;
		margin: 0 auto;
		padding: 4rem 2rem;
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3rem;
		align-items: center;
	}
	.hero-content h1 {
		font-size: clamp(2.2rem, 5vw, 3.4rem);
		color: #10B981;
		margin: 0 0 1rem;
		line-height: 1.2;
	}
	.tagline {
		font-size: 1.3rem;
		font-weight: 600;
		color: #059669;
		margin: 0 0 1rem;
	}
	.intro {
		font-size: 1.1rem;
		color: #6B7280;
		margin-bottom: 2rem;
	}
	.hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }

	/* Buttons */
	.btn {
		padding: 0.9rem 2rem;
		border-radius: 14px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}
	.btn.primary {
		background: linear-gradient(135deg, #10B981, #059669);
		color: white;
		box-shadow: 0 10px 30px rgba(16,185,129,0.18);
	}
	.btn.primary:hover { transform: translateY(-3px); }
	.btn.secondary {
		background: transparent;
		color: #10B981;
		border: 2px solid #10B981;
	}
	.btn.secondary:hover { background: #10B981; color: white; }
	.btn.large { font-size: 1.1rem; padding: 1rem 2.5rem; }

	/* Hero Visual */
	.hero-visual {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		min-height: 300px;
	}
	.circle {
		width: 260px;
		height: 260px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
		position: absolute;
	}
	.icon { font-size: 5rem; z-index: 1; }

	/* Sections */
	.section-head { text-align: center; margin-bottom: 3rem; }
	.section-head h2 { font-size: 2rem; color: #059669; margin-bottom: 0.5rem; }
	.section-head p { color: #6B7280; font-size: 1.1rem; }

	/* Services */
	.services { max-width: 1200px; margin: 0 auto; padding: 3rem 2rem 5rem; }
	.cards-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.8rem;
	}
	.card {
		background: white;
		padding: 2rem;
		border-radius: 14px;
		box-shadow: 0 2px 8px rgba(16,185,129,0.08);
		transition: all 0.3s ease;
	}
	.card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(16,185,129,0.18); }
	.card-icon { font-size: 2.5rem; margin-bottom: 1rem; display: inline-block; }
	.card h3 { margin: 0 0 0.75rem; color: #059669; font-size: 1.2rem; }
	.card p { margin: 0; color: #6B7280; font-size: 0.95rem; }

	/* Why Us */
	.why-us { background: #ECFDF5; padding: 4rem 2rem; }
	.reasons-grid {
		max-width: 1000px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
	}
	.reason-card {
		background: white;
		padding: 1.5rem;
		border-radius: 14px;
		text-align: center;
	}
	.reason-card h3 { color: #10B981; margin: 0 0 0.5rem; font-size: 1.05rem; }
	.reason-card p { margin: 0; font-size: 0.9rem; color: #6B7280; }

	/* CTA */
	.cta {
		max-width: 700px;
		margin: 4rem auto;
		padding: 3rem 2rem;
		text-align: center;
		background: linear-gradient(135deg, #059669, #10B981);
		color: white;
		border-radius: 20px;
	}
	.cta h2 { font-size: 1.8rem; margin-bottom: 1rem; }
	.cta p { font-size: 1.05rem; margin-bottom: 2rem; opacity: 0.9; }
	.contact-info { margin-bottom: 2rem; line-height: 2; }

	/* Footer */
	.footer {
		text-align: center;
		padding: 2rem;
		color: #6B7280;
		font-size: 0.9rem;
		border-top: 1px solid #E5E7EB;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.nav-links { gap: 1rem; }
		.hero { grid-template-columns: 1fr; text-align: center; padding: 2rem 1.5rem; }
		.hero-buttons { justify-content: center; }
		.cards-grid, .reasons-grid { grid-template-columns: 1fr; }
	}
</style>
