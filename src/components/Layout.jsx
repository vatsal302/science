import React, { useState } from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu, X, Search, Bell, User, ChevronDown, ChevronRight,
  Home, Atom, FlaskConical, Dna, Leaf, LineChart, Globe, Info, Compass
} from 'lucide-react';

const Layout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
    if (mobileOpen) setMobileOpen(false);
  };

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleDropdown = (name) => {
    if (sidebarCollapsed) {
      setSidebarCollapsed(false);
    }
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuItems = [
    { path: '/', icon: <Home size={20} />, text: 'Home Portal' },
    { 
      path: '/physics', 
      icon: <Atom size={20} />, 
      text: 'Physics',
      submenu: [
        { path: '/physics#motion', text: 'Motion & Mechanics' },
        { path: '/physics#energy', text: 'Energy & Thermodynamics' },
        { path: '/physics#space', text: 'Astrophysics' }
      ]
    },
    { 
      path: '/chemistry', 
      icon: <FlaskConical size={20} />, 
      text: 'Chemistry',
      submenu: [
        { path: '/chemistry#reactions', text: 'Reactions' },
        { path: '/chemistry#elements', text: 'Elements' },
        { path: '/chemistry#materials', text: 'Material Science' }
      ]
    },
    { 
      path: '/biology', 
      icon: <Dna size={20} />, 
      text: 'Biology',
      submenu: [
        { path: '/biology#human', text: 'Human Body' },
        { path: '/biology#cells', text: 'Cellular Biology' },
        { path: '/biology#ecosystems', text: 'Ecosystems' }
      ]
    },
    { 
      path: '/environmental', 
      icon: <Leaf size={20} />, 
      text: 'Env. Science',
      submenu: [
        { path: '/environmental#climate', text: 'Climate Change' },
        { path: '/environmental#sustainability', text: 'Sustainability' },
        { path: '/environmental#pollution', text: 'Pollution' }
      ]
    },
    { path: '/data-insights', icon: <LineChart size={20} />, text: 'Data Insights' },
  ];

  return (
    <div className="app-container">
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobile}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40 }}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''} ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          {!sidebarCollapsed && (
            <Link to="/" className="brand">
              <div className="brand-icon">
                <Globe size={24} />
              </div>
              <span>SciPortal</span>
            </Link>
          )}
          {sidebarCollapsed && (
            <Link to="/" className="brand-icon" style={{ margin: 'auto' }}>
              <Globe size={24} />
            </Link>
          )}
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div key={item.path}>
              {item.submenu ? (
                <div>
                  <div 
                    className={`nav-item ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                    onClick={() => toggleDropdown(item.text)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.icon}
                    <span className="nav-text">{item.text}</span>
                    {!sidebarCollapsed && (
                      <span style={{ marginLeft: 'auto' }}>
                        {activeDropdown === item.text ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </span>
                    )}
                  </div>
                  
                  {/* Submenu */}
                  {activeDropdown === item.text && !sidebarCollapsed && (
                    <div className="submenu">
                      {item.submenu.map((sub, idx) => (
                        <Link 
                          key={idx} 
                          to={sub.path} 
                          className="submenu-item"
                        >
                          {sub.text}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink 
                  to={item.path} 
                  className={({isActive}) => `nav-item ${isActive ? 'active' : ''}`}
                  onClick={() => mobileOpen && setMobileOpen(false)}
                >
                  {item.icon}
                  <span className="nav-text">{item.text}</span>
                </NavLink>
              )}
            </div>
          ))}
          
          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border-glass)' }}>
             <NavLink to="/about" className="nav-item">
               <Info size={20} />
               <span className="nav-text">About</span>
             </NavLink>
             <NavLink to="/explore" className="nav-item">
               <Compass size={20} />
               <span className="nav-text">Explore</span>
             </NavLink>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-wrapper">
        <header className="navbar">
          <div className="flex items-center gap-4" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="btn-icon" onClick={toggleSidebar}>
              <Menu size={20} />
            </button>
            <div className="nav-search hidden md-block">
              <Search className="search-icon" size={18} />
              <input type="text" placeholder="Search discoveries, elements, facts..." />
            </div>
          </div>

          <div className="nav-actions">
            <button className="btn-icon" title="Notifications">
              <Bell size={20} />
            </button>
            <div className="profile-menu">
              <div className="avatar">Dr</div>
              <span className="hidden sm-block" style={{ fontWeight: 500 }}>Scientist</span>
              <ChevronDown size={16} className="text-muted" />
            </div>
          </div>
        </header>

        <div className="page-content" style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - var(--navbar-height))' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
