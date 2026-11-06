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
      --love-glow: rgba(236, 72, 153, 0.4);
      --white: #FFFFFF;
      --radius: 24px;
    }

    .love-page {
      font-family: 'Segoe UI', cursive, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
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
      opacity: 0.6;
      animation: float 6s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes float {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      10% { opacity: 0.6; }
      90% { opacity: 0.6; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    @keyframes pulse-heart {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    @keyframes glow {
      0%, 100% { box-shadow: 0 8px 32px var(--love-glow), 0 0 0 rgba(236,72,153,0); }
      50% { box-shadow: 0 8px 32px var(--love-glow), 0 0 40px var(--love-glow); }
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
      max-width: 480px;
      position: relative;
      z-index: 10;
      animation: fadeUp 1s ease-out, glow 3s ease-in-out infinite;
      text-align: center;
    }

    .main-heart {
      font-size: 4rem;
      margin-bottom: 1rem;
      display: inline-block;
      animation: pulse-heart 1.2s ease-in-out infinite;
    }

    .names {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--love-deep);
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    .danisha-name {
      background: linear-gradient(90deg, var(--love-rose), var(--love-pink), var(--love-rose));
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s linear infinite;
      font-size: 2.2rem;
    }

    .from-text {
      font-size: 1rem;
      color: var(--love-rose);
      margin-bottom: 2rem;
      font-style: italic;
    }

    .message {
      color: #4B5563;
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 2rem;
    }

    .message p {
      margin-bottom: 0.8rem;
    }

    .surprise-btn {
      padding: 1rem 2.5rem;
      background: linear-gradient(135deg, var(--love-rose), var(--love-pink));
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
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
      animation: fadeUp 0.8s ease-out forwards;
      opacity: 0;
      transform: translateY(20px);
    }

    .secret-message.show {
      opacity: 1;
      transform: translateY(0);
    }

    .secret-text {
      color: var(--love-deep);
      font-size: 1.05rem;
      line-height: 1.7;
    }

    .countdown {
      margin-top: 1.5rem;
      font-size: 0.95rem;
      color: var(--love-rose);
      font-weight: 500;
    }

    @media (max-width: 480px) {
      .love-card {
        padding: 2rem 1.5rem;
      }
      .names {
        font-size: 1.5rem;
      }
      .danisha-name {
        font-size: 1.8rem;
      }
      .main-heart {
        font-size: 3rem;
      }
    }
  </style>
</svelte:head>

<div class="love-page">
  {#each hearts as heart, i}
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
    
    <h1 class="names">
      To my beautiful<br>
      <span class="danisha-name">Danisha</span>
    </h1>
    <p class="from-text">From your Tanatswanashe 💕</p>

    <div class="message">
      <p>You make every day brighter just by being you.</p>
      <p>Your smile is my favourite sight,<br>your laugh is my favourite sound.</p>
      <p>You are wonderful, amazing, and so loved 💗</p>
    </div>

    <button class="surprise-btn" on:click={showSecret}>
      ✨ Click for a Surprise ✨
    </button>

    {#if revealed}
      <div class="secret-message show">
        <p class="secret-text">
          💝 You are the most special person in my world.<br><br>
          I didn't need a special day to tell you this —<br>
          but I'll take every chance I get to say:<br><br>
          <strong style="font-size:1.3rem; color:#EC4899;">I love you so much, Danisha</strong><br><br>
          Forever yours,<br>
          <em>Tanatswanashe</em> 💘
        </p>
        <p class="countdown">💕 Always and forever 💕</p>
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
    // Generate extra hearts on click
    for (let i = 0; i < 15; i++) {
      addHeart();
    }
  }

  function addHeart() {
    hearts = [
      ...hearts,
      {
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 4 + Math.random() * 5,
        size: 1 + Math.random() * 2,
        id: Date.now() + Math.random()
      }
    ];
  }

  onMount(() => {
    // Generate initial floating hearts
    for (let i = 0; i < 20; i++) {
      addHeart();
    }
  });
</script>
