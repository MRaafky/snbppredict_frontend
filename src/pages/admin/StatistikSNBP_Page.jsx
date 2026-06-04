import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StatistikSNBP_Page.css';

function StatistikSNBP_Page() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    const handleLogout = () => {
        navigate('/');
    };

    // ── Data Statistik ────────────────────────────────────────────────
    const statCards = [
        { label: 'Total Siswa Kelas XII', value: '216', sub: '6 kelas paralel', color: 'blue' },
        { label: 'Aman', value: '185', sub: '85.6% dari total', color: 'green' },
        { label: 'Siswa Berisiko', value: '31', sub: '14.4% dari total', color: 'red' },
    ];

    const distribusiData = [
        { label: 'Aman', count: 185, pct: 85.6, color: '#16a34a' },
        { label: 'Berisiko', count: 31, pct: 14.4, color: '#dc2626' },
    ];

    const kelasPerforma = [
        { kelas: 'XII IPA 1', aman: 31, total: 36, pct: 86, trend: '+3' },
        { kelas: 'XII IPA 2', aman: 32, total: 36, pct: 89, trend: '+5' },
        { kelas: 'XII IPA 3', aman: 30, total: 36, pct: 83, trend: '+1' },
        { kelas: 'XII IPS 1', aman: 29, total: 36, pct: 81, trend: '-2' },
        { kelas: 'XII IPS 2', aman: 30, total: 36, pct: 83, trend: '+4' },
        { kelas: 'XII Bahasa', aman: 33, total: 36, pct: 92, trend: '+2' },
    ];



    const getPctStyle = (pct) => {
        if (pct >= 85) return { background: '#e8f5e9', color: '#2e7d32' };
        return { background: '#fdecea', color: '#c62828' };
    };

    const getTrendStyle = (t) =>
        t.startsWith('+') ? { color: '#16a34a' } : { color: '#dc2626' };

    return (
        <div className="snbs-container">

            {/* ── MOBILE HEADER ── */}
            <div className="snbs-mobile-header">
                <div className="snbs-mobile-brand">
                    <span className="snbs-mobile-brand-title">SNBP Monitor</span>
                    <span className="snbs-mobile-brand-sub">Sistem Cerdas Kesiapan Siswa</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="snbs-mobile-toggle"
                    aria-label="Toggle Menu"
                >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="22" height="22">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* ── SIDEBAR ── */}
            <aside className={`snbs-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div>
                    {/* Brand */}
                    <div className="snbs-brand">
                        <h1 className="snbs-brand-title">SNBP Monitor</h1>
                        <p className="snbs-brand-sub">Sistem Cerdas Kesiapan Siswa</p>
                    </div>

                    {/* Role Badge */}
                    <div className="snbs-role-badge">
                        <span className="snbs-role-dot"></span>
                        <span>Admin / Kepsek</span>
                    </div>

                    {/* Navigation */}
                    <nav className="snbs-nav">
                        <span className="snbs-nav-label">Menu Utama</span>

                        <button
                            className="snbs-nav-item"
                            onClick={() => { navigate('/admin/dashboard'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="snbs-nav-icon">⊞</span>
                            <span>Dashboard Sekolah</span>
                        </button>

                        <button
                            className="snbs-nav-item"
                            onClick={() => { navigate('/admin/rekap-kelas'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="snbs-nav-icon">◎</span>
                            <span>Rekap Per Kelas</span>
                        </button>

                        <span className="snbs-nav-label" style={{ marginTop: '16px' }}>Laporan</span>

                        <button
                            className="snbs-nav-item active"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="snbs-nav-icon">⊟</span>
                            <span>Statistik SNBP</span>
                        </button>

                        <button
                            className="snbs-nav-item"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="snbs-nav-icon">↓</span>
                            <span>Ekspor Data</span>
                        </button>
                    </nav>
                </div>

                {/* Sidebar Bottom */}
                <div className="snbs-sidebar-bottom">
                    <button className="snbs-nav-item" onClick={() => { navigate('/admin/notifikasi'); setIsMobileMenuOpen(false); }}>
                        <span className="snbs-nav-icon">🔔</span>
                        <span>Notifikasi</span>
                        <span className="snbs-notif-badge">1</span>
                    </button>

                    <button className="snbs-nav-item">
                        <span className="snbs-nav-icon">⚙</span>
                        <span>Pengaturan</span>
                    </button>

                    <button onClick={handleLogout} className="snbs-nav-item snbs-nav-logout">
                        <span className="snbs-nav-icon">⏻</span>
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="snbs-main">

                {/* Topbar */}
                <header className="snbs-topbar">
                    <div className="snbs-page-info">
                        <h2 className="snbs-page-title">Statistik SNBP</h2>
                        <p className="snbs-page-sub">SMA Negeri 1 Yogyakarta · Tahun Ajaran 2025/2026</p>
                    </div>
                    <div className="snbs-profile-info">
                        <div className="snbs-profile-text">
                            <span className="snbs-profile-name">Bapak Hartono</span>
                            <span className="snbs-profile-role">Kepala Sekolah</span>
                        </div>
                        <div className="snbs-avatar">HT</div>
                    </div>
                </header>

                {/* Content */}
                <main className="snbs-content">

                    {/* ── STAT CARDS ── */}
                    <div className="snbs-stats-grid">
                        {statCards.map((c) => (
                            <div key={c.label} className="snbs-stat-card">
                                <span className="snbs-stat-label">{c.label}</span>
                                <div className={`snbs-stat-value snbs-val-${c.color}`}>{c.value}</div>
                                <div className="snbs-stat-sub">{c.sub}</div>
                            </div>
                        ))}
                    </div>

                    {/* ── TAB NAV ── */}
                    <div className="snbs-tab-nav">
                        {[
                            { key: 'overview', label: 'Ringkasan' },
                            { key: 'distribusi', label: 'Distribusi' },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                className={`snbs-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* ── TAB: OVERVIEW ── */}
                    {activeTab === 'overview' && (
                        <div className="snbs-tab-content">
                            <div className="snbs-two-col">

                                {/* Performa Per Kelas */}
                                <section className="snbs-card">
                                    <div className="snbs-card-header">
                                        <h3 className="snbs-card-title">Performa kesiapan per kelas</h3>
                                        <span className="snbs-badge-blue">6 Kelas</span>
                                    </div>
                                    <div className="snbs-table-wrapper">
                                        <table className="snbs-table">
                                            <thead>
                                                <tr>
                                                    <th>Kelas</th>
                                                    <th>Aman</th>
                                                    <th>Total</th>
                                                    <th>% Aman</th>
                                                    <th>Tren</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {kelasPerforma.map((row) => (
                                                    <tr key={row.kelas}>
                                                        <td className="snbs-td-bold">{row.kelas}</td>
                                                        <td>{row.aman}</td>
                                                        <td className="snbs-td-muted">{row.total}</td>
                                                        <td>
                                                            <span className="snbs-pct-badge" style={getPctStyle(row.pct)}>
                                                                {row.pct}%
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className="snbs-trend" style={getTrendStyle(row.trend)}>
                                                                {row.trend}%
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>

                                {/* Right Column */}
                                <div className="snbs-right-stack">

                                    {/* Bar Chart Mini */}
                                    <section className="snbs-card">
                                        <h3 className="snbs-card-title">Kesiapan per kelas</h3>
                                        <div className="snbs-bar-chart">
                                            {kelasPerforma.map((row) => (
                                                <div key={row.kelas} className="snbs-bar-row">
                                                    <span className="snbs-bar-row-label">{row.kelas}</span>
                                                    <div className="snbs-bar-track">
                                                        <div
                                                            className="snbs-bar-fill"
                                                            style={{
                                                                width: `${row.pct}%`,
                                                                background: row.pct >= 85 ? '#16a34a' : '#dc2626',
                                                            }}
                                                        />
                                                    </div>
                                                    <span className="snbs-bar-row-pct">{row.pct}%</span>
                                                </div>
                                            ))}
                                        </div>
                                    </section>

                                    {/* Ringkasan Singkat */}
                                    <section className="snbs-card">
                                        <h3 className="snbs-card-title">Ringkasan cepat</h3>
                                        <div className="snbs-summary-list">
                                            <div className="snbs-summary-row">
                                                <span className="snbs-summary-label">Kelas terbaik</span>
                                                <span className="snbs-summary-val snbs-val-green">XII Bahasa (92% Aman)</span>
                                            </div>
                                            <div className="snbs-summary-row">
                                                <span className="snbs-summary-label">Kelas perlu intervensi</span>
                                                <span className="snbs-summary-val snbs-val-red">XII IPS 1 (81% Aman)</span>
                                            </div>
                                            <div className="snbs-summary-row">
                                                <span className="snbs-summary-label">Rata-rata kesiapan</span>
                                                <span className="snbs-summary-val">85.6%</span>
                                            </div>
                                            <div className="snbs-summary-row">
                                                <span className="snbs-summary-label">Update terakhir</span>
                                                <span className="snbs-summary-val">22 Mei 2026</span>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── TAB: DISTRIBUSI ── */}
                    {activeTab === 'distribusi' && (
                        <div className="snbs-tab-content">
                            <div className="snbs-two-col">

                                {/* Donut Chart (CSS) */}
                                <section className="snbs-card snbs-donut-card">
                                    <h3 className="snbs-card-title">Distribusi kategori siswa</h3>
                                    <div className="snbs-donut-wrapper">
                                        <div className="snbs-donut">
                                            <div className="snbs-donut-center">
                                                <span className="snbs-donut-total">216</span>
                                                <span className="snbs-donut-label">Siswa</span>
                                            </div>
                                        </div>
                                        <div className="snbs-donut-legend">
                                            {distribusiData.map((d) => (
                                                <div key={d.label} className="snbs-legend-row">
                                                    <span className="snbs-legend-dot" style={{ background: d.color }} />
                                                    <span className="snbs-legend-text">{d.label}</span>
                                                    <span className="snbs-legend-count" style={{ color: d.color }}>
                                                        {d.count}
                                                    </span>
                                                    <span className="snbs-legend-pct">({d.pct}%)</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Progress bars distribusi */}
                                    <div className="snbs-dist-bars">
                                        {distribusiData.map((d) => (
                                            <div key={d.label} className="snbs-dist-row">
                                                <div className="snbs-dist-top">
                                                    <span className="snbs-dist-label">{d.label}</span>
                                                    <span className="snbs-dist-count">{d.count} siswa</span>
                                                </div>
                                                <div className="snbs-dist-track">
                                                    <div
                                                        className="snbs-dist-fill"
                                                        style={{ width: `${d.pct}%`, background: d.color }}
                                                    />
                                                </div>
                                                <span className="snbs-dist-pct">{d.pct}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Detail distribusi */}
                                <div className="snbs-right-stack">
                                    {distribusiData.map((d) => (
                                        <section key={d.label} className="snbs-card snbs-dist-detail-card">
                                            <div className="snbs-dist-detail-top">
                                                <span
                                                    className="snbs-dist-detail-dot"
                                                    style={{ background: d.color }}
                                                />
                                                <span className="snbs-dist-detail-label">{d.label}</span>
                                            </div>
                                            <div className="snbs-dist-detail-num" style={{ color: d.color }}>
                                                {d.count}
                                            </div>
                                            <div className="snbs-dist-detail-pct">{d.pct}% dari total siswa</div>
                                        </section>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}





                </main>
            </div>

        </div>
    );
}

export default StatistikSNBP_Page;
