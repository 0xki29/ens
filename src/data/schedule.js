// ============================================================================
//  DATA THỜI KHÓA BIỂU — Nguồn dữ liệu duy nhất (single source of truth)
//  Chỉnh sửa ở đây để thêm/bớt môn. UI được render hoàn toàn từ dữ liệu này.
// ============================================================================

export const semester = {
  title: 'Kỳ 1 · Năm học 2026–2027',
  shortTitle: 'Kỳ 1 · 2026–2027',
  startLabel: 'Tuần 1 — 03/08/2026',
  // Thứ Hai của Tuần 1
  week1Monday: '2026-08-03',
};

// Bảng khung giờ theo tiết. Mỗi tiết học 50 phút, nghỉ 5 phút rồi vào tiết mới.
// (Buổi sáng: tiết 1–5 từ 07:00. Buổi chiều: tiết 6–10 từ 13:00.)
export const periodTimes = {
  1:  { start: '07:00', end: '07:50' },
  2:  { start: '07:55', end: '08:45' },
  3:  { start: '08:50', end: '09:40' },
  4:  { start: '09:45', end: '10:35' },
  5:  { start: '10:40', end: '11:30' },
  6:  { start: '13:00', end: '13:50' },
  7:  { start: '13:55', end: '14:45' },
  8:  { start: '14:50', end: '15:40' },
  9:  { start: '15:45', end: '16:35' },
  10: { start: '16:40', end: '17:30' },
};

// Khoảng giờ cho một dải tiết: giờ BẮT ĐẦU tiết đầu → giờ KẾT THÚC tiết cuối.
// VD: periodSpan(6, 8) => "13:00–15:25"
export function periodSpan(startPeriod, endPeriod) {
  const s = periodTimes[startPeriod]?.start ?? '';
  const e = periodTimes[endPeriod]?.end ?? '';
  return `${s}–${e}`;
}

// Thứ tự các ngày trong tuần
export const dayOrder = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
];

export const dayMeta = {
  monday:    { vi: 'Thứ 2', short: 'T2', long: 'Thứ Hai' },
  tuesday:   { vi: 'Thứ 3', short: 'T3', long: 'Thứ Ba' },
  wednesday: { vi: 'Thứ 4', short: 'T4', long: 'Thứ Tư' },
  thursday:  { vi: 'Thứ 5', short: 'T5', long: 'Thứ Năm' },
  friday:    { vi: 'Thứ 6', short: 'T6', long: 'Thứ Sáu' },
  saturday:  { vi: 'Thứ 7', short: 'T7', long: 'Thứ Bảy' },
  sunday:    { vi: 'Chủ Nhật', short: 'CN', long: 'Chủ Nhật' },
};

// Mỗi lớp: { day, periodStart, periodEnd, subject, courseCode, room, lecturer }
export const classes = [
  // ── THỨ 2 ──────────────────────────────────────────────
  { day: 'monday', periodStart: 6, periodEnd: 8,  subject: 'Nghe 4', courseCode: '2351', room: 'C-208', lecturer: 'Ngô Cẩm Bình' },
  { day: 'monday', periodStart: 9, periodEnd: 10, subject: 'Nói 4',  courseCode: '2357', room: 'C-208', lecturer: 'Ngô Cẩm Bình' },

  // ── THỨ 3 ── nghỉ ──────────────────────────────────────

  // ── THỨ 4 ──────────────────────────────────────────────
  { day: 'wednesday', periodStart: 6, periodEnd: 8,  subject: 'Đọc 4',  courseCode: '2344', room: 'C-208', lecturer: 'Trịnh Thị Thanh Thủy' },
  { day: 'wednesday', periodStart: 9, periodEnd: 10, subject: 'Viết 4', courseCode: '2372', room: 'C-208', lecturer: 'Nguyễn Thúy Thương' },

  // ── THỨ 5 ──────────────────────────────────────────────
  { day: 'thursday', periodStart: 1, periodEnd: 3, subject: 'Kỹ năng thuyết trình tiếng Anh', courseCode: '2346', room: 'C-201', lecturer: 'Phạm Thị Hương (NN)' },
  { day: 'thursday', periodStart: 4, periodEnd: 5, subject: 'Kỹ năng giao tiếp',              courseCode: '2113', room: 'C-201', lecturer: 'Nguyễn Thị Huyền My' },

  // ── THỨ 6 ──────────────────────────────────────────────
  { day: 'friday', periodStart: 6, periodEnd: 8,  subject: 'Tiếng Trung 3',                     courseCode: '2364', room: 'C-208', lecturer: 'Nguyễn Thùy Linh' },
  { day: 'friday', periodStart: 9, periodEnd: 10, subject: 'Lịch sử Đảng Cộng sản Việt Nam',    courseCode: '1811', room: 'C-201', lecturer: 'Bùi Thị Bích Thuận' },

  // ── THỨ 7 ──────────────────────────────────────────────
  { day: 'saturday', periodStart: 6, periodEnd: 8,  subject: 'Từ vựng học tiếng Anh', courseCode: '2366', room: 'C-201', lecturer: 'Nguyễn Thị Hiền Hương' },
  { day: 'saturday', periodStart: 9, periodEnd: 10, subject: 'Ngữ pháp thực hành',    courseCode: '2353', room: 'C-201', lecturer: 'Đinh Thị Lan' },

  // ── CHỦ NHẬT ── nghỉ ───────────────────────────────────
];

// Số tín chỉ mỗi môn (tổng cần đạt 21). Map theo mã HP.
export const creditByCourse = {
  '2351': 2, // Nghe 4
  '2357': 2, // Nói 4
  '2344': 2, // Đọc 4
  '2372': 2, // Viết 4
  '2346': 2, // Kỹ năng thuyết trình tiếng Anh
  '2113': 2, // Kỹ năng giao tiếp
  '2364': 3, // Tiếng Trung 3
  '1811': 2, // Lịch sử Đảng CSVN
  '2366': 2, // Từ vựng học tiếng Anh
  '2353': 2, // Ngữ pháp thực hành
};

// ── Số liệu tổng hợp (tính từ dữ liệu) ────────────────────
export const totalSubjects = classes.length; // 10 môn
export const totalCredits = Object.values(creditByCourse).reduce((a, b) => a + b, 0); // 21 tín chỉ

const daysWithClass = new Set(classes.map((c) => c.day));
export const studyDaysCount = daysWithClass.size;                 // 5 ngày học
export const restDaysCount = dayOrder.length - studyDaysCount;    // 2 ngày nghỉ

// Gom lớp theo ngày, sắp xếp theo tiết bắt đầu
export function classesByDay() {
  const map = {};
  for (const day of dayOrder) map[day] = [];
  for (const c of classes) map[c.day].push(c);
  for (const day of dayOrder) map[day].sort((a, b) => a.periodStart - b.periodStart);
  return map;
}

// Định dạng dd/mm/yyyy
function fmt(d) {
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  return `${dd}/${mm}/${d.getFullYear()}`;
}

// Trả về thông tin 1 tuần (weekIndex: 1-based)
export function getWeekRange(weekIndex) {
  const base = new Date(semester.week1Monday + 'T00:00:00');
  const monday = new Date(base);
  monday.setDate(base.getDate() + (weekIndex - 1) * 7);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const dates = {};
  dayOrder.forEach((day, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    dates[day] = fmt(d);
  });
  return { monday: fmt(monday), sunday: fmt(sunday), dates, label: `Tuần ${weekIndex}` };
}
