import React, { useState } from 'react';
import { Search, Filter, Download, ArrowUpDown } from 'lucide-react';

const DataInsights = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const database = [
    { id: '1', name: 'James Webb Telescope Data Release', category: 'Astrophysics', date: '2023-07-12', status: 'Public', impact: 'High' },
    { id: '2', name: 'Global Ocean Temperature Anomalies', category: 'Environment', date: '2023-10-05', status: 'Verified', impact: 'Critical' },
    { id: '3', name: 'CRISPR Gene Editing Trials Phase II', category: 'Biology', date: '2023-11-20', status: 'Under Review', impact: 'High' },
    { id: '4', name: 'Room Temp Superconductor Synthesis', category: 'Chemistry', date: '2023-08-15', status: 'Disputed', impact: 'Revolutionary' },
    { id: '5', name: 'Large Hadron Collider Collision Data', category: 'Physics', date: '2023-09-30', status: 'Public', impact: 'Medium' },
    { id: '6', name: 'Amazon Rainforest Deforestation Rates', category: 'Environment', date: '2023-12-01', status: 'Verified', impact: 'Critical' },
    { id: '7', name: 'Human Genome Project Update 4.0', category: 'Biology', date: '2023-06-22', status: 'Public', impact: 'High' }
  ];

  const filteredData = database.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Data Insights</h1>
          <p className="text-muted">Search, filter, and analyze comprehensive scientific datasets.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '24px' }}>
        <div className="toolbar">
          <div className="filters">
            <div className="search-box">
              <Search className="icon" size={18} />
              <input 
                type="text" 
                placeholder="Search datasets..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.2)', padding: '6px 12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-glass)' }}>
              <Filter size={16} className="text-muted" />
              <select 
                value={categoryFilter} 
                onChange={(e) => setCategoryFilter(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', outline: 'none' }}
              >
                <option value="All">All Categories</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Biology">Biology</option>
                <option value="Environment">Environment</option>
                <option value="Astrophysics">Astrophysics</option>
              </select>
            </div>
          </div>
          
          <button className="btn btn-outline">
            <Download size={16} /> Export CSV
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th><div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>Dataset Name <ArrowUpDown size={14} /></div></th>
                <th>Category</th>
                <th>Date Added</th>
                <th>Status</th>
                <th>Impact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td style={{ fontWeight: '500' }}>{item.name}</td>
                  <td>
                    <span style={{ color: 'var(--text-muted)' }}>{item.category}</span>
                  </td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`badge ${
                      item.status === 'Verified' || item.status === 'Public' ? 'badge-success' : 
                      item.status === 'Disputed' ? 'badge-danger' : 'badge-warning'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <span style={{ 
                      color: item.impact === 'Critical' ? 'var(--danger)' : 
                             item.impact === 'Revolutionary' ? 'var(--accent-blue)' : 
                             'var(--text-main)' 
                    }}>{item.impact}</span>
                  </td>
                  <td>
                    <div className="table-actions">
                      <button className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '0.8rem' }}>View</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                    No datasets found matching your criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-glass)', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          <span>Showing {filteredData.length} of {database.length} entries</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-outline" style={{ padding: '4px 10px' }} disabled>Prev</button>
            <button className="btn btn-primary" style={{ padding: '4px 10px' }}>1</button>
            <button className="btn btn-outline" style={{ padding: '4px 10px' }} disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataInsights;
