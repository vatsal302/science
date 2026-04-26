import React, { useState } from 'react';
import { Atom, Zap, Rocket, ChevronDown, ChevronUp } from 'lucide-react';

const Physics = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const topics = [
    {
      id: 'motion',
      title: 'Motion & Mechanics',
      icon: <Atom size={24} />,
      summary: 'The study of the movement of objects and the forces that act upon them.',
      details: 'Classical mechanics deals with the motion of macroscopic objects. Real-world applications range from calculating the trajectory of a baseball to designing suspension systems in cars. Isaac Newton laid the foundation with his three laws of motion.',
      examples: ['Projectile Motion', 'Friction', 'Momentum']
    },
    {
      id: 'energy',
      title: 'Energy & Thermodynamics',
      icon: <Zap size={24} />,
      summary: 'Understanding heat, work, temperature, and the statistical behavior of systems.',
      details: 'Thermodynamics governs how energy is transferred and transformed. The laws of thermodynamics dictate everything from how a car engine works to why ice melts in a warm drink. Entropy is a key concept, describing the progression towards disorder.',
      examples: ['Conservation of Energy', 'Heat Transfer', 'Entropy']
    },
    {
      id: 'space',
      title: 'Astrophysics & Space',
      icon: <Rocket size={24} />,
      summary: 'Applying the laws of physics to the universe to understand stars, galaxies, and cosmology.',
      details: 'Astrophysics involves understanding the life cycle of stars, the expansion of the universe, and phenomena like black holes and dark matter. General relativity explains how massive objects warp spacetime, causing what we experience as gravity.',
      examples: ['Orbital Mechanics', 'Black Holes', 'Cosmic Microwave Background']
    }
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Physics</h1>
          <p className="text-muted">Unveiling the fundamental principles that govern our universe.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            id={topic.id}
            className="glass-panel" 
            style={{ padding: '24px', transition: 'var(--transition)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '12px', color: 'var(--accent-blue)' }}>
                {topic.icon}
              </div>
              <h2 style={{ fontSize: '1.2rem' }}>{topic.title}</h2>
            </div>
            
            <p className="text-muted" style={{ marginBottom: '20px' }}>{topic.summary}</p>
            
            {expandedCard === topic.id && (
              <div style={{ marginBottom: '20px', animation: 'fadeIn 0.3s' }}>
                <p style={{ lineHeight: '1.6', marginBottom: '16px' }}>{topic.details}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {topic.examples.map((ex, i) => (
                    <span key={i} className="badge badge-success">{ex}</span>
                  ))}
                </div>
              </div>
            )}
            
            <button 
              className="btn btn-outline" 
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={() => setExpandedCard(expandedCard === topic.id ? null : topic.id)}
            >
              {expandedCard === topic.id ? 'Show Less' : 'Learn More'}
              {expandedCard === topic.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <h3 style={{ marginBottom: '20px' }}>Interactive Experiment: Pendulum Period</h3>
        <p className="text-muted" style={{ marginBottom: '20px' }}>
          Simulate the motion of a simple pendulum. Adjust the length to see how it affects the time it takes for one complete swing (the period).
        </p>
        
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div className="input-group">
              <label>Pendulum Length (meters)</label>
              <input type="range" min="0.5" max="5" step="0.1" defaultValue="2" className="input-control" />
            </div>
            <div className="input-group">
              <label>Gravity (m/s²)</label>
              <select className="input-control">
                <option value="9.8">Earth (9.8 m/s²)</option>
                <option value="1.6">Moon (1.6 m/s²)</option>
                <option value="24.7">Jupiter (24.7 m/s²)</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '10px' }}>Run Simulation</button>
          </div>
          
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '20px' }}>
             <div style={{ textAlign: 'center' }}>
               <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>2.84s</div>
               <div className="text-muted">Calculated Period (T)</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Physics;
