import { useEffect, useRef, useState, useCallback } from 'react';
import { MapPin } from 'lucide-react';

const CITIES = [
  { name: 'Alger',       lat: 36.737, lng:  3.086,  rate: 74, delta: '+5%', orders: 1842, tier: 'high' },
  { name: 'Oran',        lat: 35.691, lng: -0.642,  rate: 65, delta: '+3%', orders: 1203, tier: 'mid'  },
  { name: 'Constantine', lat: 36.365, lng:  6.614,  rate: 58, delta: '+8%', orders:  876, tier: 'mid'  },
  { name: 'Blida',       lat: 36.47,  lng:  2.828,  rate: 70, delta: '+4%', orders:  720, tier: 'high' },
  { name: 'Tlemcen',     lat: 34.878, lng: -1.316,  rate: 61, delta: '+6%', orders:  412, tier: 'mid'  },
  { name: 'Sétif',       lat: 36.19,  lng:  5.408,  rate: 55, delta: '+7%', orders:  631, tier: 'mid'  },
  { name: 'Annaba',      lat: 36.9,   lng:  7.765,  rate: 52, delta: '+2%', orders:  543, tier: 'mid'  },
  { name: 'Batna',       lat: 35.556, lng:  6.174,  rate: 47, delta: '+3%', orders:  321, tier: 'low'  },
  { name: 'Adrar',       lat: 27.87,  lng: -0.294,  rate: 31, delta: '+2%', orders:   64, tier: 'low'  },
];

