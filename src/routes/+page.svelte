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
      background: radial-gradient(circle at top left, #ffe4ec 0%, #fce7f3 30%, #fbcfe8 60%, #f9a8d4 100%);
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

    /* Music note */
    .music-note {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      font-size: 1.5rem;
      z-index: 100;
      animation: bounce 1s ease-in-out infinite;
      color: #ec4899;
      background: rgba(255,255,255,0.9);
      padding: 0.5rem 0.8rem;
      border-radius: 50px;
      box-shadow: 0 2px 10px rgba(236,72,153,0.2);
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }

    /* Butterfly — zig-zag flight */
    .butterfly {
      position: absolute;
      pointer-events: none;
      z-index: 2;
      animation: zigZagFly 12s ease-in-out infinite;
    }

    .b-shape {
      position: relative;
      width: 28px;
      height: 26px;
      transform-origin: center;
      animation: flutter 0.5s ease-in-out infinite alternate;
    }

    .b-wing {
      position: absolute;
      width: 14px;
      height: 22px;
      border-radius: 50% 50% 0 0;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      box-shadow: 0 0 8px rgba(236,72,153,0.5);
    }

    .b-wing.left {
      left: 0;
      transform: rotate(-45deg);
      transform-origin: bottom right;
    }

    .b-wing.right {
      right: 0;
      transform: rotate(45deg);
      transform-origin: bottom left;
    }

    .b-center {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 10px;
      height: 12px;
      background: linear-gradient(135deg, #ec4899, #f43f5e);
      border-radius: 50%;
    }

    @keyframes zigZagFly {
      0% {
        transform: translateY(100vh) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% { opacity: 1; }
      25% { transform: translateY(70vh) translateX(40px) rotate(10deg); }
      40% { transform: translateY(50vh) translateX(-50px) rotate(-8deg); }
      55% { transform: translateY(30vh) translateX(60px) rotate(12deg); }
      70% { transform: translateY(10vh) translateX(-40px) rotate(-5deg); }
      85% { opacity: 1; }
      100% {
        transform: translateY(-10vh) translateX(20px) rotate(0deg);
        opacity: 0;
      }
    }

    @keyframes flutter {
      0% { transform: scaleX(1) rotateY(0deg); }
      100% { transform: scaleX(0.75) rotateY(180deg); }
    }

    /* Crossing hearts */
    .cross-heart {
      position: absolute;
      pointer-events: none;
      z-index: 1;
      font-size: 1.5rem;
      animation: crossFly 8s ease-in-out infinite;
    }

    @keyframes crossFly {
      0% {
        transform: translateY(100vh) translateX(-30px) rotate(0deg);
        opacity: 0;
      }
      20% { opacity: 1; }
      50% { transform: translateY(45vh) translateX(30px) rotate(180deg); }
      80% { opacity: 1; }
      100% {
        transform: translateY(-10vh) translateX(-20px) rotate(360deg);
        opacity: 0;
      }
    }

    /* Floating hearts */
    .heart {
      position: absolute;
      color: #f472b6;
      animation: rise 6s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
      font-size: 1.3rem;
    }

    @keyframes rise {
      0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
      15% { opacity: 0.9; }
      85% { opacity: 0.9; }
      100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
    }

    /* Sparkles */
    .sparkle {
      position: absolute;
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px #fff, 0 0 18px #f472b6;
      animation: sparkle 3s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0.5); }
      50% { opacity: 1; transform: scale(1.4); }
    }

    /* Confetti */
    .confetti {
      position: absolute;
      width: 10px;
      height: 16px;
      background: linear-gradient(135deg, #ec4899, #f43f5e, #f9a8d4);
      animation: confettiFall 5s ease-in-out infinite;
      pointer-events: none;
      z-index: 1;
    }

    @keyframes confettiFall {
      0% {
        transform: translateY(-10vh) translateX(0) rotate(0deg);
        opacity: 0;
      }
      10% { opacity: 1; }
      50% { transform: translateY(50vh) translateX(30px) rotate(180deg); }
      100% {
        transform: translateY(100vh) translateX(-20px) rotate(360deg);
        opacity: 0;
      }
    }

    /* Glow orbs */
    .glow-orb {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%);
      animation: orbPulse 4s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }

    @keyframes orbPulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.6); opacity: 0.9; }
    }

    /* Image styles — super amazing */
    .photo-frame {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid white;
      box-shadow: 0 0 20px rgba(236,72,153,0.3), 0 5px 20px rgba(0,0,0,0.1);
      opacity: 0;
      transform: scale(0.8) rotate(-5deg);
      animation: photoPop 0.8s ease-out forwards;
      position: relative;
    }

    .photo-frame:nth-child(1) {
      animation-delay: 0.4s;
      float: left;
      margin: 0 0 1rem 0;
    }

    .photo-frame:nth-child(2) {
      animation-delay: 0.7s;
      float: right;
      margin: 0 0 1rem 1rem;
    }

    .photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 3s ease;
    }

    .photo-frame:hover img {
      transform: scale(1.1);
    }

    @keyframes photoPop {
      0% {
        opacity: 0;
        transform: scale(0.8) rotate(-5deg);
      }
      60% {
        transform: scale(1.05) rotate(2deg);
      }
      100% {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    /* Card */
    .card {
      background: white;
      padding: 2.5rem 2rem;
      border-radius: 24px;
      width: 100%;
      max-width: 420px;
      text-align: center;
      position: relative;
      z-index: 10;
      box-shadow: 0 10px 40px rgba(236,72,153,0.15);
      animation: fadeInUp 1.2s ease-out;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .heart-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      animation: pulse 1.2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }

    .to-you {
      color: #9d174d;
      font-size: 1rem;
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.3s forwards;
    }

    .danisha {
      font-size: 2.2rem;
      font-weight: 700;
      color: #ec4899;
      margin-bottom: 0.5rem;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.6s forwards;
    }

    .from {
      color: #be185d;
      font-size: 0.9rem;
      margin-bottom: 2rem;
      font-style: italic;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 0.9s forwards;
    }

    .words {
      color: #6b7280;
      line-height: 1.8;
      margin-bottom: 2rem;
      font-size: 0.95rem;
      clear: both;
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
      padding: 1.5rem;
      background: #fdf2f7;
      border-radius: 16px;
      border-left: 3px solid #ec4899;
      line-height: 1.8;
      opacity: 0;
      animation: fadeInDelay 1s ease-out 2.5s forwards;
      clear: both;
    }

    .big-love {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ec4899;
      margin: 0.8rem 0;
    }

    .signature {
      margin-top: 1rem;
      color: #9d174d;
      font-style: italic;
      font-size: 0.9rem;
    }

    @keyframes fadeInDelay {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 480px) {
      .card {
        padding: 2rem 1.5rem;
        margin: 1rem;
      }
      .danisha { font-size: 1.8rem; }
      .photo-frame {
        width: 110px;
        height: 110px;
      }
    }
  </style>
</svelte:head>

<div class="container">
  {#if musicReady}
    <div class="music-note">🎵 playing…</div>
  {/if}

  <!-- Background animations -->
  {#each glowOrbs as orb}
    <div
      class="glow-orb"
      style="
        left: {orb.x}%;
        top: {orb.y}%;
        animation-delay: {orb.delay}s;
        width: {orb.size}px;
        height: {orb.size}px;
      "
    ></div>
  {/each}

  {#each butterflies as b}
    <div
      class="butterfly"
      style="
        left: {b.x}%;
        animation-delay: {b.delay}s;
        animation-duration: {b.dur}s;
        transform: scale({b.scale});
      "
    >
      <div class="b-shape">
        <div class="b-wing left"></div>
        <div class="b-wing right"></div>
        <div class="b-center"></div>
      </div>
    </div>
  {/each}

  {#each crossHearts as h}
    <span
      class="cross-heart"
      style="
        left: {h.x}%;
        animation-delay: {h.delay}s;
        animation-duration: {h.dur}s;
        font-size: {h.size}rem;
      "
    >💖</span>
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

  {#each confetti as c}
    <div
      class="confetti"
      style="
        left: {c.x}%;
        animation-delay: {c.delay}s;
        animation-duration: {c.dur}s;
        transform: rotate({c.rotate}deg);
      "
    ></div>
  {/each}

  <!-- Main card -->
  <div class="card">
    <div class="heart-icon">💖</div>

    <!-- ✨ YOUR 2 IMAGES HERE ✨ -->
    <div class="photo-frame">
      <img src="/photo1.jpg" alt="Photo 1" loading="lazy" />
    </div>
    <div class="photo-frame">
      <img src="/photo2.jpg" alt="Photo 2" loading="lazy" />
    </div>

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
  let crossHearts = [];
  let hearts = [];
  let sparkles = [];
  let confetti = [];
  let glowOrbs = [];
  let musicReady = false;
  let audio = null;

  const SONG_URL = '/WhatsApp Audio 2026-11-06 at 18.25.51.mpeg';

  function addButterfly() {
    butterflies = [...butterflies, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 10,
      dur: 6 + Math.random() * 6,
      scale: 0.6 + Math.random() * 0.8
    }];
  }

  function addCrossHeart() {
    crossHearts = [...crossHearts, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 7,
      dur: 5 + Math.random() * 4,
      size: 1.2 + Math.random() * 0.8
    }];
  }

  function addHeart() {
    hearts = [...hearts, {
      x: 5 + Math.random() * 90,
      delay: Math.random() * 5,
      dur: 4 + Math.random() * 4
    }];
  }

  function addSparkle() {
    sparkles = [...sparkles, {
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3
    }];
  }

  function addConfetti() {
    confetti = [...confetti, {
      x: Math.random() * 100,
      delay: Math.random() * 6,
      dur: 4 + Math.random() * 3,
      rotate: Math.random() * 360
    }];
  }

  function addGlowOrb() {
    glowOrbs = [...glowOrbs, {
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4,
      size: 40 + Math.random() * 50
    }];
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      audio = new Audio(SONG_URL);
      audio.loop = true;
      audio.volume = 0.45;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => { musicReady = true; })
          .catch(() => {
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

    // Initial burst
    for (let i = 0; i < 18; i++) addButterfly();
    for (let i = 0; i < 12; i++) addCrossHeart();
    for (let i = 0; i < 20; i++) addHeart();
    for (let i = 0; i < 30; i++) addSparkle();
    for (let i = 0; i < 15; i++) addConfetti();
    for (let i = 0; i < 8; i++) addGlowOrb();

    // Keep adding continuously
    const bInterval = setInterval(() => {
      if (butterflies.length < 35) addButterfly();
    }, 1200);

    const chInterval = setInterval(() => {
      if (crossHearts.length < 25) addCrossHeart();
    }, 1000);

    const hInterval = setInterval(() => {
      if (hearts.length < 40) addHeart();
    }, 800);

    const sInterval = setInterval(() => {
      if (sparkles.length < 50) addSparkle();
    }, 600);
    const cInterval = setInterval(() => {
      if (confetti.length < 30) addConfetti();
    }, 900);

    const gInterval = setInterval(() => {
      if (glowOrbs.length < 15) addGlowOrb();
    }, 1500);

    return () => {
      clearInterval(bInterval);
      clearInterval(chInterval);
      clearInterval(hInterval);
      clearInterval(sInterval);
      clearInterval(cInterval);
      clearInterval(gInterval);
      if (audio) {
        audio.pause();
        audio = null;
      }
    };
  });
</script>

