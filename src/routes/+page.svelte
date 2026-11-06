<svelte:head>
  <title>For Danisha 💖</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      background: linear-gradient(180deg, #fef2f7 0%, #fce7f3 100%);
      font-family: 'Segoe UI', sans-serif;
      overflow-x: hidden;
    }

    .container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1.5rem;
      position: relative;
    }

    /* Floating hearts — automatic & endless */
    .heart {
      position: absolute;
      color: #f472b6;
      animation: rise 8s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes rise {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      15% { opacity: 0.75; }
      85% { opacity: 0.75; }
      100% {
        transform: translateY(-10vh) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes gentleGlow {
      0%, 100% { box-shadow: 0 10px 40px rgba(244, 114, 182, 0.2); }
      50% { box-shadow: 0 10px 40px rgba(244, 114, 182, 0.35); }
    }

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    @keyframes fadeInDelay {
      0% { opacity: 0; transform: translateY(15px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    .card {
      background: white;
      padding: 3rem 2rem;
      border-radius: 28px;
      width: 100%;
      max-width: 420px;
      text-align: center;
      position: relative;
      z-index: 10;
      animation: fadeInUp 1.2s ease-out, gentleGlow 3s ease-in-out infinite;
    }

    .heart-icon {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      display: inline-block;
      animation: pulse 1.2s ease-in-out infinite;
    }

    .to-you {
      color: #9d174d;
      font-size: 1.15rem;
      margin-bottom: 0.3rem;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.3s forwards;
    }

    .danisha {
      font-size: 2.2rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ec4899, #f43f5e, #ec4899);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3.5s linear infinite;
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.6s forwards, shimmer 3.5s linear infinite;
    }

    .from {
      color: #be185d;
      font-size: 1rem;
      margin-bottom: 2rem;
      font-style: italic;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.9s forwards;
    }

    .words {
      color: #4b5563;
      line-height: 1.9;
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    .words p {
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInDelay 1s ease-out forwards;
    }

    .words p:nth-child(1) { animation-delay: 1.2s; }
    .words p:nth-child(2) { animation-delay: 1.5s; }
    .words p:nth-child(3) { animation-delay: 1.8s; }
    .words p:nth-child(4) { animation-delay: 2.1s; }

    .love-note {
      margin-top: 1rem;
      padding: 1.8rem;
      background: linear-gradient(135deg, #fdf2f7, #fce7f3);
      border-radius: 20px;
      border-left: 4px solid #ec4899;
      line-height: 1.9;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease-out 2.5s forwards;
    }

    .big-love {
      font-size: 1.35rem;
      font-weight: 700;
      color: #ec4899;
      margin: 0.8rem 0;
    }

    .signature {
      margin-top: 1rem;
      color: #9d174d;
      font-style: italic;
    }

    @media (max-width: 480px) {
      .card {
        padding: 2rem 1.5rem;
      }
      .danisha {
        font-size: 1.8rem;
      }
      .heart-icon {
        font-size: 2.8rem;
      }
    }
  </style>
</svelte:head>

<div class="container">
  {#each hearts as h}
    <span
      class="heart"
      style="
        left: {h.x}%;
        animation-delay: {h.delay}s;
        animation-duration: {h.dur}s;
        font-size: {h.size}rem;
      "
    >❤️</span>
  {/each}

  <div class="card">
    <div class="heart-icon">💖</div>
    
    <p class="to-you">To my beautiful</p>
    <h1 class="danisha">Danisha</h1>
    <p class="from">From your Tanatswanashe 💕</p>

    <div class="words">
      <p>You make every day brighter just by being you.</p>
      <p>Your smile is my favourite sight.</p>
      <p>Your laugh is my favourite sound.</p>
      <p>You are wonderful, amazing, and so loved.</p>
    </div>

    <div class="love-note">
      <p>You are the most special person in my world.</p>
      <p class="big-love">I love you so much, Danisha</p>
      <p>Always and forever 💘</p>
      <p class="signature">— Tanatswanashe</p>
    </div>
  </div>
</div>

<script>
  import { onMount } from 'svelte';

  let hearts = [];

  function addHeart() {
    hearts = [...hearts, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 6,
      dur: 5 + Math.random() * 4,
      size: 1 + Math.random() * 1.5
    }];
  }

  onMount(() => {
    // Start floating hearts
    for (let i = 0; i < 22; i++) addHeart();
    
    // Keep adding hearts gently forever
    const interval = setInterval(() => {
      if (hearts.length < 40) addHeart();
    }, 1200);

    return () => clearInterval(interval);
  });
</script>
