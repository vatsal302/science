import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Zap, Rocket, Star, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeFact, setActiveFact] = useState(0);

  const facts = [
    {
      title: "Bananas are naturally radioactive",
      description: "Bananas contain high levels of potassium, and a small fraction of all naturally occurring potassium is radioactive (Potassium-40). But don't worry, you'd have to eat millions at once to get radiation sickness!",
      icon: <Zap className="text-warning" size={32} />
    },
    {
      title: "A day on Venus is longer than a year",
      description: "Venus rotates incredibly slowly on its axis. It takes 243 Earth days to complete one rotation (a Venusian day), but only 225 Earth days to orbit the Sun (a Venusian year).",
      icon: <Star className="text-accent" size={32} />
    },
    {
      title: "Octopuses have three hearts",
      description: "Two branchial hearts pump blood through each of the two gills, while the third is a systemic heart that pumps blood through the body. Their blood is also blue because it contains copper-based hemocyanin!",
      icon: <Activity className="text-danger" size={32} />
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Science Research & Discovery Portal</h1>
          <p className="text-muted">Exploring the wonders of the physical, chemical, biological, and natural worlds.</p>
        </div>
        <button className="btn btn-primary">
          Explore Database
        </button>
      </div>

      <div className="dashboard-grid" style={{ marginBottom: '40px' }}>
        <div className="stat-card glass-panel" style={{ gridColumn: 'span 2' }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--accent-blue)' }}>
              Did You Know?
            </h2>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: '50%' }}>
                {facts[activeFact].icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{facts[activeFact].title}</h3>
                <p className="text-muted" style={{ lineHeight: '1.6' }}>{facts[activeFact].description}</p>
                
                <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                  {facts.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveFact(idx)}
                      style={{
                        width: '12px', height: '12px', borderRadius: '50%',
                        background: activeFact === idx ? 'var(--accent-blue)' : 'var(--border-glass)',
                        border: 'none', cursor: 'pointer', transition: 'var(--transition)'
                      }}
                      title={`Fact ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="stat-card glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Lightbulb size={48} color="var(--warning)" style={{ marginBottom: '16px' }} />
          <h3>Research Highlights</h3>
          <p className="text-muted" style={{ fontSize: '0.9rem', margin: '8px 0 16px' }}>
            New breakthroughs in quantum computing and synthetic biology.
          </p>
          <Link to="/physics" className="btn btn-outline" style={{ width: '100%' }}>View Highlights</Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Latest Discoveries</h3>
            <Rocket size={20} className="text-accent" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { category: 'Astrophysics', title: 'New Exoplanet Discovered in Habitable Zone', date: '2 Hours Ago', color: 'var(--accent-blue)' },
              { category: 'Biology', title: 'CRISPR Cas-9 Used to Edit Plant Genomes', date: '5 Hours Ago', color: 'var(--success)' },
              { category: 'Chemistry', title: 'Superconductor Formed at Room Temperature', date: '1 Day Ago', color: 'var(--warning)' },
              { category: 'Environment', title: 'Oceanic Microplastics Found to Absorb Toxins', date: '2 Days Ago', color: 'var(--danger)' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '12px', paddingBottom: '16px', borderBottom: idx !== 3 ? '1px solid var(--border-glass)' : 'none' }}>
                <div style={{ width: '4px', borderRadius: '2px', background: item.color }}></div>
                <div style={{ flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: item.color, fontWeight: 'bold', textTransform: 'uppercase' }}>{item.category}</span>
                  <h4 style={{ fontSize: '0.95rem', margin: '4px 0' }}>{item.title}</h4>
                  <span className="text-muted" style={{ fontSize: '0.8rem' }}>{item.date}</span>
                </div>
                <button className="btn-icon">
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3>Data Insights</h3>
            <Database size={20} className="text-accent" />
          </div>
          <p className="text-muted" style={{ marginBottom: '20px' }}>
            Access global datasets, run comparison tools, and visualize scientific trends over time.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
             <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
               <span>Global Temp Rise (10yr)</span>
               <span className="text-danger" style={{ fontWeight: 'bold' }}>+1.2°C</span>
             </div>
             <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
               <span>Known Exoplanets</span>
               <span className="text-accent" style={{ fontWeight: 'bold' }}>5,502</span>
             </div>
             <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
               <span>Human Genome Sequenced</span>
               <span className="text-success" style={{ fontWeight: 'bold' }}>100%</span>
             </div>
          </div>
          
          <Link to="/data-insights" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            Open Analytics Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
