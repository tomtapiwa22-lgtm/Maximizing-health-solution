<svelte:head>
  <title>Admin Dashboard — Maximizing Health Solution</title>
  <meta name="description" content="System overview, management, and reporting" />
</svelte:head>

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
      <a href="/" class="nav-logout">← Sign Out</a>
    </nav>
  </aside>

  <main class="dashboard-main">
    <header class="dashboard-header">
      <div>
        <h1>Administration Overview</h1>
        <p>System health and activity at a glance</p>
      </div>
      <div class="header-status">
        <span class="status-badge system-ok">System Online</span>
      </div>
    </header>

    <!-- Key Metrics -->
    <section class="metrics-row">
      <div class="metric-card">
        <div class="metric-label">Active Clients</div>
        <div class="metric-value">42</div>
        <div class="metric-change positive">+3 this week</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Active Carers</div>
        <div class="metric-value">12</div>
        <div class="metric-change neutral">All scheduled</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Care Plans Active</div>
        <div class="metric-value">42 / 42</div>
        <div class="metric-change positive">100% compliant</div>
      </div>
      <div class="metric-card">
        <div class="metric-label">Open Reports</div>
        <div class="metric-value">1</div>
        <div class="metric-change warning">Needs attention</div>
      </div>
    </section>

    <section class="dashboard-grid">
      <div class="card highlight">
        <h3>Recent Activity</h3>
        <ul class="activity-list">
          <li><span class="time">10:42</span> — New client account created: Sarah M.</li>
          <li><span class="time">09:15</span> — Compliance report generated — Oct 2026</li>
          <li><span class="time">Yesterday</span> — Fall prevention guideline updated system-wide</li>
          <li><span class="time">2 days ago</span> — Concern logged — Priya N. — in review</li>
        </ul>
        <a href="#" class="card-link">View full activity log →</a>
      </div>

      <div class="card">
        <h3>Staff Availability</h3>
        <ul class="status-list">
          <li><span class="dot online"></span> 8 carers on shift now</li>
          <li><span class="dot away"></span> 2 carers on leave</li>
          <li><span class="dot offline"></span> 2 carers not scheduled</li>
        </ul>
      </div>

      <div class="card">
        <h3>Compliance Status</h3>
        <div class="compliance-bar">
          <div class="label">Documentation up to date</div>
          <div class="bar-bg"><div class="bar-fill" style="width: 96%">96%</div></div>
        </div>
        <div class="compliance-bar">
          <div class="label">Risk assessments complete</div>
          <div class="bar-bg"><div class="bar-fill" style="width: 91%">91%</div></div>
        </div>
        <div class="compliance-bar">
          <div class="label">Training records current</div>
          <div class="bar-bg"><div class="bar-fill" style="width: 100%">100%</div></div>
        </div>
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
  .sidebar-nav a {
    padding: 0.9rem 1rem; border-radius: 10px; text-decoration: none; color: var(--mid); font-weight: 500;
    transition: all 0.25s;
  }
  .sidebar-nav a:hover { background: var(--primary-soft); color: var(--primary); }
  .sidebar-nav a.active { background: var(--primary); color: white; font-weight: 600; }
  .nav-logout { margin-top: 2rem; color: var(--accent) !important; }

  .dashboard-main { flex: 1; padding: 2rem 2.5rem; }
  .dashboard-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }
  .dashboard-header h1 { font-size: 1.8rem; color: var(--dark); margin-bottom: 0.3rem; }
  .dashboard-header p { color: var(--mid); }
  .status-badge { padding: 0.5rem 1rem; border-radius: 50px; font-weight: 600; font-size: 0.9rem; }
  .status-badge.system-ok { background: #d1fae5; color: #065f46; }

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
  .card h3 { font-size: 1.1rem; color:
