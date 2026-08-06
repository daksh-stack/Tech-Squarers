import React, { useState } from 'react';
import { Play, MousePointerClick, Activity, TrendingUp, Users, DollarSign, BarChart3, ShieldCheck, Terminal } from 'lucide-react';

export default function LiveDemo({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('analytics');
  const [simulatedLeads, setSimulatedLeads] = useState([
    { name: 'Dr. Sarah Lin', company: 'APAC Spine Clinic', tier: 'Platform MVP', val: '$10,000', status: 'Converted' },
    { name: 'Marcus Vance', company: 'Vance Auto Group', tier: 'Multipage Site', val: '$5,000', status: 'In Review' },
    { name: 'Elena Rostova', company: 'Aura Cosmetics', tier: 'Platform + Mobile', val: '$30,000', status: 'Contract Signed' },
  ]);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadCompany, setNewLeadCompany] = useState('');

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLeadName || !newLeadCompany) return;
    setSimulatedLeads([
      { name: newLeadName, company: newLeadCompany, tier: 'Landing Page', val: '$3,000', status: 'New Inquiry' },
      ...simulatedLeads
    ]);
    setNewLeadName('');
    setNewLeadCompany('');
  };

  return (
    <section id="demo" style={{ padding: '6rem 0', background: '#0F172A', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ background: 'rgba(16,185,129,0.1)', color: '#10B981', borderColor: 'transparent', marginBottom: '1rem' }}>
            <Play style={{ width: '0.85rem', height: '0.85rem', fill: '#10B981' }} />
            <span>Interactive Studio Sandbox</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
            Play with your project <br />
            <span className="text-coral">before we build it.</span>
          </h2>

          <p className="font-sans" style={{ color: '#94A3B8', marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A fully clickable preview of the dashboard every Loro engagement ships with. Poke around. No signup, no demo call — just the studio, live.
          </p>
        </div>

        {/* Dashboard Box */}
        <div style={{ maxWidth: '60rem', margin: '0 auto', background: '#090D16', border: '1px solid #334155', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: 'var(--shadow-modal)' }}>
          
          {/* Header Bar */}
          <div style={{ background: '#0F172A', padding: '1rem 1.5rem', borderBottom: '1px solid #334155', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div className="dot-red" />
                <div className="dot-yellow" />
                <div className="dot-green" />
              </div>
              <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>
                Loro OS v4.2 · Interactive Simulator
              </span>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '0.25rem', background: '#090D16', padding: '0.25rem', borderRadius: '0.75rem', border: '1px solid #334155' }}>
              <button
                onClick={() => setActiveTab('analytics')}
                className="font-mono"
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: activeTab === 'analytics' ? '#F92C53' : 'transparent',
                  color: activeTab === 'analytics' ? '#ffffff' : '#94A3B8'
                }}
              >
                Analytics &amp; Speed
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className="font-mono"
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: activeTab === 'leads' ? '#F92C53' : 'transparent',
                  color: activeTab === 'leads' ? '#ffffff' : '#94A3B8'
                }}
              >
                Lead Engine ({simulatedLeads.length})
              </button>
              <button
                onClick={() => setActiveTab('tech')}
                className="font-mono"
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: activeTab === 'tech' ? '#F92C53' : 'transparent',
                  color: activeTab === 'tech' ? '#ffffff' : '#94A3B8'
                }}
              >
                System Health
              </button>
            </div>
          </div>

          {/* Tab 1 Content */}
          {activeTab === 'analytics' && (
            <div style={{ padding: '2rem' }}>
              <div className="grid-4" style={{ marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', borderRadius: '1rem', background: '#0F172A', border: '1px solid #334155' }}>
                  <div className="font-mono text-muted" style={{ fontSize: '0.7rem' }}>Lighthouse Score</div>
                  <div className="font-mono text-teal font-heading" style={{ fontSize: '1.5rem', fontWeight: 800 }}>99 / 100</div>
                  <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>0.19s Time to First Byte</div>
                </div>
                <div style={{ padding: '1rem', borderRadius: '1rem', background: '#0F172A', border: '1px solid #334155' }}>
                  <div className="font-mono text-muted" style={{ fontSize: '0.7rem' }}>Conversion Rate</div>
                  <div className="font-mono text-coral font-heading" style={{ fontSize: '1.5rem', fontWeight: 800 }}>4.85%</div>
                  <div className="font-mono text-teal" style={{ fontSize: '0.65rem' }}>+142% vs old site</div>
                </div>
                <div style={{ padding: '1rem', borderRadius: '1rem', background: '#0F172A', border: '1px solid #334155' }}>
                  <div className="font-mono text-muted" style={{ fontSize: '0.7rem' }}>Monthly Active Leads</div>
                  <div className="font-mono font-heading" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff' }}>1,420</div>
                  <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>Real-time sync</div>
                </div>
                <div style={{ padding: '1rem', borderRadius: '1rem', background: '#0F172A', border: '1px solid #334155' }}>
                  <div className="font-mono text-muted" style={{ fontSize: '0.7rem' }}>Pipeline Revenue</div>
                  <div className="font-mono font-heading" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F59E0B' }}>$148,500</div>
                  <div className="font-mono text-muted" style={{ fontSize: '0.65rem' }}>Attributed bookings</div>
                </div>
              </div>

              {/* Chart */}
              <div style={{ padding: '1.5rem', borderRadius: '1rem', background: '#0F172A', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 className="font-heading" style={{ fontWeight: 700, color: '#ffffff' }}>Traffic Vector Telemetry</h4>
                    <p className="font-sans text-muted" style={{ fontSize: '0.8rem' }}>Simulated live user load across APAC</p>
                  </div>
                  <div className="font-mono text-teal" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <BarChart3 style={{ width: '1rem', height: '1rem' }} />
                    <span>Live Graph</span>
                  </div>
                </div>

                <div style={{ height: '8rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem', paddingTop: '1rem' }}>
                  {[40, 65, 50, 80, 75, 90, 85, 95, 100, 110, 105, 125, 140, 135, 160].map((val, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                      <div style={{
                        width: '100%',
                        height: `${val * 0.7}px`,
                        borderRadius: '0.25rem 0.25rem 0 0',
                        background: 'linear-gradient(180deg, #F92C53 0%, rgba(249,44,83,0.2) 100%)'
                      }} />
                      <span className="font-mono text-muted" style={{ fontSize: '0.6rem' }}>{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 Content */}
          {activeTab === 'leads' && (
            <div style={{ padding: '2rem' }}>
              <form onSubmit={handleAddLead} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  placeholder="Client Name (e.g. Alex Rivera)"
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  placeholder="Company (e.g. Metro Tech Corp)"
                  value={newLeadCompany}
                  onChange={(e) => setNewLeadCompany(e.target.value)}
                  className="input-field"
                />
                <button type="submit" className="btn btn-coral" style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}>
                  <MousePointerClick style={{ width: '1rem', height: '1rem' }} />
                  <span>Simulate Submission</span>
                </button>
              </form>

              <div style={{ borderRadius: '1rem', border: '1px solid #334155', overflow: 'hidden', background: '#0F172A' }}>
                <table style={{ width: '100%', textAlign: 'left', fontSize: '0.8rem', borderCollapse: 'collapse' }}>
                  <thead style={{ background: '#090D16', color: '#94A3B8', borderBottom: '1px solid #334155' }}>
                    <tr>
                      <th style={{ padding: '0.75rem 1rem' }}>Client</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Company</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Scope</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Est. Value</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody style={{ color: '#CBD5E1' }}>
                    {simulatedLeads.map((lead, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #1E293B' }}>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#ffffff' }}>{lead.name}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>{lead.company}</td>
                        <td className="font-mono text-teal" style={{ padding: '0.75rem 1rem' }}>{lead.tier}</td>
                        <td className="font-mono" style={{ padding: '0.75rem 1rem', color: '#F59E0B' }}>{lead.val}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <span className="font-mono" style={{ padding: '0.2rem 0.5rem', borderRadius: '9999px', background: 'rgba(16,185,129,0.2)', color: '#10B981', fontSize: '0.65rem', fontWeight: 700 }}>
                            {lead.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Bottom Bar */}
          <div style={{ padding: '1rem 1.5rem', background: '#0F172A', borderTop: '1px solid #334155', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between', gap: '1rem' }}>
            <span className="font-mono text-muted" style={{ fontSize: '0.75rem' }}>
              ~30 seconds · no signup · nothing mocked
            </span>

            <button onClick={onOpenQuote} className="btn btn-coral" style={{ fontSize: '0.85rem' }}>
              <span>Click to launch your custom engine</span>
              <MousePointerClick style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
