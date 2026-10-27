<script lang="ts">
	// All content hardcoded here — nothing external needed
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
		{ title: "Person-Centred Care", desc: "Every plan is built around YOU — your needs, preferences, and goals." },
		{ title: "Experienced Professionals", desc: "Fully qualified and compassionate health practitioners." },
		{ title: "Evidence-Based", desc: "Advice rooted in research and best practice guidelines." },
		{ title: "Local & Accessible", desc: "Serving Brighton & Hove with flexible appointment options." }
	];
</script>

<svelte:head>
	<title>Maximise Health Solutions | Brighton & Hove</title>
	<meta name="description" content="Personalised health and wellness support in Brighton and Hove." />
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- INLINE CRITICAL CSS — nothing can block this -->
	<style>
		/* Reset & base — force these styles */
		* { margin: 0; padding: 0; box-sizing: border-box; }
		html { scroll-behavior: smooth; }
		body { margin: 0; }
		a { text-decoration: none; color: inherit; }
		button { font-family: inherit; }

		/* Page wrapper — highest priority */
		.health-page {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
			color: #1F2937 !important;
			background: linear-gradient(180deg, #F0FDF4 0%, #FFFFFF 100%) !important;
			min-height: 100vh !important;
			line-height: 1.6 !important;
			display: block !important;
		}

		/* Navigation */
		.mhs-nav {
			background: #FFFFFF !important;
			box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08) !important;
			padding: 1rem 2rem !important;
			position: sticky !important;
			top: 0 !important;
			z-index: 9999 !important;
		}
		.mhs-nav-inner {
			max-width: 1200px !important;
			margin: 0 auto !important;
			display: flex !important;
			justify-content: space-between !important;
			align-items: center !important;
		}
		.mhs-brand {
			font-size: 1.25rem !important;
			font-weight: 700 !important;
			color: #10B981 !important;
			text-decoration: none !important;
		}
		.mhs-nav-links { display: flex !important; gap: 2rem !important; }
		.mhs-link {
			color: #1F2937 !important;
			font-weight: 500 !important;
			text-decoration: none !important;
			transition: color 0.3s ease !important;
		}
		.mhs-link:hover { color: #10B981 !important; }

		/* Hero Section */
		.mhs-hero {
			max-width: 1200px !important;
			margin: 0 auto !important;
			padding: 4rem 2rem !important;
			display: grid !important;
			grid-template-columns: 1.2fr 0.8fr !important;
			gap: 3rem !important;
			align-items: center !important;
		}
		.mhs-hero h1 {
			font-size: clamp(2.2rem, 5vw, 3.4rem) !important;
			color: #10B981 !important;
			margin: 0 0 1rem !important;
			line-height: 1.2 !important;
		}
		.mhs-tagline {
			font-size: 1.3rem !important;
			font-weight: 600 !important;
			color: #059669 !important;
			margin: 0 0 1rem !important;
		}
		.mhs-intro {
			font-size: 1.1rem !important;
			color: #6B7280 !important;
			margin-bottom: 2rem !important;
			max-width: 550px !important;
		}
		.mhs-buttons { display: flex !important; gap: 1rem !important; flex-wrap: wrap !important; }

		/* Buttons */
		.mhs-btn {
			padding: 0.9rem 2rem !important;
			border-radius: 14px !important;
			font-weight: 600 !important;
			font-size: 1rem !important;
			text-decoration: none !important;
			transition: all 0.3s ease !important;
			border: none !important;
			cursor: pointer !important;
			display: inline-block !important;
		}
		.mhs-btn-primary {
			background: linear-gradient(135deg, #10B981, #059669) !important;
			color: #FFFFFF !important;
			box-shadow: 0 10px 30px rgba(16, 185, 129, 0.18) !important;
		}
		.mhs-btn-primary:hover { transform: translateY(-3px) !important; }
		.mhs-btn-secondary {
			background: transparent !important;
			color: #10B981 !important;
			border: 2px solid #10B981 !important;
		}
		.mhs-btn-secondary:hover { background: #10B981 !important; color: #FFFFFF !important; }
		.mhs-btn-large { font-size: 1.1rem !important; padding: 1rem 2.5rem !important; }

		/* Hero Visual */
		.mhs-hero-visual {
			display: flex !important;
			align-items: center !important;
			justify-content: center !important;
			position: relative !important;
			min-height: 300px !important;
		}
		.mhs-circle {
			width: 260px !important;
			height: 260px !important;
			border-radius: 50% !important;
			background: linear-gradient(135deg, #D1FAE5, #A7F3D0) !important;
			position: absolute !important;
		}
		.mhs-icon { font-size: 5rem !important; z-index: 1 !important; position: relative !important; }

		/* Section Headers */
		.mhs-section-head { text-align: center !important; margin-bottom: 3rem !important; }
		.mhs-section-head h2 {
			font-size: 2rem !important;
			color: #059669 !important;
			margin-bottom: 0.5rem !important;
		}
		.mhs-section-head p { color: #6B7280 !important; font-size: 1.1rem !important; }

		/* Services Section */
		.mhs-services {
			max-width: 1200px !important;
			margin: 0 auto !important;
			padding: 3rem 2rem 5rem !important;
		}
		.mhs-cards-grid {
			display: grid !important;
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
			gap: 1.8rem !important;
		}
		.mhs-card {
			background: #FFFFFF !important;
			padding: 2rem !important;
			border-radius: 14px !important;
			box-shadow: 0 2px 8px rgba(16, 185, 129, 0.08) !important;
			transition: all 0.3s ease !important;
		}
		.mhs-card:hover {
			transform: translateY(-5px) !important;
			box-shadow: 0 10px 30px rgba(16, 185, 129, 0.18) !important;
		}
		.mhs-card-icon { font-size: 2.5rem !important; margin-bottom: 1rem !important; display: inline-block !important; }
		.mhs-card h3 {
			margin: 0 0 0.75rem !important;
			color: #059669 !important;
			font-size: 1.2rem !important;
		}
		.mhs-card p { margin: 0 !important; color: #6B7280 !important; font-size: 0.95rem !important; }

		/* Why Us Section */
		.mhs-whyus { background: #ECFDF5 !important; padding: 4rem 2rem !important; }
		.mhs-reasons-grid {
			max-width: 1000px !important;
			margin: 0 auto !important;
			display: grid !important;
			grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) !important;
			gap: 1.5rem !important;
		}
		.mhs-reason-card {
			background: #FFFFFF !important;
			padding: 1.5rem !important;
			border-radius: 14px !important;
			text-align: center !important;
		}
		.mhs-reason-card h3 {
			color: #10B981 !important;
			margin: 0 0 0.5rem !important;
			font-size: 1.05rem !important;
		}
		.mhs-reason-card p { margin: 0 !important; font-size: 0.9rem !important; color: #6B7280 !important; }

		/* CTA Section */
		.mhs-cta {
			max-width: 700px !important;
			margin: 4rem auto !important;
			padding: 3rem 2rem !important;
			text-align: center !important;
			background: linear-gradient(135deg, #059669, #10B981) !important;
			color: #FFFFFF !important;
			border-radius: 20px !important;
		}
		.mhs-cta h2 { font-size: 1.8rem !important; margin-bottom: 1rem !important; }
		.mhs-cta p { font-size: 1.05rem !important; margin-bottom: 2rem !important; opacity: 0.9 !important; }
		.mhs-contact-info { margin-bottom: 2rem !important; line-height: 2 !important; }

		/* Footer */
		.mhs-footer {
			text-align: center !important;
			padding: 2rem !important;
			color: #6B7280 !important;
			font-size: 0.9rem !important;
			border-top: 1px solid #E5E7EB !important;
		}

		/* Mobile Responsive */
		@media (max-width: 768px) {
			.mhs-nav-links { gap: 1rem !important; }
			.mhs-hero { grid-template-columns: 1fr !important; text-align: center !important; padding: 2rem 1.5rem !important; }
			.mhs-buttons { justify-content: center !important; }
			.mhs-cards-grid, .mhs-reasons-grid { grid-template-columns: 1fr !important; }
		}
	</style>
</svelte:head>

<div class="health-page">
	<!-- Navigation -->
	<nav class="mhs-nav">
		<div class="mhs-nav-inner">
			<a href="/" class="mhs-brand">{business.name}</a>
			<div class="mhs-nav-links">
				<a href="/" class="mhs-link">Home</a>
				<a href="#services" class="mhs-link">Our Services</a>
				<a href="/login" class="mhs-link">Login</a>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="mhs-hero">
		<div>
			<h1>{business.name}</h1>
			<p class="mhs-tagline">{business.tagline}</p>
			<p class="mhs-intro">{business.description}</p>
			<div class="mhs-buttons">
				<a href="/contact" class="mhs-btn mhs-btn-primary">Book a Consultation</a>
				<a href="#services" class="mhs-btn mhs-btn-secondary">Our Services</a>
			</div>
		</div>
		<div class="mhs-hero-visual">
			<div class="mhs-circle"></div>
			<span class="mhs-icon">🌱</span>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="mhs-services">
		<div class="mhs-section-head">
			<h2>How We Can Help You</h2>
			<p>Holistic health solutions designed to fit your life</p>
		</div>
		<div class="mhs-cards-grid">
			{#each services as s}
				<div class="mhs-card">
					<span class="mhs-card-icon">{s.icon}</span>
					<h3>{s.title}</h3>
					<p>{s.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="mhs-whyus">
		<div class="mhs-section-head">
			<h2>Why Choose Maximise Health Solutions?</h2>
		</div>
		<div class="mhs-reasons-grid">
			{#each reasons as r}
				<div class="mhs-reason-card">
					<h3>{r.title}</h3>
					<p>{r.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA / Contact -->
	<section class="mhs-cta">
		<h2>Ready to Take Control of Your Health?</h2>
		<p>Small steps lead to big changes. Let's start your journey today.</p>
		<div class="mhs-contact-info">
			<p>📞 {business.phone}</p>
			<p>✉️ {business.email}</p>
			<p>📍 {business.address}</p>
		</div>
		<a href="/contact" class="mhs-btn mhs-btn-primary mhs-btn-large">Get In Touch</a>
	</section>

	<!-- Footer -->
	<footer class="mhs-footer">
		<p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
	</footer>
</div>
