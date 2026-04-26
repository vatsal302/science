import React, { useState } from 'react';
import { Dna, Heart, Trees, Microscope } from 'lucide-react';

const Biology = () => {
  const [activeTab, setActiveTab] = useState('human');

  const content = {
    human: {
      title: 'The Human Body',
      icon: <Heart size={24} />,
      content: 'The human body is a complex network of systems working together. From the nervous system transmitting signals at incredible speeds to the immune system fighting off pathogens, it is a marvel of evolutionary engineering. The average adult body contains around 30 trillion human cells and 39 trillion bacterial cells.',
      features: ['Cardiovascular System', 'Nervous System', 'Immune Response']
    },
    cells: {
      title: 'Cellular Biology',
      icon: <Microscope size={24} />,
      content: 'Cells are the basic structural, functional, and biological units of all known organisms. A cell is the smallest unit of life. We study cell structure, function, and behavior, delving into organelles like the mitochondria (the powerhouse of the cell) and the nucleus (the control center containing DNA).',
      features: ['Mitosis & Meiosis', 'Organelles', 'Cell Membrane Transport']
    },
    ecosystems: {
      title: 'Ecosystems & Evolution',
      icon: <Trees size={24} />,
      content: 'An ecosystem is a community of living organisms in conjunction with the nonliving components of their environment. Evolution by natural selection explains the diversity of life, showing how traits that enhance survival become more common over successive generations.',
      features: ['Food Webs', 'Natural Selection', 'Biodiversity']
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Biology</h1>
          <p className="text-muted">The study of life and living organisms.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '30px' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid var(--border-glass)', marginBottom: '24px', overflowX: 'auto' }}>
          {Object.keys(content).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '12px 24px',
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab ? '2px solid var(--accent-blue)' : '2px solid transparent',
                color: activeTab === tab ? 'var(--accent-blue)' : 'var(--text-muted)',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition)'
              }}
            >
              {content[tab].icon}
              {content[tab].title}
            </button>
          ))}
        </div>

        <div style={{ animation: 'fadeIn 0.3s' }}>
          <h2 style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {content[activeTab].title}
          </h2>
          <p style={{ lineHeight: '1.7', fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '24px' }}>
            {content[activeTab].content}
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {content[activeTab].features.map((feat, i) => (
              <div key={i} style={{ 
                background: 'rgba(56, 189, 248, 0.1)', 
                border: '1px solid var(--border-glass)',
                padding: '12px 20px', 
                borderRadius: '8px',
                color: 'var(--accent-blue)',
                fontWeight: '500'
              }}>
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="dashboard-grid" style={{ marginTop: '30px' }}>
        <div className="stat-card glass-panel" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Dna size={40} className="text-success" style={{ marginBottom: '16px' }} />
          <h3>DNA Sequencing</h3>
          <p className="text-muted" style={{ margin: '12px 0' }}>Explore the genomic structures of different species.</p>
          <button className="btn btn-primary">Open Genome Browser</button>
        </div>
        
        <div className="stat-card glass-panel" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
           <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=300&q=80" alt="Microscope" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px', marginBottom: '16px' }} />
           <h3>Virtual Microscope</h3>
           <p className="text-muted" style={{ margin: '12px 0' }}>Examine cellular structures in high resolution.</p>
           <button className="btn btn-outline">Start Simulation</button>
        </div>
      </div>
    </div>
  );
};

export default Biology;
