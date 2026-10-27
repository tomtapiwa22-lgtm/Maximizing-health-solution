<script lang="ts">
	import { onMount } from 'svelte';

	// Page Content — easy to update
	const business = {
		name: "Maximise Health Solutions",
		tagline: "Your Partner in Better Health & Wellness",
		description: "Personalised care, expert guidance, and practical solutions to help you live your healthiest life.",
		phone: "+44 (0) 1273 XXX XXX",
		email: "hello@maximisehealthsolutions.co.uk",
		address: "Brighton & Hove, United Kingdom"
	};

	const services = [
		{
			title: "Health Assessments",
			description: "Comprehensive reviews to understand your current health and identify areas for improvement.",
			icon: "📋"
		},
		{
			title: "Wellness Planning",
			description: "Custom diet, movement, and lifestyle plans built around your goals and circumstances.",
			icon: "🌿"
		},
		{
			title: "Chronic Condition Support",
			description: "Practical guidance to help manage long-term health conditions and improve quality of life.",
			icon: "❤️"
		},
		{
			title: "Mental Wellbeing",
			description: "Strategies for stress management, better sleep, and emotional balance.",
			icon: "🧠"
		},
		{
			title: "Senior Care & Nutrition",
			description: "Specialised health and nutrition support for older adults to maintain independence.",
			icon: "👵"
		},
		{
			title: "Health Education",
			description: "Workshops and one-to-one sessions to build your knowledge and confidence in self-care.",
			icon: "📚"
		}
	];

	const reasons = [
		{ title: "Person-Centred Care", desc: "Every plan is built around YOU — your needs, preferences, and goals." },
		{ title: "Experienced Professionals", desc: "Fully qualified and compassionate health practitioners." },
		{ title: "Evidence-Based", desc: "Advice rooted in research and best practice guidelines." },
		{ title: "Local & Accessible", desc: "Serving Brighton & Hove with flexible appointment options." }
	];

	onMount(() => {
		document.documentElement.classList.add('loaded');
	});
</script>

<svelte:head>
	<title>Maximise Health Solutions | Health & Wellness in Brighton & Hove</title>
	<meta name="description" content="Maximise Health Solutions — personalised health assessments, wellness planning, and care support in Brighton and Hove." />
	<meta name="theme-color" content="#10B981" />
</svelte:head>

