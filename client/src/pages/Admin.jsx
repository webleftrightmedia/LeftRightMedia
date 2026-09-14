import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ADMIN_KEY = 'dev-admin-key'; // matches server/.env ADMIN_KEY

const STATUS_COLORS = {
  new:       { bg: '#EFF6FF', text: '#2563EB', label: 'New' },
  contacted: { bg: '#FFF7ED', text: '#C2410C', label: 'Contacted' },
  converted: { bg: '#F0FDF4', text: '#15803D', label: 'Converted' },
  rejected:  { bg: '#FEF2F2', text: '#B91C1C', label: 'Rejected' },
};

const TYPE_COLORS = {
  advertiser: { bg: '#F5F3FF', text: '#7C3AED' },
  host:       { bg: '#ECFDF5', text: '#059669' },
};

function StatCard({ label, value, sub, color = '#111315' }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #E2E5E9',
      borderRadius: 12,
      padding: '20px 24px',
      flex: 1,
      minWidth: 160,
    }}>
      <p style={{ margin: 0, fontSize: 13, color: '#45474A', fontWeight: 500 }}>{label}</p>
      <p style={{ margin: '8px 0 4px', fontSize: 32, fontWeight: 700, color, lineHeight: 1 }}>{value}</p>
      {sub && <p style={{ margin: 0, fontSize: 12, color: '#45474A' }}>{sub}</p>}
    </div>
  );
}

function Badge({ type, value }) {
  const colors = type === 'status' ? STATUS_COLORS[value] : TYPE_COLORS[value];
  if (!colors) return <span>{value}</span>;
  return (
    <span style={{
      background: colors.bg,
      color: colors.text,
      fontSize: 12,
      fontWeight: 600,
      padding: '3px 10px',
      borderRadius: 99,
      textTransform: 'capitalize',
      letterSpacing: '0.02em',
    }}>
      {type === 'status' ? colors.label : value}
    </span>
  );
}

