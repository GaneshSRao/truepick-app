import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidenav.css';
import sidebarItems from './SidenavItems.json';

const Sidenav = () => {
  const location = useLocation();

  const [openCollapsibles, setOpenCollapsibles] = useState({});
  const [isSidenavCollapsed, setIsSidenavCollapsed] = useState(false);

  const collapsibleInstances = useRef({});

  useEffect(() => {
    if (window.M && window.M.Collapsible) {
      const collapsibleElements = document.querySelectorAll('.collapsible');

      collapsibleElements.forEach(elem => {
        const instance = window.M.Collapsible.init(elem, {
          onOpenEnd: (el) => {
            const collapsibleId = el.dataset.collapsibleId;
            if (collapsibleId) {
              setOpenCollapsibles(prev => ({ ...prev, [collapsibleId]: true }));
            }
          },
          onCloseEnd: (el) => {
            const collapsibleId = el.dataset.collapsibleId;
            if (collapsibleId) {
              setOpenCollapsibles(prev => ({ ...prev, [collapsibleId]: false }));
            }
          },
        });
        collapsibleInstances.current[elem.id || elem.dataset.collapsibleId] = instance;
      });
    }

    return () => {
      for (const id in collapsibleInstances.current) {
        if (collapsibleInstances.current[id] && collapsibleInstances.current[id].destroy) {
          collapsibleInstances.current[id].destroy();
        }
      }
    };
  }, []);

  const handleLinkClick = useCallback(() => {
    // This function is now mostly for logging or side effects.
  }, []);

  const handleCollapsibleHeaderClick = useCallback(() => {
    // Materialize's internal JS handles the actual open/close animation.
  }, []);

  const handleSideNavCollapse = useCallback(() => {
    setIsSidenavCollapsed(prev => !prev);
  }, []);

  // --- MODIFIED isActive FUNCTION ---
  const isActive = useCallback((linkPath) => {
    // console.log("--- isActive Check ---");
    //console.log("location.pathname:", location.pathname); // Not directly used by HashRouter for comparison
    //console.log("location.hash:", location.hash);
    return location.pathname === `/${linkPath}`;
  }, [location.pathname]);


  const isCollapsibleParentActive = useCallback((collapsibleId, subItems) => {
    return openCollapsibles[collapsibleId] || subItems.some(item => isActive(item.path));
  }, [openCollapsibles, isActive]);

  const renderSidebarItem = useCallback((item) => {
    if (item.type === 'link') {
      return (
        <li key={item.id}>
          <Link
            className={`waves-effect ${isActive(item.path) ? 'active' : ''}`}
            to={item.path} // <--- Directly use item.path (it no longer has '#')
            onClick={handleLinkClick}
          >
            <i
              className={`material-icons ${item.iconSize || ''}`}
              style={{
                marginRight: '12px',
                ...(item.iconSize === 'tiny' && { fontSize: '8px', textAlign: 'center' }),
                ...(item.iconColor && { color: item.iconColor }),
              }}
            >
              {item.icon}
            </i>
            <span>{item.label}</span>
          </Link>
        </li>
      );
    } else if (item.type === 'collapsible') {
      return (
        <li key={item.id}>
          <ul className="collapsible" data-collapsible="expandable" data-collapsible-id={item.id}>
            <li className={isCollapsibleParentActive(item.id, item.items) ? 'active' : ''}>
              <a
                className="collapsible-header"
                tabIndex="0"
                onClick={handleCollapsibleHeaderClick}
                data-target={item.id}
                data-collapsible-id={item.id}
              >
                <i className="material-icons" style={{ marginRight: '12px' }}>
                  {item.icon}
                </i>
                {item.label}
                <i className="material-icons right more">expand_more</i>
              </a>
              <div
                className="collapsible-body"
                style={{ display: openCollapsibles[item.id] ? 'block' : 'none' }}
              >
                <ul>
                  {item.items && item.items.map((subItem) => renderSidebarItem(subItem))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
      );
    }
    return null;
  }, [isActive, handleLinkClick, handleCollapsibleHeaderClick, isCollapsibleParentActive, openCollapsibles]);


  return (
    <ul className={`sidenav sidenav-fixed ${isSidenavCollapsed ? 'collapsed' : ''}`} id="slide-out">
      <nav>
        <div className="nav-wrapper" style={{ background: 'white', paddingLeft: '30px' }}>
          <span className="white-text" style={{ fontSize: '30px' }}>
            <b
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                paddingRight: '6px',
                paddingLeft: '6px',
                borderRadius: '10px',
                marginRight: '5px',
              }}
            >
              tp
            </b>
          </span>
          &nbsp;
          <span className="full" style={{ color: '#764ba2', fontSize: '30px', verticalAlign: 'top' }}>
            <b>truepick</b>
          </span>
        </div>
      </nav>

      {/* {sidebarItems.map((item) => {
        if (item.type === 'section') {
            return item.items.map(subItem => renderSidebarItem(subItem));
        }
        return renderSidebarItem(item);
      })} */}
      {sidebarItems.map((item) => {
        // Renders a section header and a horizontal rule for "section" types.
        if (item.type === 'section') {
          return (
            <React.Fragment key={item.id}>
              <li className="sidebar-section-header">
                <span>{item.label}</span>
              </li>
              {item.items.map(subItem => renderSidebarItem(subItem))}
            </React.Fragment>
          );
        }
        return renderSidebarItem(item);
      })}
    </ul>
  );
};

export default Sidenav;