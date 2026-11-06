<svelte:head>
  <title>For Danisha 💖</title>
  <meta name="description" content="Made with love by Tanatswanashe" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; overflow-x: hidden; min-height: 100vh; }
    a { text-decoration: none; color: inherit; }
    button { font-family: inherit; }

    :root {
      --love-pink: #EC4899;
      --love-rose: #F43F5E;
      --love-light: #FDF2F8;
      --love-deep: #9D174D;
      --love-glow: rgba(236, 72, 153, 0.35);
      --white: #FFFFFF;
      --radius: 24px;
    }

    .love-page {
      font-family: 'Segoe UI', cursive, 'Apple Color Emoji', sans-serif;
      min-height: 100vh;
      background: linear-gradient(180deg, #FDF2F8 0%, #FCE7F3 50%, #FBCFE8 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem 1rem;
      position: relative;
      overflow: hidden;
    }

    /* Floating hearts background */
    .heart {
      position: absolute;
      color: var(--love-pink);
      opacity: 0.7;
      animation: float 7s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes float {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      12% { opacity: 0.7; }
      88% { opacity: 0.7; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    @keyframes pulse-heart {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 8px 32px var(--love-glow); }
      50% { box-shadow: 0 8px 40px var(--love-glow), 0 0 30px rgba(244, 63, 94, 0.2); }
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }

    .love-card {
      background: var(--white);
      padding: 3rem 2.5rem;
      border-radius: var(--radius);
      box-shadow: 0 8px 32px var(--love-glow);
      width: 100%;
      max-width: 440px;
      position: relative;
      z-index: 10;
      animation: fadeUp 1s ease-out, glow 3s ease-in-out infinite;
      text-align: center;
    }

    .main-heart {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      display: inline-block;
      animation: pulse-heart 1.2s ease-in-out infinite;
    }

    .names-top {
      font-size: 1.6rem;
      font-weight: 600;
      color: var(--love-deep);
      margin-bottom: 0.5rem;
    }

    .danisha-name {
      background: linear-gradient(90deg, var(--love-rose), var(--love-pink), var(--love-rose));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
      font-size: 2rem;
      font-weight: 700;
      display: block;
      margin-bottom: 0.5rem;
    }

    .from-text {
      font-size: 1rem;
      color: var(--love-rose);
      margin-bottom: 2rem;
      font-style: italic;
    }

    .message {
      color: #4B5563;
      font-size: 1rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .message p {
      margin-bottom: 0.6rem;
    }

    .surprise-btn {
      padding: 0.95rem 2.2rem;
      background: linear-gradient(135deg, var(--love-rose), var(--love-pink));
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.05rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
    }

    .surprise-btn:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
    }

    .surprise-btn:active {
      transform: translateY(0) scale(0.98);
    }

    .secret-message {
      margin-top: 2rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, #FDF2F8, #FCE7F3);
      border-radius: 16px;
      border-left: 4px solid var(--love-rose);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.8s ease-out;
    }

    .secret-message.show {
      opacity: 1;
      transform: translateY(0);
    }

    .secret-text {
      color: var(--love-deep);
      font-size: 1rem;
      line-height: 1.8;
    }

    .secret-text strong {
      font-size: 1.3rem;
      color: var(--love-pink);
      display: block;
      margin: 0.5rem 0;
    }

    @media (max-width: 480px) {
      .love-card {
        padding: 2rem 1.5rem;
        margin: 1rem;
      }
      .names-top { font-size: 1.4rem; }
      .danisha-name { font-size: 1.7rem; }
      .main-heart { font-size: 3rem; }
    }
  </style>
</svelte:head>

<div class="love-page">
  {#each hearts as heart}
    <span 
      class="heart" 
      style="
        left: {heart.x}%; 
        animation-delay: {heart.delay}s; 
        animation-duration: {heart.duration}s;
        font-size: {heart.size}rem;
      "
    >
      ❤️
    </span>
  {/each}

  <main class="love-card">
    <div class="main-heart">💖</div>
    
    <p class="names-top">To my beautiful</p>
    <h1 class="danisha-name">Danisha</h1>
    <p class="from-text">From your Tanatswanashe 💕</p>

    <div class="message">
      <p>You make every day brighter just by being you.</p>
      <p>Your smile is my favourite sight,</p>
      <p>your laugh is my favourite sound.</p>
      <p>You are wonderful, amazing, and so loved 💕</p>
    </div>

    <button class="surprise-btn" on:click={showSecret}>
      {#if !revealed}
        ✨ Click for a Surprise ✨
      {:else}
        💖 I Love You Too 💖
      {/if}
    </button>

    {#if revealed}
      <div class="secret-message show">
        <p class="secret-text">
          💝 You are the most special person in my world.<br><br>
          I didn't need a special day to tell you this —<br>
          but I'll take every chance I get to say:<br><br>
          <strong>I love you so much, Danisha</strong>
          Forever yours, always and forever 💘<br><br>
          — Tanatswanashe
        </p>
      </div>
    {/if}
  </main>
</div>

<script>
  import { onMount } from 'svelte';

  let revealed = false;
  let hearts = [];

  function showSecret() {
    revealed = true;
    // 💥 Burst of hearts on click!
    for (let i = 0; i < 25; i++) {
      addHeart();
    }
  }

  function addHeart() {
    hearts = [
      ...hearts,
      {
        x: Math.random() * 90 + 5, // Keep within 5%–95% so no hearts go off-screen
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 5,
        size: 1 + Math.random() * 2
      }
    ];
  }

  onMount(() => {
    // Initial floating hearts
    for (let i = 0; i < 18; i++) {
      addHeart();
    }
  });
</script>