const TIER_COLORS = {
  high: { dot: '#10b981', ring: 'rgba(16,185,129,.15)', badge: 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500' },
  mid:  { dot: '#00a2ff', ring: 'rgba(0,162,255,.15)',  badge: 'bg-blue-50 dark:bg-blue-500/10 text-primary'    },
  low:  { dot: '#94a3b8', ring: 'rgba(148,163,184,.15)', badge: 'bg-slate-50 dark:bg-slate-500/10 text-slate-500'         },
};

const MapUI = () => {
  const svgRef    = useRef(null);
  const wrapRef   = useRef(null);
  const [active, setActive]     = useState(null);
  const [tooltip, setTooltip]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const highlight = useCallback((idx) => setActive(idx), []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const buildMap = useCallback(() => {
    let cancelled = false;

    Promise.all([
      import('https://cdn.jsdelivr.net/npm/d3@7/+esm'),
      import('https://cdn.jsdelivr.net/npm/topojson-client@3/+esm'),
    ]).then(([d3, topojson]) => {
      if (cancelled || !svgRef.current || !wrapRef.current) return;

      d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(world => {
        if (cancelled) return;

        const all     = topojson.feature(world, world.objects.countries);
        const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);
        const algeria = all.features.find(f => +f.id === 12);

        const wrap = wrapRef.current;
        const W    = wrap.clientWidth;
        const H    = wrap.clientHeight;

        const svg = d3.select(svgRef.current)
          .attr('width', W).attr('height', H)
          .attr('viewBox', `0 0 ${W} ${H}`);

        svg.selectAll('*').remove();

        const projection = d3.geoMercator()
          .fitExtent([[20, 20], [W - 20, H - 40]], algeria);

        const path   = d3.geoPath(projection);
        const isDark = document.documentElement.classList.contains('dark');

        // Background subtle rect
        svg.append('rect')
          .attr('width', W).attr('height', H)
          .attr('fill', isDark ? '#0f172a' : '#f8fafc')
          .attr('opacity', 0);

        // Map paths
        svg.selectAll('.c').data(all.features).join('path')
          .attr('d', path)
          .attr('fill', d => +d.id === 12
            ? (isDark ? '#1e293b' : '#f1f5f9')
            : (isDark ? '#0f172a' : '#f8fafc'))
          .attr('stroke', isDark ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.05)')
          .attr('stroke-width', 0.5);

        svg.append('path').datum(borders)
          .attr('d', path).attr('fill', 'none')
          .attr('stroke', isDark ? 'rgba(255,255,255,.03)' : 'rgba(0,0,0,.03)')
          .attr('stroke-width', 0.5);

        const maxR      = Math.min(24, W / 20);
        const labelSize = 10;
        const sizeScale = d3.scaleSqrt().domain([50, 1900]).range([5, maxR]);

        CITIES.forEach((city, i) => {
          const [x, y] = projection([city.lng, city.lat]);
          const r      = sizeScale(city.orders);
          const col    = TIER_COLORS[city.tier].dot;
          const ring   = TIER_COLORS[city.tier].ring;

          const g = svg.append('g').style('cursor', 'pointer');

          // Animated glow/pulse effect
          const pulse = g.append('circle')
            .attr('cx', x).attr('cy', y).attr('r', r + 6)
            .attr('fill', ring)
            .attr('opacity', 0.6);

          g.append('circle').attr('cx', x).attr('cy', y).attr('r', r).attr('fill', col).attr('opacity', 0.15);
          g.append('circle').attr('cx', x).attr('cy', y).attr('r', Math.max(3, r * 0.4)).attr('fill', col);

          if (r > 10) {
            g.append('text')
              .attr('x', x).attr('y', y - r - 6)
              .attr('text-anchor', 'middle')
              .attr('font-size', labelSize)
              .attr('font-family', 'Outfit, sans-serif')
              .attr('font-weight', '700')
              .attr('fill', isDark ? '#94a3b8' : '#64748b')
              .text(city.name);
          }

          g.on('mouseenter', function (event) {
            setActive(i);
            const rect = wrapRef.current.getBoundingClientRect();
            setTooltip({
              x: event.clientX - rect.left + 15,
              y: event.clientY - rect.top  - 15,
              city,
            });
          }).on('mousemove', function (event) {
            const rect = wrapRef.current.getBoundingClientRect();
            setTooltip(t => t ? {
              ...t,
              x: event.clientX - rect.left + 15,
              y: event.clientY - rect.top  - 15,
            } : t);
          }).on('mouseleave', function () {
            setActive(null);
            setTooltip(null);
          });
        });
      });
    });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    buildMap();
  }, [buildMap]);

  useEffect(() => {
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => buildMap(), 150);
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
    };
  }, [buildMap]);

  const SidebarContent = () => (
    <div className="space-y-3">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 px-1">
        Flux Régionaux
      </div>
      <div className={isMobile ? 'grid grid-cols-2 gap-3' : 'flex flex-col gap-3'}>
        {CITIES.map((city, i) => {
          const col = TIER_COLORS[city.tier];
          return (
            <div
              key={city.name}
              onMouseEnter={() => highlight(i)}
              onMouseLeave={() => highlight(null)}
              className={`rounded-[20px] p-4 border transition-all duration-300 cursor-pointer group
                ${active === i
                  ? 'border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-lg shadow-primary/5 scale-[1.02]'
                  : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'}
                ${active !== null && active !== i ? 'opacity-40 grayscale-[0.5]' : ''}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-black text-heading dark:text-white truncate pr-1">{city.name}</span>
                <span className={`text-[9px] font-black px-2 py-1 rounded-lg flex-shrink-0 ${col.badge}`}>
                  {city.rate}%
                </span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-sm font-black text-heading dark:text-white">{city.orders.toLocaleString()}</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Commandes</span>
              </div>
              <div className="h-1 bg-slate-50 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: active === i ? `${city.rate}%` : '0%', background: col.dot }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className={`w-full font-outfit ${isMobile ? 'flex flex-col gap-6' : 'flex flex-row gap-8 h-[450px]'}`}>

      {/* Sidebar - Desktop (Right side feels better for dashboards) */}
      {!isMobile && (
        <div className="w-64 flex-shrink-0 flex flex-col gap-1.5 overflow-y-auto pr-2 custom-scrollbar">
          <SidebarContent />
        </div>
      )}

      {/* Map Container */}
      <div
        ref={wrapRef}
        className="relative flex-1 rounded-[32px] overflow-hidden bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 shadow-inner group"
        style={isMobile ? { aspectRatio: '1/1', minHeight: 300 } : { minHeight: 450 }}
      >
        <svg ref={svgRef} className="w-full h-full block" />

        {/* Legend */}
        <div className="absolute bottom-6 left-6 flex items-center gap-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-500 group-hover:translate-y-[-4px]">
          {[
            { label: 'Haut', col: '#10b981' },
            { label: 'Moyen', col: '#00a2ff' },
            { label: 'Bas',   col: '#94a3b8' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: item.col }} />
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Floating Indicator */}
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-2xl shadow-xl shadow-primary/30 border-2 border-white dark:border-slate-800 group-hover:scale-105 transition-transform duration-500">
            <MapPin className="w-4 h-4" />
            <span className="text-[10px] font-black uppercase tracking-widest">
              58 Wilayas
            </span>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className="absolute pointer-events-none z-50 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl px-4 py-3 shadow-2xl border border-white/10 dark:border-slate-200 animate-in fade-in zoom-in duration-200"
            style={{ left: tooltip.x, top: tooltip.y, minWidth: 140 }}
          >
            <div className="text-sm font-black mb-1">{tooltip.city.name}</div>
            <div className="space-y-1">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Taux Conf.</span>
                <span className="text-xs font-black text-emerald-400 dark:text-emerald-600">{tooltip.city.rate}%</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Commandes</span>
                <span className="text-xs font-black">{tooltip.city.orders.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isMobile && (
        <div className="px-1">
          <SidebarContent />
        </div>
      )}

    </div>
  );
};

export default MapUI;