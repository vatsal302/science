import React, { useState } from 'react';
import { Leaf, Wind, Droplets, Thermometer, FileText, Download } from 'lucide-react';

const Environmental = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Environmental Science</h1>
          <p className="text-muted">Analyzing interactions between the physical, chemical, and biological components of the environment.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '30px', marginBottom: '30px' }}>
        <h2 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <FileText className="text-accent" />
          Field Report: Urban Heat Island Effect
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px' }}>
          <div>
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '8px' }}>Executive Summary</h4>
            <p className="text-muted" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              This report details the recent temperature differentials observed between the metropolitan center and surrounding rural areas over a 30-day period. The data strongly correlates increased concrete density and lack of vegetation with elevated local temperatures.
            </p>
            
            <h4 style={{ color: 'var(--accent-blue)', marginBottom: '8px' }}>Methodology</h4>
            <p className="text-muted" style={{ marginBottom: '20px', lineHeight: '1.6' }}>
              Sensors were deployed at 50 strategic locations. Readings were taken hourly. Controls were established in forested areas 20km outside the city limits.
            </p>

            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
              View Full Results Summary
            </button>
          </div>
          
          <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <h4 style={{ marginBottom: '16px' }}>Key Metrics</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span className="text-muted">Max Temp Diff</span>
                  <span className="text-danger">+4.2°C</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--bg-dark)', borderRadius: '3px' }}>
                  <div style={{ width: '85%', height: '100%', background: 'var(--danger)', borderRadius: '3px' }}></div>
                </div>
              </div>
              
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span className="text-muted">Vegetation Coverage</span>
                  <span className="text-warning">12%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--bg-dark)', borderRadius: '3px' }}>
                  <div style={{ width: '12%', height: '100%', background: 'var(--warning)', borderRadius: '3px' }}></div>
                </div>
              </div>

              <button className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                <Download size={16} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="stat-card glass-panel">
          <div className="stat-info">
            <span className="stat-title">Global CO2 Levels</span>
            <span className="stat-value">421 ppm</span>
            <span className="stat-trend negative">↑ 2.1 ppm/yr</span>
          </div>
          <div className="stat-icon" style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}>
            <Wind size={24} />
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-info">
            <span className="stat-title">Ocean Acidification</span>
            <span className="stat-value">8.1 pH</span>
            <span className="stat-trend negative">↓ 0.1 since 1990</span>
          </div>
          <div className="stat-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: 'var(--accent-blue)' }}>
            <Droplets size={24} />
          </div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-info">
            <span className="stat-title">Global Temp Anomaly</span>
            <span className="stat-value">+1.1°C</span>
            <span className="stat-trend negative">↑ vs pre-industrial</span>
          </div>
          <div className="stat-icon" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--warning)' }}>
            <Thermometer size={24} />
          </div>
        </div>
      </div>

      {/* Modal Window */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="glass-panel modal-content" onClick={e => e.stopPropagation()}>
            <h2 style={{ marginBottom: '16px', color: 'var(--accent-blue)' }}>Results Summary</h2>
            <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>
              The experiment unequivocally demonstrated that replacing dark, impervious surfaces with reflective materials or green infrastructure can reduce localized ambient temperatures by up to 2°C during peak sunlight hours.
            </p>
            <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
              <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>
                <li style={{ marginBottom: '8px' }}>Peak temp recorded: 38.5°C (Urban center)</li>
                <li style={{ marginBottom: '8px' }}>Peak temp recorded: 34.3°C (Rural control)</li>
                <li>Nighttime cooling rate was 40% slower in urban areas.</li>
              </ul>
            </div>
            <div className="modal-footer">
              <button className="btn btn-outline" onClick={() => setShowModal(false)}>Close</button>
              <button className="btn btn-primary" onClick={() => setShowModal(false)}>Export Data</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Environmental;
