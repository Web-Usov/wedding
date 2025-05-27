export enum AttendanceStatus {
  one = "Один",
  couple = "С парой",
  not = "Не смогу прийти",
}

export type RSVP = {
  name: string;
  phone: string;
  message: string;
  attendanceStatus: AttendanceStatus;
  guestName: string;
  drinks: string[];
  allergies: string;
};
