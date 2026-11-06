<svelte:head>
  <title>For Danisha 🦋💖</title>
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
      background: linear-gradient(180deg, #fef2f7 0%, #fce7f3 50%, #fbcfe8 100%);
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

    /* Butterfly-shaped hearts */
    .butterfly-heart {
      position: absolute;
      pointer-events: none;
      z-index: 1;
      animation: flyButterfly 10s ease-in-out infinite;
    }

    .bh-shape {
      position: relative;
      width: 24px;
      height: 22px;
      transform-origin: center;
      animation: flutterWings 0.6s ease-in-out infinite alternate;
    }

    .bh-wing {
      position: absolute;
      width: 12px;
      height: 18px;
      border-radius: 50% 50% 0 0;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      box-shadow: 0 0 6px rgba(236,72,153,0.4);
    }

    .bh-wing.left {
      left: 0;
      transform: rotate(-45deg);
      transform-origin: bottom right;
    }

    .bh-wing.right {
      right: 0;
      transform: rotate(45deg);
      transform-origin: bottom left;
    }

    .bh-center {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 10px;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      border-radius: 50%;
    }

    @keyframes flyButterfly {
      0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      50% { transform: translateY(50vh) translateX(30px) rotate(5deg); }
      80% { opacity: 0.9; }
      100% { transform: translateY(-10vh) translateX(-20px) rotate(-5deg); opacity: 0; }
    }

    @keyframes flutterWings {
      0% { transform: scaleX(1); }
      100% { transform: scaleX(0.85); }
    }

    /* Floating hearts */
    .heart {
      position: absolute;
      color: #f472b6;
      animation: rise 7s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
      font-size: 1.4rem;
    }

    @keyframes rise {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      15% { opacity: 0.8; }
      85% { opacity: 0.8; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    /* Sparkles */
    .sparkle {
      position: absolute;
      width: 6px;
      height: 6px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 8px #fff, 0 0 12px #f472b6;
      animation: sparkle 4s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0.5); }
      50% { opacity: 1; transform: scale(1.2); }
    }

    /* Card animations */
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes gentleGlow {
      0%, 100% { box-shadow: 0 10px 40px rgba(244, 114, 182, 0.25); }
      50% { box-shadow: 0 10px 50px rgba(244, 114, 182, 0.4), 0 0 30px rgba(236,72,153,0.2); }
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
      border-radius: 32px;
      width: 100%;
      max-width: 440px;
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
      font-size: 2.3rem;
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
      font-size: 1.05rem;
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
      padding: 2rem;
      background: linear-gradient(135deg, #fdf2f7, #fce7f3);
      border-radius: 24px;
      border-left: 4px solid #ec4899;
      line-height: 2;
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 1s ease-out 2.5s forwards;
    }

    .big-love {
      font-size: 1.4rem;
      font-weight: 700;
      color: #ec4899;
      margin: 1rem 0;
    }

    .signature {
      margin-top: 1rem;
      color: #9d174d;
      font-style: italic;
    }

    .music-note {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 1.5rem;
      z-index: 100;
      animation: bounce 1s ease-in-out infinite;
      color: #ec4899;
      background: rgba(255,255,255,0.8);
      padding: 0.5rem 0.8rem;
      border-radius: 50px;
      box-shadow: 0 2px 10px rgba(236,72,153,0.2);
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @media (max-width: 480px) {
      .card {
        padding: 2rem 1.5rem;
        margin: 1rem;
      }
      .danisha {
        font-size: 1.9rem;
      }
      .heart-icon {
        font-size: 3rem;
      }
      .music-note {
        font-size: 1.2rem;
        padding: 0.4rem 0.6rem;
      }
    }
  </style>
</svelte:head>

<div class="container">
  {#if musicReady}
    <div class="music-note">🎵 playing…</div>
  {/if}

  {#each butterflies as b}
    <div
      class="butterfly-heart"
      style="
        left: {b.x}%;
        animation-delay: {b.delay}s;
        animation-duration: {b.dur}s;
        transform: scale({b.scale});
      "
    >
      <div class="bh-shape">
        <div class="bh-wing left"></div>
        <div class="bh-wing right"></div>
        <div class="bh-center"></div>
      </div>
    </div>
  {/each}

  {#each hearts as h}
    <span
      class="heart"
      style="
        left: {h.x}%;
        animation-delay: {h.delay}s;
        animation-duration: {h.dur}s;
      "
    >❤️</span>
  {/each}

  {#each sparkles as s}
    <div
      class="sparkle"
      style="
        left: {s.x}%;
        top: {s.y}%;
        animation-delay: {s.delay}s;
      "
    ></div>
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
  import { onMount, onDestroy } from 'svelte';

  let butterflies = [];
  let hearts = [];
  let sparkles = [];
  let musicReady = false;
  let audio = null;

  // ✅ Your song file — make sure it's in /static folder
  const SONG_URL = '/WhatsApp Audio 2026-11-06 at 18.25.51.mpeg';

  function addButterfly() {
    butterflies = [...butterflies, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 8,
      dur: 7 + Math.random() * 5,
      scale: 0.7 + Math.random() * 0.6
    }];
  }

  function addHeart() {
    hearts = [...hearts, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 6,
      dur: 5 + Math.random() * 4
    }];
  }

  function addSparkle() {
    sparkles = [...sparkles, {
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }];
  }

  onMount(() => {
    // Start music
    if (typeof window !== 'undefined') {
      audio = new Audio(SONG_URL);
      audio.loop = true;
      audio.volume = 0.45;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            musicReady = true;
          })
          .catch(() => {
            // Browser blocked autoplay — start on first click/tap
            const enableAudio = () => {
              if (audio) {
                audio.play();
                musicReady = true;
              }
              document.removeEventListener('click', enableAudio);
              document.removeEventListener('touchstart', enableAudio);
            };
            document.addEventListener('click', enableAudio);
            document.addEventListener('touchstart', enableAudio);
          });
      }
    }

    // Initial animations
    for (let i = 0; i < 10; i++) addButterfly();
    for (let i = 0; i < 15; i++) addHeart();
    for (let i = 0; i < 25; i++) addSparkle();

    // Keep adding gently forever
    const bInterval = setInterval(() => {
      if (butterflies.length < 25) addButterfly();
    }, 2000);

    const hInterval = setInterval(() => {
      if (hearts.length < 35) addHeart();
    }, 1500);

    const sInterval = setInterval(() => {
      if (sparkles.length < 40) addSparkle();
    }, 1000);

    return () => {
      clearInterval(bInterval);
      clearInterval(hInterval);
      clearInterval(sInterval);
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  });
</script>