export default function AdminPanel() {
  const [page, setPage] = useState('login'); // 'login' | 'dashboard'
  const [key, setKey] = useState('');
  const [keyInput, setKeyInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all'); // 'all' | 'advertiser' | 'host'
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  const fetchLeads = useCallback(async (adminKey) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/leads`, {
        headers: { Authorization: `Bearer ${adminKey}` },
      });
      setLeads(res.data.data || []);
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to load leads. Check your admin key.');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await axios.get(`${import.meta.env.VITE_API_URL}/leads`, {
        headers: { Authorization: `Bearer ${keyInput}` },
      });
      setKey(keyInput);
      setPage('dashboard');
      fetchLeads(keyInput);
    } catch {
      setLoginError('Invalid admin key. Please try again.');
    }
  };

  const updateStatus = async (id, status) => {
    setUpdatingId(id);
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/leads/${id}`, { status }, {
        headers: { Authorization: `Bearer ${key}` },
      });
      setLeads(prev => prev.map(l => l._id === id ? { ...l, status } : l));
    } catch {
      alert('Failed to update status. Please try again.');
    } finally {
      setUpdatingId(null);
    }
  };

  // Derived stats
  const total = leads.length;
  const advertisers = leads.filter(l => l.type === 'advertiser').length;
  const hosts = leads.filter(l => l.type === 'host').length;
  const converted = leads.filter(l => l.status === 'converted').length;
  const convRate = total > 0 ? Math.round((converted / total) * 100) : 0;

  const cityCount = leads.reduce((acc, l) => { acc[l.city] = (acc[l.city] || 0) + 1; return acc; }, {});
  const topCity = Object.entries(cityCount).sort((a, b) => b[1] - a[1])[0];

  // Filtered leads
  const filtered = leads.filter(l => {
    if (filter !== 'all' && l.type !== filter) return false;
    if (statusFilter !== 'all' && l.status !== statusFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return l.name?.toLowerCase().includes(q) ||
             l.businessName?.toLowerCase().includes(q) ||
             l.email?.toLowerCase().includes(q) ||
             l.city?.toLowerCase().includes(q);
    }
    return true;
  });

  if (page === 'login') {
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #F6F7F9 0%, #FFFFFF 100%)',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}>
        <div style={{
          background: '#fff', border: '1px solid #E2E5E9', borderRadius: 16,
          padding: '40px 48px', width: '100%', maxWidth: 400,
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 36, height: 36, background: '#111315', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
                <rect x="3" y="11" width="18" height="11" rx="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 16, color: '#111315' }}>Admin Panel</p>
              <p style={{ margin: 0, fontSize: 12, color: '#45474A' }}>LeftRight Media</p>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#111315', display: 'block', marginBottom: 6 }}>
              Admin Key
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={e => setKeyInput(e.target.value)}
              placeholder="Enter your admin key"
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                padding: '10px 14px', fontSize: 14, borderRadius: 8,
                border: loginError ? '1.5px solid #EF4444' : '1.5px solid #E2E5E9',
                outline: 'none', marginBottom: 8,
              }}
            />
            {loginError && <p style={{ color: '#EF4444', fontSize: 12, margin: '0 0 12px' }}>{loginError}</p>}
            <button type="submit" style={{
              width: '100%', padding: '11px', background: '#111315', color: '#fff',
              border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer',
              marginTop: 8,
            }}>
              Sign In →
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F6F7F9', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Top bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #E2E5E9', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: '#111315', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 15, color: '#111315' }}>LeftRight Media — Admin</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <button onClick={() => fetchLeads(key)} style={{ fontSize: 13, color: '#45474A', background: 'none', border: '1px solid #E2E5E9', borderRadius: 6, padding: '5px 12px', cursor: 'pointer' }}>
            ↺ Refresh
          </button>
          <button onClick={() => setPage('login')} style={{ fontSize: 13, color: '#B91C1C', background: 'none', border: 'none', cursor: 'pointer' }}>
            Sign Out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ margin: '0 0 8px', fontSize: 24, fontWeight: 700, color: '#111315' }}>Dashboard</h1>
        <p style={{ margin: '0 0 28px', color: '#45474A', fontSize: 14 }}>
          {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* Stat Cards */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32 }}>
          <StatCard label="Total Leads" value={total} sub="All time" />
          <StatCard label="Advertisers" value={advertisers} sub="Want to run ads" color="#7C3AED" />
          <StatCard label="Screen Hosts" value={hosts} sub="Want to earn" color="#059669" />
          <StatCard label="Converted" value={converted} sub={`${convRate}% conversion rate`} color="#15803D" />
          <StatCard label="Top City" value={topCity?.[0] || '—'} sub={topCity ? `${topCity[1]} lead${topCity[1] !== 1 ? 's' : ''}` : 'No data yet'} />
        </div>

        {/* Leads Table */}
        <div style={{ background: '#fff', border: '1px solid #E2E5E9', borderRadius: 12, overflow: 'hidden' }}>
          {/* Filters */}
          <div style={{ padding: '16px 24px', borderBottom: '1px solid #E2E5E9', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search name, business, email, city..."
              style={{ flex: 1, minWidth: 200, padding: '8px 12px', fontSize: 13, border: '1px solid #E2E5E9', borderRadius: 8, outline: 'none' }}
            />
            <div style={{ display: 'flex', gap: 6 }}>
              {['all', 'advertiser', 'host'].map(f => (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: '6px 14px', fontSize: 12, fontWeight: 600, borderRadius: 6, cursor: 'pointer',
                  border: '1px solid', borderColor: filter === f ? '#111315' : '#E2E5E9',
                  background: filter === f ? '#111315' : '#fff',
                  color: filter === f ? '#fff' : '#45474A',
                  textTransform: 'capitalize',
                }}>
                  {f === 'all' ? 'All Types' : f}
                </button>
              ))}
            </div>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} style={{ padding: '6px 12px', fontSize: 13, border: '1px solid #E2E5E9', borderRadius: 8, outline: 'none', background: '#fff' }}>
              <option value="all">All Statuses</option>
              {Object.keys(STATUS_COLORS).map(s => (
                <option key={s} value={s}>{STATUS_COLORS[s].label}</option>
              ))}
            </select>
          </div>

          {/* Table */}
          {loading ? (
            <div style={{ padding: 64, textAlign: 'center', color: '#45474A' }}>Loading leads…</div>
          ) : error ? (
            <div style={{ padding: 40, textAlign: 'center', color: '#B91C1C' }}>{error}</div>
          ) : filtered.length === 0 ? (
            <div style={{ padding: 64, textAlign: 'center', color: '#45474A' }}>No leads match your filters.</div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#F6F7F9' }}>
                    {['Name', 'Business', 'City', 'Contact', 'Type', 'Details', 'Status', 'Date'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 600, color: '#45474A', borderBottom: '1px solid #E2E5E9', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead, i) => (
                    <tr key={lead._id} style={{ borderBottom: '1px solid #F0F2F5', background: i % 2 === 0 ? '#fff' : '#FAFBFC' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#111315', whiteSpace: 'nowrap' }}>{lead.name}</td>
                      <td style={{ padding: '12px 16px', color: '#45474A' }}>{lead.businessName}</td>
                      <td style={{ padding: '12px 16px', color: '#45474A' }}>{lead.city}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <div style={{ fontSize: 12, color: '#111315' }}>{lead.phone}</div>
                        <div style={{ fontSize: 11, color: '#45474A' }}>{lead.email}</div>
                      </td>
                      <td style={{ padding: '12px 16px' }}><Badge type="type" value={lead.type} /></td>
                      <td style={{ padding: '12px 16px', color: '#45474A', fontSize: 12 }}>
                        {lead.type === 'host'
                          ? `${lead.screenCount} screen${lead.screenCount !== 1 ? 's' : ''}`
                          : lead.budgetRange || '—'}
                      </td>
                      <td style={{ padding: '12px 16px' }}>
                        <select
                          value={lead.status}
                          disabled={updatingId === lead._id}
                          onChange={e => updateStatus(lead._id, e.target.value)}
                          style={{
                            fontSize: 12, fontWeight: 600, border: 'none', borderRadius: 99,
                            padding: '3px 8px', cursor: 'pointer', outline: 'none',
                            background: STATUS_COLORS[lead.status]?.bg,
                            color: STATUS_COLORS[lead.status]?.text,
                          }}
                        >
                          {Object.keys(STATUS_COLORS).map(s => (
                            <option key={s} value={s}>{STATUS_COLORS[s].label}</option>
                          ))}
                        </select>
                      </td>
                      <td style={{ padding: '12px 16px', color: '#45474A', whiteSpace: 'nowrap', fontSize: 12 }}>
                        {new Date(lead.createdAt).toLocaleDateString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div style={{ padding: '12px 24px', borderTop: '1px solid #E2E5E9', color: '#45474A', fontSize: 12 }}>
            Showing {filtered.length} of {total} total leads
          </div>
        </div>
      </div>
    </div>
  );
}
