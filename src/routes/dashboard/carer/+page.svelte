<svelte:head>
  <title>Carer Dashboard — Maximizing Health Solution</title>
  <meta name="description" content="Your care assignments, schedule, and updates" />
</svelte:head>

<div class="dashboard-layout">
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="logo-icon">♡</span>
      <span>Maximizing Health</span>
    </div>
    <nav class="sidebar-nav">
      <a href="/dashboard/carer" class="active">Overview</a>
      <a href="#">My Clients</a>
      <a href="#">Schedule</a>
      <a href="#">Care Logs</a>
      <a href="#">Resources</a>
      <a href="/" class="nav-logout">← Sign Out</a>
    </nav>
  </aside>

  <main class="dashboard-main">
    <header class="dashboard-header">
      <div>
        <h1>Welcome back, Emma</h1>
        <p>Thank you for the care you give — it matters deeply</p>
      </div>
      <div class="header-status">
        <span class="status-badge active">On shift</span>
      </div>
    </header>

    <section class="dashboard-grid">
      <div class="card highlight">
        <h3>Today's Schedule</h3>
        <ul class="schedule-list">
          <li><span class="time">10:00</span> — Sarah M. — Wellness check-in</li>
          <li><span class="time">13:00</span> — David K. — Personal care</li>
          <li><span class="time">15:30</span> — Priya N. — Medication review</li>
        </ul>
        <a href="#" class="card-link">View full calendar →</a>
      </div>

      <div class="card">
        <h3>Your Assigned Clients</h3>
        <div class="stat-large">8</div>
        <p class="card-note">All plans up to date</p>
        <div class="mini-progress"><div class="fill" style="width: 100%"></div></div>
      </div>

      <div class="card">
        <h3>Recent Updates</h3>
        <ul class="activity-list">
          <li><span class="time">2h ago</span> — Sarah shared progress note</li>
          <li><span class="time">5h ago</span> — New guideline: Fall prevention updated</li>
          <li><span class="time">Yesterday</span> — David's plan reviewed & approved</li>
        </ul>
      </div>

      <div class="card">
        <h3>Pending Tasks</h3>
        <ul class="task-list">
          <li class="pending">Submit daily log — Sarah M.</li>
          <li class="pending">Update notes — Priya N.</li>
          <li class="done">Check-in complete — David K.</li>
        </ul>
      </div>

      <div class="card full-width">
        <h3>Quick Actions</h3>
        <div class="action-buttons">
          <a href="#" class="action-btn">Record Care Note</a>
          <a href="#" class="action-btn">View Client Plans</a>
          <a href="#" class="action-btn">Report Concern</a>
          <a href="#" class="action-btn">Request Support</a>
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
    --success: #10b981;
    --warning: #f59e0b;
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
  .dashboard-header p { color: var(--mid); font-style: italic; }
  .status-badge { padding: 0.5rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; }
  .status-badge.active { background: #d1fae5; color: #065f46; }

  .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; }
  .card {
    background: white; padding: 2rem; border-radius: var(--radius); box-shadow: 0 4px 12px rgba(0,0,0,0.04);
  }
  .card.highlight { background: linear-gradient(135deg, #f0fdfa, #ccfbf1); border-left: 4px solid var(--primary); }
  .card.full-width { grid-column: 1 / -1; }
  .card h3 { font-size: 1.1rem; color: var(--dark); margin-bottom: 1rem; }
  .stat-large { font-size: 2.5rem; font-weight: 800; color: var(--primary); margin-bottom: 0.3rem; }
  .card-note { color: var(--mid); font-size: 0.95rem; margin-bottom: 0.8rem; }
  .mini-progress { height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden; }
  .mini-progress .fill { height: 100%; background: var(--success); border-radius: 4px; width: 100%; }
  .card-link { color: var(--primary); font-weight: 600; text-decoration: none; font-size: 0.95rem; display: inline-block; margin-top: 0.5rem; }

  .schedule-list, .activity-list, .task-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .schedule-list li, .activity-list li { font-size: 0.95rem; color: var(--mid); line-height: 1.5; }
  .schedule-list .time, .activity-list .time { font-weight: 600; color: var(--primary); margin-right: 0.5rem; }
  .task-list li { padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; font-size: 0.9rem; }
  .task-list .pending { color: var(--warning); }
  .task-list .done { color: var(--success); text-decoration: line-through; }

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
