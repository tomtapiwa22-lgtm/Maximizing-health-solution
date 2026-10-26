<svelte:head>
  <title>Client Dashboard — Maximizing Health Solution</title>
  <meta name="description" content="Your personal care and wellness overview" />
</svelte:head>

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
      <a href="/" class="nav-logout">← Sign Out</a>
    </nav>
  </aside>

  <main class="dashboard-main">
    <header class="dashboard-header">
      <div>
        <h1>Welcome back, Sarah</h1>
        <p>Here's how your care journey looks today</p>
      </div>
      <div class="header-status">
        <span class="status-badge active">Care plan active</span>
      </div>
    </header>

    <section class="dashboard-grid">
      <div class="card highlight">
        <h3>Next Appointment</h3>
        <div class="card-value">Wednesday, 28 Oct</div>
        <p class="card-note">10:00 AM — Wellness check-in with Emma</p>
        <a href="#" class="card-link">Reschedule →</a>
      </div>

      <div class="card">
        <h3>Your Goals Progress</h3>
        <div class="progress-bar"><div class="fill" style="width: 72%">72%</div></div>
        <p class="card-note">You're doing beautifully — keep going</p>
      </div>

      <div class="card">
        <h3>Recent Updates</h3>
        <ul class="activity-list">
          <li><span class="time">Today</span> — Your plan was reviewed and looks great</li>
          <li><span class="time">Yesterday</span> — New resource shared: gentle movement guide</li>
          <li><span class="time">2 days ago</span> — Medication reminder updated</li>
        </ul>
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
  .sidebar-nav a {
    padding: 0.9rem 1rem; border-radius: 10px; text-decoration: none; color: var(--mid); font-weight: 500;
    transition: all 0.25s;
  }
  .sidebar-nav a:hover { background: var(--primary-soft); color: var(--primary); }
  .sidebar-nav a.active { background: var(--primary); color: white; font-weight: 600; }
  .nav-logout { margin-top: 2rem; color: var(--accent) !important; }

  .dashboard-main { flex: 1; padding: 2rem 2.5rem; }
  .dashboard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2.5rem; flex-wrap: wrap; gap: 1rem; }
  .dashboard-header h1 { font-size: 1.8rem; color: var(--dark); margin-bottom: 0.3rem; }
  .dashboard-header p { color: var(--mid); }
  .status-badge { padding: 0.5rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; }
  .status-badge.active { background: var(--primary-soft); color: #0f766e; }

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

  .progress-bar { height: 12px; background: #e2e8f0; border-radius: 6px; overflow: hidden; margin: 1rem 0; }
  .fill { height: 100%; background: linear-gradient(90deg, var(--primary), #5eead4); border-radius: 6px; display: flex; align-items: center; justify-content: flex-end; padding-right: 0.5rem; font-size: 0.75rem; font-weight: 700; color: white; }

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
    .sidebar-nav a { padding: 0.6rem 0.8rem; font-size: 0.85rem; }
    .dashboard-main { padding: 1.5rem; padding-bottom: 80px; }
  }
</style>
