import MascotScene from '../mascots/MascotScene.jsx';

// Ngày nghỉ — không để trống xấu. Gấu & cún ngủ cạnh nhau.
export default function EmptyDay() {
  return (
    <div className="empty-day reveal">
      <MascotScene variant="rest" />
      <div className="empty-day__moon">🌙</div>
      <h4 className="empty-day__title">Ngày nghỉ</h4>
      <p className="empty-day__text">Hôm nay hai đứa được nghỉ rồi 🤍</p>
    </div>
  );
}
