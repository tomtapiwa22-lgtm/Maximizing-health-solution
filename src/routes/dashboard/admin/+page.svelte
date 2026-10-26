<svelte:head>
  <title>Admin Dashboard — Maximizing Health Solution</title>
  <meta name="description" content="System overview, management, and reporting" />
</svelte:head>

<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';

  // Runes-compatible prop receipt
  const data = $props();
  const { profile } = data;

  let clientsCount = 0;
  let carersCount = 0;
  let appointments = [];
  let loading = true;

  async function loadData() {
    const { count: cCount } = await supabase
      .from('clients')
      .select('*', { count: 'exact', head: true });
    clientsCount = cCount || 0;

    const { count: rCount } = await supabase
      .from('profiles')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'carer');
    carersCount = rCount || 0;

    const { data: apts } = await supabase
      .from('appointments')
      .select('*, client:client_id(profile:profile_id(full_name)), carer:carer_id(full_name)')
      .order('scheduled_at', { ascending: true })
      .limit(5);
    appointments = apts || [];

    loading = false;
  }

  async function signOut() {
    await supabase.auth.signOut();
    await goto('/');
  }

  loadData();

  function formatDate(isoStr) {
    return new Date(isoStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  }
</script>

<div class="dashboard-layout">
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="logo-icon">♡</span>
      <span>Maximizing Health</span>
    </div>
    <nav class="sidebar-nav">
      <a href="/dashboard/admin" class="active">Overview</a>
      <a href="#">Manage Users</a>
      <a href="#">All Care Plans</a>
      <a href="#">Reports & Compliance</a>
      <a href="#">System Settings</a>
      <button on:click={signOut} class="nav-logout">← Sign Out</button>
    </nav>
  </aside>

  <main class="dashboard-main">
    <header class="dashboard-header">
      <div>
        <h1>Administration Overview</h1>
        <p>Welcome back, {profile?.full_name || 'Admin'}</p>
      </div>
      <div class="header-status">
        <span class="status-badge system-ok">System Online</span>
      </div>
    </header>

    {#if loading}
      <p class="loading">Loading system data...</p>
    {/if}

    {#if !loading}
    <section class="metrics-row">
      <div class="metric-card">
        <div class="metric-label">Active Clients</div>
        <div class="metric-value">{clientsCount}</div>
        <div class="metric-change positive">All plans active</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Active Carers</div>
        <div class="metric-value">{carersCount}</div>
        <div class="metric-change neutral">All accounts verified</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Appointments</div>
        <div class="metric-value">{appointments.length}</div>
        <div class="metric-change positive">Upcoming scheduled</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">System Status</div>
        <div class="metric-value">Good</div>
        <div class="metric-change positive">100% operational</div>
      </div>
    </section>

    <section class="dashboard-grid">
      <div class="card highlight">
        <h3>Upcoming Appointments</h3>
        {#if appointments.length > 0}
          <ul class="activity-list">
            {#each appointments as apt}
              <li>
                <span class="time">{formatDate(apt.scheduled_at)}</span>
                {apt.client?.profile?.full_name} — {apt.title}
                <span class="carer-name">({apt.carer?.full_name})</span>
              </li>
            {/each}
          </ul>
        {:else}
          <p class="card-note">No appointments scheduled</p>
        {/if}
      </div>

      <div class="card">
        <h3>Quick Actions</h3>
        <div class="action-buttons stacked">
          <a href="#" class="action-btn primary">Create User Account</a>
          <a href="#" class="action-btn">Generate Report</a>
          <a href="#" class="action-btn">Review Open Concerns</a>
          <a href="#" class="action-btn">Send System Announcement</a>
        </div>
      </div>

      <div class="card full-width">
        <h3>Upcoming Reviews & Deadlines</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Quarterly compliance audit</td>
              <td>Admin — You</td>
              <td>05 Nov 2026</td>
              <td><span class="status-tag pending">In Progress</span></td>
            </tr>
            <tr>
              <td>David K. — Care plan review</td>
              <td>Emma (Carer)</td>
              <td>29 Oct 2026</td>
              <td><span class="status-tag scheduled">Scheduled</span></td>
            </tr>
            <tr>
              <td>Annual policy update</td>
              <td>Admin — You</td>
              <td>15 Nov 2026</td>
              <td><span class="status-tag upcoming">Not Started</span></td>
            </tr>
          </tbody>
        </table>
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
    --success: #10b981;
    --warning: #f59e0b;
    --neutral: #6366f1;
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
  .dashboard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
  .dashboard-header h1 { font-size: 1.8rem; color: var(--dark); margin-bottom: 0.3rem; }
  .dashboard-header p { color: var(--mid); }
  .status-badge { padding: 0.5rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; background: #d1fae5; color: #065f46; }
  .loading { text-align: center; padding: 3rem; color: var(--mid); }

  .metrics-row {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.2rem;
    margin-bottom: 2rem;
  }
  .metric-card {
    background: white; padding: 1.5rem; border-radius: var(--radius); box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  .metric-label { font-size: 0.9rem; color: var(--mid); margin-bottom: 0.5rem; }
  .metric-value { font-size: 2rem; font-weight: 800; color: var(--dark); margin-bottom: 0.3rem; }
  .metric-change { font-size: 0.85rem; font-weight: 600; }
  .metric-change.positive { color: var(--success); }
  .metric-change.neutral { color: var(--neutral); }
  .metric-change.warning { color: var(--warning); }

  .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .card {
    background: white; padding: 2rem; border-radius: var(--radius); box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }
  .card.highlight { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); border-left: 4px solid var(--primary); }
  .card.full-width { grid-column: 1 / -1; }
  .card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 1rem; }

  .activity-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .activity-list li { font-size: 0.9rem; color: var(--mid); line-height: 1.5; }
  .activity-list .time { font-weight: 600; color: var(--primary); margin-right: 0.5rem; }
  .carer-name { color: var(--mid); font-size: 0.85rem; }

  .action-buttons { display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 0.5rem; }
  .action-buttons.stacked { flex-direction: column; }
  .action-btn { padding: 0.8rem 1.5rem; background: var(--primary-soft); color: var(--primary); border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.25s; text-align: center; }
  .action-btn:hover { background: var(--primary); color: white; }
  .action-btn.primary { background: var(--primary); color: white; }
  .action-btn.primary:hover { background: #0d9488; }

  .data-table { width: 100%; border-collapse: collapse; margin-top: 0.5rem; }
  .data-table th, .data-table td { padding: 0.75rem 1rem; text-align: left; border-bottom: 1px solid #e2e8f0; font-size: 0.9rem; }
  .data-table th { font-weight: 600; color: var(--dark); background: #f8fafc; }
  .status-tag { padding: 0.25rem 0.75rem; border-radius: 12px; font-size: 0.8rem; font-weight: 600; }
  .status-tag.pending { background: #fef3c7; color: #92400e; }
  .status-tag.scheduled { background: #d1fae5; color: #065f46; }
  .status-tag.upcoming { background: #e0e7ff; color: #3730a3; }

  @media (max-width: 768px) {
    .sidebar { position: fixed; bottom: 0; left: 0; right: 0; width: 100%; flex-direction: row; padding: 0.8rem 1rem; border-right: none; border-top: 1px solid #e2e8f0; }
    .sidebar-brand { display: none; }
    .sidebar-nav { flex-direction: row; gap: 0.3rem; }
    .sidebar-nav a, .sidebar-nav button { padding: 0.6rem 0.8rem; font-size: 0.85rem; }
    .dashboard-main { padding: 1.5rem; padding-bottom: 80px; }
  }
</style>
