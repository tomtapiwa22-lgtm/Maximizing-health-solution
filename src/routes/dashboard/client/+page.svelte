<svelte:head>
  <title>Client Dashboard — Maximizing Health Solution</title>
  <meta name="description" content="Your personal care and wellness overview" />
</svelte:head>

<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';

  // ✅ Runes-compatible prop receipt
  const data = $props();
  const { profile } = data;

  let appointments = [];
  let notes = [];
  let loading = true;

  async function loadData() {
    // Get client record
    const { data: client } = await supabase
      .from('clients')
      .select('id')
      .eq('profile_id', data.session.user.id)
      .single();

    if (client) {
      // Get upcoming appointments
      const { data: apts } = await supabase
        .from('appointments')
        .select('*, carer:carer_id(full_name)')
        .eq('client_id', client.id)
        .gte('scheduled_at', new Date().toISOString())
        .order('scheduled_at', { ascending: true })
        .limit(3);
      appointments = apts || [];

      // Get recent care notes
      const { data: logs } = await supabase
        .from('care_notes')
        .select('*, carer:carer_id(full_name), created_at')
        .eq('client_id', client.id)
        .order('created_at', { ascending: false })
        .limit(3);
      notes = logs || [];
    }
    loading = false;
  }

  async function signOut() {
    await supabase.auth.signOut();
    await goto('/');
  }

  loadData();

  function formatDate(isoStr) {
    return new Date(isoStr).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' });
  }
  function formatTime(isoStr) {
    return new Date(isoStr).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
  }
</script>

<div class="dashboard-layout">
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="logo-icon">♡</span>
      <span>Maximizing Health</span>
    </div>
    <nav class="sidebar-nav">
      <a href="/dashboard/client" class="active">Overview</a>
      <a href="#">My Care Plan</a>
      <a href="#">Appointments</a>
      <a href="#">Messages</a>
      <a href="#">Profile</a>
      <button on:click={signOut} class="nav-logout">← Sign Out</button>
    </nav>
  </aside>

  <main class="dashboard-main">
    <header class="dashboard-header">
      <div>
        <h1>Welcome back, {profile?.full_name?.split(' ')[0] || 'Friend'}</h1>
        <p>Here's how your care journey looks today</p>
      </div>
      <div class="header-status">
        <span class="status-badge active">Care plan active</span>
      </div>
    </header>

    {#if loading}
      <p class="loading">Loading your details...</p>
    {/if}

    {#if !loading}
    <section class="dashboard-grid">
      <div class="card highlight">
        <h3>Next Appointment</h3>
        {#if appointments[0]}
          <div class="card-value">{formatDate(appointments[0].scheduled_at)}</div>
          <p class="card-note">
            {formatTime(appointments[0].scheduled_at)} — {appointments[0].title}
            {#if appointments[0].carer?.full_name}
              with {appointments[0].carer.full_name}
            {/if}
          </p>
        {:else}
          <p class="card-value">No appointments yet</p>
          <p class="card-note">Your next appointment will show here once scheduled</p>
        {/if}
        <a href="#" class="card-link">View all →</a>
      </div>

      <div class="card">
        <h3>Recent Updates</h3>
        {#if notes.length > 0}
          <ul class="activity-list">
            {#each notes as note}
              <li>
                <span class="time">{formatDate(note.created_at)}</span>
                {note.content}
              </li>
            {/each}
          </ul>
        {:else}
          <p class="card-note">No updates yet — your care team will keep you posted</p>
        {/if}
      </div>

      <div class="card full-width">
        <h3>Quick Actions</h3>
        <div class="action-buttons">
          <a href="#" class="action-btn">Request Support</a>
          <a href="#" class="action-btn">Update Details</a>
          <a href="#" class="action-btn">View Documents</a>
        </div>
      </div>
    </section>
    {/if}
  </main>
</div>

<style>
  :root {
    --primary: #14b8a6;
    --primary-soft: #ccfbf1;
    --accent: #f43f5e;
    --dark: #0f172a;
    --mid: #475569;
    --light: #f8fafc;
    --radius: 16px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; font-family: system-ui, sans-serif; }

  .dashboard-layout { display: flex; min-height: 100vh; background: #f8fafc; }
  .sidebar {
    width: 260px; background: white; border-right: 1px solid #e2e8f0;
    padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 3rem;
  }
  .sidebar-brand { display: flex; align-items: center; gap: 0.6rem; font-weight: 700; color: var(--primary); font-size: 1.1rem; }
  .logo-icon { font-size: 1.4rem; }
  .sidebar-nav { display: flex; flex-direction: column; gap: 0.5rem; }
  .sidebar-nav a, .sidebar-nav button {
    padding: 0.9rem 1rem; border-radius: 10px; text-decoration: none;
    color: var(--mid); font-weight: 500; transition: all 0.25s;
    text-align: left; width: 100%; border: none; background: none; font-size: 1rem; cursor: pointer;
  }
  .sidebar-nav a:hover, .sidebar-nav button:hover { background: var(--primary-soft); color: var(--primary); }
  .sidebar-nav a.active { background: var(--primary); color: white; font-weight: 600; }
  .nav-logout { margin-top: 2rem; color: var(--accent) !important; }

  .dashboard-main { flex: 1; padding: 2rem 2.5rem; }
  .dashboard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
  .dashboard-header h1 { font-size: 1.8rem; color: var(--dark); margin-bottom: 0.3rem; }
  .dashboard-header p { color: var(--mid); }
  .status-badge { padding: 0.5rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; background: var(--primary-soft); color: #0f766e; }
  .loading { text-align: center; padding: 3rem; color: var(--mid); }

  .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .card {
    background: white; padding: 2rem; border-radius: var(--radius); box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }
  .card.highlight { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); border-left: 4px solid var(--primary); }
  .card.full-width { grid-column: 1 / -1; }
  .card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 1rem; }
  .card-value { font-size: 1.4rem; font-weight: 700; color: var(--primary); margin-bottom: 0.5rem; }
  .card-note { color: var(--mid); font-size: 0.95rem; margin-bottom: 1rem; line-height: 1.5; }
  .card-link { color: var(--primary); font-weight: 600; text-decoration: none; font-size: 0.95rem; }

  .activity-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .activity-list li { font-size: 0.9rem; color: var(--mid); line-height: 1.5; }
  .activity-list .time { font-weight: 600; color: var(--primary); margin-right: 0.5rem; }

  .action-buttons { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
  .action-btn { padding: 0.8rem 1.5rem; background: var(--primary-soft); color: var(--primary); border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.25s; }
  .action-btn:hover { background: var(--primary); color: white; }

  @media (max-width: 768px) {
    .sidebar { position: fixed; bottom: 0; left: 0; right: 0; width: 100%; flex-direction: row; padding: 0.8rem 1rem; border-right: none; border-top: 1px solid #e2e8f0; }
    .sidebar-brand { display: none; }
    .sidebar-nav { flex-direction: row; gap: 0.3rem; }
    .sidebar-nav a, .sidebar-nav button { padding: 0.6rem 0.8rem; font-size: 0.85rem; }
    .dashboard-main { padding: 1.5rem; padding-bottom: 80px; }
  }
</style>
