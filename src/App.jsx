import { useEffect, useRef } from 'react';
import Background from './components/Background.jsx';
import Hero from './components/Hero.jsx';
import SummaryCards from './components/SummaryCards.jsx';
import WeeklySchedule from './components/schedule/WeeklySchedule.jsx';
import FooterScene from './components/FooterScene.jsx';

export default function App() {
  const rootRef = useRef(null);

  // Parallax nhẹ theo chuột (tôn trọng prefers-reduced-motion)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    let raf = 0;
    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        const el = rootRef.current;
        if (!el) return;
        el.querySelectorAll('[data-depth]').forEach((layer) => {
          const d = parseFloat(layer.dataset.depth) || 1;
          layer.style.transform = `translate3d(${(-x * d * 6).toFixed(2)}px, ${(-y * d * 6).toFixed(2)}px, 0)`;
        });
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, []);

  // Scroll reveal cho các phần tử .reveal
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = () => document.querySelectorAll('.reveal:not(.in-view)');
    if (reduce) {
      els().forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    els().forEach((el) => io.observe(el));

    // Quan sát cả các phần tử mới thêm (đổi tuần/ngày)
    const mo = new MutationObserver(() => {
      els().forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <div className="app" ref={rootRef}>
      <Background />
      <main className="container">
        <Hero />
        <SummaryCards />
        <WeeklySchedule />
        <FooterScene />
        <footer className="site-footer">
          <span>Made with 🤎 for study days together · 🐻 × 🐶</span>
        </footer>
      </main>
    </div>
  );
}