<div class="health-page">
	<!-- Hero Section -->
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
		<div class="hero-image">
			<div class="circle-decoration"></div>
			<span class="health-icon">🌱</span>
		</div>
	</section>

	<!-- Services Section -->
	<section id="services" class="services">
		<div class="section-heading">
			<h2>How We Can Help You</h2>
			<p>Holistic health solutions designed to fit your life</p>
		</div>
		<div class="services-grid">
			{#each services as service}
				<div class="service-card">
					<span class="icon">{service.icon}</span>
					<h3>{service.title}</h3>
					<p>{service.description}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Why Choose Us -->
	<section class="why-us">
		<div class="section-heading">
			<h2>Why Choose Maximise Health Solutions?</h2>
		</div>
		<div class="reasons-grid">
			{#each reasons as reason}
				<div class="reason-card">
					<h3>{reason.title}</h3>
					<p>{reason.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Contact CTA -->
	<section class="cta-section">
		<div class="cta-content">
			<h2>Ready to Take Control of Your Health?</h2>
			<p>Small steps lead to big changes. Let's start your journey today.</p>
			<div class="contact-details">
				<p>📞 {business.phone}</p>
				<p>✉️ {business.email}</p>
				<p>📍 {business.address}</p>
			</div>
			<a href="/contact" class="btn primary large">Get In Touch</a>
		</div>
	</section>
</div>

<style>
	:root {
		--primary: #10B981; /* fresh green — health & vitality */
		--secondary: #059669; /* deeper green */
		--accent: #F59E0B; /* warm amber for highlights */
		--light: #ECFDF5;
		--dark: #1F2937;
		--muted: #6B7280;
		--shadow-sm: 0 2px 8px rgba(16, 185, 129, 0.08);
		--shadow-lg: 0 10px 30px rgba(16, 185, 129, 0.18);
		--radius: 14px;
		--transition: all 0.3s ease;
	}

	.health-page {
		color: var(--dark);
		background: linear-gradient(to bottom, #F0FDF4, #FFFFFF);
		font-family: system-ui, -apple-system, sans-serif;
		line-height: 1.6;
	}

	/* Hero */
	.hero {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3rem;
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
		align-items: center;
	}

	.hero-content h1 {
		font-size: clamp(2.2rem, 5vw, 3.4rem);
		color: var(--primary);
		margin: 0 0 1rem;
		line-height: 1.2;
	}

	.tagline {
		font-size: 1.3rem;
		font-weight: 600;
		color: var(--secondary);
		margin: 0 0 1rem;
	}

	.intro {
		font-size: 1.1rem;
		color: var(--muted);
		margin-bottom: 2rem;
		max-width: 550px;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.9rem 2rem;
		border-radius: var(--radius);
		font-weight: 600;
		text-decoration: none;
		transition: var(--transition);
		border: none;
		cursor: pointer;
		font-size: 1rem;
	}

	.btn.primary {
		background: linear-gradient(135deg, var(--primary), var(--secondary));
		color: white;
		box-shadow: var(--shadow-lg);
	}
	.btn.primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 14px 28px rgba(16, 185, 129, 0.25);
	}

	.btn.secondary {
		background: transparent;
		color: var(--primary);
		border: 2px solid var(--primary);
	}
	.btn.secondary:hover {
		background: var(--primary);
		color: white;
	}

	.btn.large {
		font-size: 1.1rem;
		padding: 1rem 2.5rem;
	}

	.hero-image {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		min-height: 300px;
	}
	.circle-decoration {
		width: 260px;
		height: 260px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D1FAE5, #A7F3D0);
		position: absolute;
	}
	.health-icon {
		font-size: 5rem;
		z-index: 1;
	}

	/* Section Shared */
	.section-heading {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 3rem;
	}
	.section-heading h2 {
		font-size: 2rem;
		color: var(--secondary);
		margin-bottom: 0.5rem;
	}
	.section-heading p {
		color: var(--muted);
		font-size: 1.1rem;
	}

	/* Services */
	.services {
		max-width: 1200px;
		margin: 0 auto;
		padding: 3rem 2rem 5rem;
	}
	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.8rem;
	}
	.service-card {
		background: white;
		padding: 2rem;
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
		transition: var(--transition);
	}
	.service-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-lg);
	}
	.service-card .icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: inline-block;
	}
	.service-card h3 {
		margin: 0 0 0.75rem;
		color: var(--secondary);
		font-size: 1.2rem;
	}
	.service-card p {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
	}

	/* Why Us */
	.why-us {
		background: var(--light);
		padding: 4rem 2rem;
	}
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
		border-radius: var(--radius);
		text-align: center;
	}
	.reason-card h3 {
		color: var(--primary);
		margin: 0 0 0.5rem;
		font-size: 1.05rem;
	}
	.reason-card p {
		margin: 0;
		font-size: 0.9rem;
		color: var(--muted);
	}

	/* CTA Section */
	.cta-section {
		max-width: 700px;
		margin: 4rem auto;
		padding: 3rem 2rem;
		text-align: center;
		background: linear-gradient(135deg, var(--secondary), var(--primary));
		color: white;
		border-radius: 20px;
	}
	.cta-content h2 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}
	.cta-content p {
		font-size: 1.05rem;
		margin-bottom: 2rem;
		opacity: 0.9;
	}
	.contact-details {
		margin-bottom: 2rem;
		line-height: 2;
	}

	/* Mobile */
	@media (max-width: 768px) {
		.hero {
			grid-template-columns: 1fr;
			text-align: center;
			padding: 2rem 1.5rem;
		}
		.hero-buttons {
			justify-content: center;
		}
		.services-grid, .reasons-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
