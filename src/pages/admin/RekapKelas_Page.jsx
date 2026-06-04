import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RekapKelas_Page.css';

function RekapKelas_Page() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        navigate('/');
    };

    const kelasData = [
        { kelas: 'XII IPA 1', labelPendek: 'XII IPA 1', wali: 'Ibu Sari Rahayu', total: 36, aman: 31, berisiko: 5, avgScore: 82.4, barColor: '#1d4ed8' },
        { kelas: 'XII IPA 2', labelPendek: 'XII IPA 2', wali: 'Bp. Andi Wijaya', total: 36, aman: 32, berisiko: 4, avgScore: 85.3, barColor: '#1e3a8a' },
        { kelas: 'XII IPA 3', labelPendek: 'XII IPA 3', wali: 'Ibu Dewi Kartika', total: 36, aman: 30, berisiko: 6, avgScore: 81.1, barColor: '#3b82f6' },
        { kelas: 'XII IPS 1', labelPendek: 'XII IPS 1', wali: 'Bp. Rudi Santoso', total: 36, aman: 29, berisiko: 7, avgScore: 78.5, barColor: '#f59e0b' },
        { kelas: 'XII IPS 2', labelPendek: 'XII IPS 2', wali: 'Ibu Lestari W.', total: 36, aman: 30, berisiko: 6, avgScore: 79.8, barColor: '#d97706' },
        { kelas: 'XII Bahasa', labelPendek: 'XII Bhs', wali: 'Ibu Ratna Mulia', total: 36, aman: 33, berisiko: 3, avgScore: 76.2, barColor: '#9ca3af' },
    ];

    const MAX_BAR_HEIGHT = 160;
    const maxScore = Math.max(...kelasData.map(d => d.avgScore));

    return (
        <div className="rkp-container">

            {/* ── MOBILE HEADER ── */}
            <div className="rkp-mobile-header">
                <div className="rkp-mobile-brand">
                    <span className="rkp-mobile-brand-title">SNBP Monitor</span>
                    <span className="rkp-mobile-brand-sub">Sistem Cerdas Kesiapan Siswa</span>
                </div>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="rkp-mobile-toggle"
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
            <aside className={`rkp-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
                <div>
                    <div className="rkp-brand">
                        <h1 className="rkp-brand-title">SNBP Monitor</h1>
                        <p className="rkp-brand-sub">Sistem Cerdas Kesiapan Siswa</p>
                    </div>

                    <div className="rkp-role-badge">
                        <span className="rkp-role-dot"></span>
                        <span>Admin / Kepsek</span>
                    </div>

                    <nav className="rkp-nav">
                        <span className="rkp-nav-label">Menu Utama</span>

                        <button
                            className="rkp-nav-item"
                            onClick={() => { navigate('/admin/dashboard'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="rkp-nav-icon">⊞</span>
                            <span>Dashboard Sekolah</span>
                        </button>

                        <button
                            className="rkp-nav-item active"
                            onClick={() => { navigate('/admin/rekap-kelas'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="rkp-nav-icon">◎</span>
                            <span>Rekap Per Kelas</span>
                        </button>


                        <button
                            className="rkp-nav-item"
                            onClick={() => { navigate('/admin/statistik'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="rkp-nav-icon">⊟</span>
                            <span>Statistik SNBP</span>
                        </button>

                        <button
                            className="rkp-nav-item"
                            onClick={() => { navigate('/admin/ekspor'); setIsMobileMenuOpen(false); }}
                        >
                            <span className="rkp-nav-icon">↓</span>
                            <span>Ekspor Data</span>
                        </button>
                    </nav>
                </div>

                <div className="rkp-sidebar-bottom">
                    <button className="rkp-nav-item" onClick={() => { navigate('/admin/notifikasi'); setIsMobileMenuOpen(false); }}>
                        <span className="rkp-nav-icon">🔔</span>
                        <span>Notifikasi</span>
                        <span className="rkp-notif-badge">1</span>
                    </button>
                    <button className="rkp-nav-item" onClick={() => { navigate('/admin/pengaturan'); setIsMobileMenuOpen(false); }}>
                        <span className="rkp-nav-icon">⚙</span>
                        <span>Pengaturan</span>
                    </button>
                    <button onClick={handleLogout} className="rkp-nav-item rkp-nav-logout">
                        <span className="rkp-nav-icon">⏻</span>
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* ── MAIN CONTENT ── */}
            <div className="rkp-main">

                <header className="rkp-topbar">
                    <div className="rkp-page-info">
                        <h2 className="rkp-page-title">Rekap Per Kelas</h2>
                        <p className="rkp-page-sub">Data kesiapan SNBP seluruh kelas XII</p>
                    </div>
                    <div className="rkp-profile-info">
                        <div className="rkp-profile-text">
                            <span className="rkp-profile-name">Bapak Hartono</span>
                            <span className="rkp-profile-role">Kepala Sekolah</span>
                        </div>
                        <div className="rkp-avatar">HT</div>
                    </div>
                </header>

                <main className="rkp-content">

                    <section className="rkp-card">
                        <div className="rkp-table-wrapper">
                            <table className="rkp-table">
                                <thead>
                                    <tr>
                                        <th>Kelas</th>
                                        <th>Wali Kelas</th>
                                        <th>Total Siswa</th>
                                        <th className="rkp-th-siap">Aman</th>
                                        <th className="rkp-th-berisiko">Berisiko</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kelasData.map((row, idx) => (
                                        <tr key={row.kelas} className={idx % 2 === 0 ? 'rkp-row-even' : ''}>
                                            <td className="rkp-td-kelas">{row.kelas}</td>
                                            <td className="rkp-td-wali">{row.wali}</td>
                                            <td>{row.total}</td>
                                            <td className="rkp-td-siap">{row.aman}</td>
                                            <td className="rkp-td-berisiko">{row.berisiko}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="rkp-card rkp-chart-card">
                        <h3 className="rkp-chart-title">Visualisasi rata-rata nilai rapor per kelas</h3>
                        <div className="rkp-chart-area">
                            {kelasData.map((row) => {
                                const barH = Math.round((row.avgScore / maxScore) * MAX_BAR_HEIGHT);
                                return (
                                    <div key={row.kelas} className="rkp-bar-col">
                                        <div className="rkp-bar-track">
                                            <div
                                                className="rkp-bar"
                                                style={{ height: `${barH}px`, backgroundColor: row.barColor }}
                                            >
                                                <span className="rkp-bar-pct">{row.avgScore}</span>
                                            </div>
                                        </div>
                                        <span className="rkp-bar-label">{row.labelPendek}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                </main>
            </div>

        </div>
    );
}

export default RekapKelas_Page;