import React, { useState } from 'react';
import { FlaskConical, Beaker, Hexagon, Layers, ArrowRightLeft } from 'lucide-react';

const Chemistry = () => {
  const [element1, setElement1] = useState('Carbon');
  const [element2, setElement2] = useState('Silicon');

  const elementsData = {
    'Hydrogen': { symbol: 'H', number: 1, type: 'Nonmetal', weight: 1.008, state: 'Gas' },
    'Carbon': { symbol: 'C', number: 6, type: 'Nonmetal', weight: 12.011, state: 'Solid' },
    'Oxygen': { symbol: 'O', number: 8, type: 'Nonmetal', weight: 15.999, state: 'Gas' },
    'Silicon': { symbol: 'Si', number: 14, type: 'Metalloid', weight: 28.085, state: 'Solid' },
    'Iron': { symbol: 'Fe', number: 26, type: 'Transition Metal', weight: 55.845, state: 'Solid' },
    'Gold': { symbol: 'Au', number: 79, type: 'Transition Metal', weight: 196.967, state: 'Solid' },
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title gradient-text">Chemistry</h1>
          <p className="text-muted">Exploring the composition, structure, and properties of matter.</p>
        </div>
      </div>

      <div className="dashboard-grid">
        <div id="reactions" className="glass-panel" style={{ padding: '24px' }}>
          <FlaskConical className="text-accent" size={32} style={{ marginBottom: '16px' }} />
          <h3>Chemical Reactions</h3>
          <p className="text-muted" style={{ margin: '12px 0' }}>
            The process that leads to the chemical transformation of one set of chemical substances to another. 
            From combustion to photosynthesis, reactions drive the world around us.
          </p>
          <button className="btn btn-primary" style={{ width: '100%' }}>View Reaction Database</button>
        </div>

        <div id="elements" className="glass-panel" style={{ padding: '24px' }}>
          <Hexagon className="text-warning" size={32} style={{ marginBottom: '16px' }} />
          <h3>Elements & Periodic Table</h3>
          <p className="text-muted" style={{ margin: '12px 0' }}>
            The building blocks of nature. Understand trends in electronegativity, ionization energy, and atomic radii.
          </p>
          <button className="btn btn-outline" style={{ width: '100%' }}>Interactive Table</button>
        </div>

        <div id="materials" className="glass-panel" style={{ padding: '24px' }}>
          <Layers className="text-success" size={32} style={{ marginBottom: '16px' }} />
          <h3>Material Science</h3>
          <p className="text-muted" style={{ margin: '12px 0' }}>
            Designing and discovering new solid materials. Polymers, ceramics, and nanomaterials shaping the future.
          </p>
          <button className="btn btn-outline" style={{ width: '100%' }}>Explore Materials</button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '30px', marginTop: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <ArrowRightLeft className="text-accent" size={24} />
          <h3>Element Comparison Tool</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <label className="text-muted" style={{ display: 'block', marginBottom: '8px' }}>Select Element 1</label>
            <select 
              className="input-control" 
              value={element1} 
              onChange={(e) => setElement1(e.target.value)}
              style={{ marginBottom: '20px' }}
            >
              {Object.keys(elementsData).map(el => <option key={el} value={el}>{el}</option>)}
            </select>
            
            {elementsData[element1] && (
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-blue)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>{elementsData[element1].symbol}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{element1}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem' }}>
                  <div className="text-muted">Atomic Number:</div><div>{elementsData[element1].number}</div>
                  <div className="text-muted">Weight:</div><div>{elementsData[element1].weight}</div>
                  <div className="text-muted">Type:</div><div>{elementsData[element1].type}</div>
                  <div className="text-muted">Standard State:</div><div>{elementsData[element1].state}</div>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ background: 'var(--bg-panel)', padding: '12px', borderRadius: '50%', border: '1px solid var(--border-glass)' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--text-muted)' }}>VS</span>
            </div>
          </div>

          <div style={{ flex: 1, minWidth: '250px' }}>
            <label className="text-muted" style={{ display: 'block', marginBottom: '8px' }}>Select Element 2</label>
            <select 
              className="input-control" 
              value={element2} 
              onChange={(e) => setElement2(e.target.value)}
              style={{ marginBottom: '20px' }}
            >
              {Object.keys(elementsData).map(el => <option key={el} value={el}>{el}</option>)}
            </select>
            
            {elementsData[element2] && (
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--warning)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--warning)' }}>{elementsData[element2].symbol}</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>{element2}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.9rem' }}>
                  <div className="text-muted">Atomic Number:</div><div>{elementsData[element2].number}</div>
                  <div className="text-muted">Weight:</div><div>{elementsData[element2].weight}</div>
                  <div className="text-muted">Type:</div><div>{elementsData[element2].type}</div>
                  <div className="text-muted">Standard State:</div><div>{elementsData[element2].state}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chemistry;
