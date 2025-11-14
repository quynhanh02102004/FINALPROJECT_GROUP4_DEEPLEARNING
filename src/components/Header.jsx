import React, { useEffect } from 'react'
import MegaMenu from './MegaMenu.jsx'

export default function Header({ query, setQuery }) {
  useEffect(() => {
    const onScroll = () => {
      const el = document.querySelector('.header')
      if (!el) return
      if (window.scrollY > 6) el.classList.add('scrolled')
      else el.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <div className="header-inner">
        <a className="logo" href="/"><span>💝</span> Group04<span></span></a>

        <nav className="nav">
          <div className="nav-item">
            <button className="nav-btn">SALE ▾</button>
            <MegaMenu
              columns={[
                { title: 'Flash Sale', items: ['T-shirts', 'Shirts', 'Jeans'] },
                { title: 'Under 199k', items: ['Jackets', 'Sweaters', 'Joggers'] },
                { title: 'Buy 1 Get 1', items: ['Tees', 'Polos', 'Shorts'] },
              ]}
            />
          </div>

          <div className="nav-item">
            <button className="nav-btn">TOPS ▾</button>
            <MegaMenu
              columns={[
                { title: 'T-shirts', items: ['Crew neck', 'Polo', 'Long sleeve'] },
                { title: 'Shirts', items: ['Short sleeve', 'Long sleeve'] },
                { title: 'Jackets', items: ['Denim', 'Khaki', 'Bomber', 'Hoodie'] },
              ]}
            />
          </div>

          <div className="nav-item">
            <button className="nav-btn">BOTTOMS ▾</button>
            <MegaMenu
              columns={[
                { title: 'Jeans', items: ['Slim', 'Straight', 'Relaxed'] },
                { title: 'Khaki', items: ['Regular', 'Stretch'] },
                { title: 'Shorts', items: ['Jogger', 'Bermuda'] },
              ]}
            />
          </div>

          <a className="nav-link" href="#new">NEW ARRIVALS</a>
          <a className="nav-link" href="#stores">STORES</a>
          <a className="nav-link" href="#vip">VIP</a>
        </nav>

        <div className="actions">
          <input
            className="search"
            placeholder="Search items…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="icon-btn" title="Account">👤</button>
          <button className="icon-btn" title="Cart">🛍️</button>
        </div>
      </div>
    </header>
  )
}
