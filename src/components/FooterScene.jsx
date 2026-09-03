import MascotScene from './mascots/MascotScene.jsx';

// Cảnh cuối trang: gấu & cún ngồi cạnh nhau ngắm hoàng hôn, vài trái tim bay lên.
export default function FooterScene() {
  return (
    <div className="footer-scene reveal" aria-hidden="true">
      <div className="footer-scene__sky">
        <span className="footer-sun" />
      </div>
      <div className="footer-scene__couple">
        <MascotScene variant="footer" />
      </div>
    </div>
  );
}
