# 🐻 × 🐶 Cozy Anime University Schedule

Thời khóa biểu / study planner phong cách **cozy anime slice-of-life**, với hai mascot
Brown Bear và Puppy (một cặp đôi) xuyên suốt giao diện.

## Chạy dự án

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run build     # build production -> dist/
npm run preview   # xem thử bản build
```

## Kiến trúc

```
src/
  data/schedule.js          # ⭐ NGUỒN DỮ LIỆU DUY NHẤT — sửa môn học ở đây
  components/
    Background.jsx           # nền nhiều lớp: trời, mây, mặt trời, cây, campus
    Hero.jsx                 # lời chào theo giờ + tiêu đề + thông tin học kỳ
    SummaryCards.jsx         # 4 thẻ thống kê (môn / tín chỉ / ngày học / nghỉ)
    mascots/                 # BrownBear, Puppy (SVG) + MascotScene (cặp đôi)
    schedule/                # WeeklySchedule, DayColumn, ClassCard, EmptyDay, ClassModal
  styles/                    # design tokens + css theo từng phần
```

## Thêm / sửa môn học

Chỉ cần sửa mảng `classes` trong `src/data/schedule.js`:

```js
{ day: 'monday', periodStart: 6, periodEnd: 8, subject: 'Nghe 4',
  courseCode: '2351', room: 'C-208', lecturer: 'Ngô Cẩm Bình' }
```

Số tín chỉ mỗi môn khai báo trong `creditByCourse`. Toàn bộ số liệu tổng hợp
(10 môn · 21 tín chỉ · 5 ngày học · 2 ngày nghỉ) được **tính tự động** từ dữ liệu.

## Tính năng

- Layout responsive riêng cho desktop / tablet / mobile (mobile dùng day-picker + 1 ngày)
- Click vào lớp → modal chi tiết (Esc để đóng, focus states đầy đủ)
- Chuyển tuần (Previous / Next) tự tính lại ngày
- Animation mascot (thở, chớp mắt, ngáp, vẫy đuôi, tai cụp) + parallax nhẹ theo chuột
- Tôn trọng `prefers-reduced-motion` (tắt toàn bộ chuyển động khi bật)
- Ngày nghỉ (Thứ 3, Chủ Nhật) hiển thị cảnh gấu & cún ngủ cạnh nhau
