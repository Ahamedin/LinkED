export const BOOKINGS_STORAGE_KEY = "bookedMentors";

export function getBookedMentorIds() {
  if (typeof window === "undefined") return [];

  try {
    const raw = localStorage.getItem(BOOKINGS_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter((id) => Number.isInteger(id));
  } catch {
    return [];
  }
}

export function saveBookedMentorIds(ids) {
  if (typeof window === "undefined") return;
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(ids));
}

export function addBookedMentor(id) {
  const current = new Set(getBookedMentorIds());
  current.add(id);
  saveBookedMentorIds([...current]);
}

export function removeBookedMentor(id) {
  const next = getBookedMentorIds().filter((mentorId) => mentorId !== id);
  saveBookedMentorIds(next);
}

export function isMentorBooked(id) {
  return getBookedMentorIds().includes(id);
}