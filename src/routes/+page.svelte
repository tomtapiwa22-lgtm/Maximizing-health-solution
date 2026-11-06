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

    /* Floating hearts */
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
      15% { opacity: 0.7; }
      85% { opacity: 0.7; }
      100% {
        transform: translateY(-10vh) rotate(360deg);
        opacity: 0;
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
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

    .card {
      background: white;
      padding: 3rem 2rem;
      border-radius: 28px;
      width: 100%;
      max-width: 420px;
      text-align: center;
      position: relative;
      z-index: 10;
      animation: fadeInUp 1s ease-out, gentleGlow 3s ease-in-out infinite;
    }

    .heart-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: inline-block;
      animation: pulse 1.2s ease-in-out infinite;
    }

    .danisha {
      font-size: 2rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ec4899, #f43f5e);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }

    .from {
      color: #be185d;
      font-size: 1rem;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .words {
      color: #4b5563;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 1rem;
    }

    .words p {
      margin-bottom: 0.5rem;
    }

    .btn {
      padding: 0.9rem 2rem;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
    }

    .hidden-message {
      margin-top: 2rem;
      padding: 1.5rem;
      background: #fdf2f7;
      border-radius: 18px;
      line-height: 1.8;
      color: #831843;
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.7s ease-out;
    }

    .hidden-message.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .love-text {
      font-size: 1.2rem;
      font-weight: 600;
      color: #ec4899;
      margin: 0.8rem 0;
    }

    @media (max-width: 480px) {
      .card {
        padding: 2rem 1.5rem;
      }
      .danisha {
        font-size: 1.7rem;
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
    <p style="color: #831843; font-size: 1.1rem;">To my beautiful</p>
    <h1 class="danisha">Danisha</h1>
    <p class="from">From your Tanatswanashe 💕</p>

    <div class="words">
      <p>You make every day brighter just by being you.</p>
      <p>Your smile is my favourite sight.</p>
      <p>Your laugh is my favourite sound.</p>
      <p>You are wonderful, amazing, and so loved.</p>
    </div>

    <button class="btn" on:click={reveal}>
      {revealed ? '💖 Forever Yours 💖' : '✨ Click for a Surprise ✨'}
    </button>

    {#if revealed}
      <div class="hidden-message visible">
        <p>You are the most special person in my world.</p>
        <p class="love-text">I love you so much, Danisha</p>
        <p>Always and forever 💘</p>
        <p style="margin-top: 0.5rem; font-style: italic;">— Tanatswanashe</p>
      </div>
    {/if}
  </div>
</div>

<script>
  import { onMount } from 'svelte';

  let revealed = false;
  let hearts = [];

  function reveal() {
    revealed = true;
    // Extra hearts burst on click
    for (let i = 0; i < 20; i++) addHeart();
  }

  function addHeart() {
    hearts = [...hearts, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 5,
      dur: 5 + Math.random() * 4,
      size: 1 + Math.random() * 1.5
    }];
  }

  onMount(() => {
    // Initial hearts — clean and simple
    for (let i = 0; i < 15; i++) addHeart();
  });
</script>
