import { useState } from "react";
import {
  Button,
  Section,
  SectionBackgroundProps,
  SectionTitle,
  Form,
  InputField,
  TextareaField,
  SectionContainer,
  RadioButton,
} from "./ui";

interface Props extends SectionBackgroundProps {}

enum AttendanceStatus {
  one = "Один",
  couple = "С парой",
  not = "Не смогу прийти",
}
const AttendanceStatuses = Array.from(Object.values(AttendanceStatus));

type FormData = {
  name: string;
  email: string;
  message: string;
  attendanceStatus: AttendanceStatus;
  guestName: string;
};

export default function RSVPSection({ bgImageUrl }: Props) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    attendanceStatus: AttendanceStatus.one,
    guestName: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка отправки формы будет реализована позже
    console.log("Form submitted:", formData);
  };

  const handleAttendanceChange = (status: AttendanceStatus) => {
    setFormData((prev) => ({
      ...prev,
      attendanceStatus: status,
      guestName: status === AttendanceStatus.couple ? prev.guestName : "",
    }));
  };

  const handleGuestNameChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      guestName: value,
    }));
  };

  return (
    <Section
      bgImageUrl={bgImageUrl}
      className="min-h-screen h-full flex flex-col"
    >
      <SectionTitle>Подтвердите присутствие</SectionTitle>
      <SectionContainer className="justify-items-center h-full flex-1 w-full">
        <Form
          onSubmit={handleSubmit}
          className="max-w-2xl w-full transition-all"
        >
          <InputField
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, name: e.target.value })
            }
          >
            Ваше имя*
          </InputField>
          <InputField
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          >
            Email*
          </InputField>

          <div className="grid gap-2">
            <span className="font-heading text-accent text-base">
              Я буду...
            </span>
            <RadioButton
              items={AttendanceStatuses}
              selectedValue={formData.attendanceStatus}
              onChange={handleAttendanceChange}
            />
          </div>

          <InputField
            data-visible={formData.attendanceStatus === AttendanceStatus.couple}
            id="guest-name"
            name="guest-name"
            type="text"
            value={formData.guestName}
            onChange={(e) => handleGuestNameChange(e.target.value)}
            placeholder="Имя гостя"
            required={formData.attendanceStatus === AttendanceStatus.couple}
            wrapperClassName="data-[visible=false]:opacity-0"
          />

          <TextareaField
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          >
            Пожелания и комментарии
          </TextareaField>
          <Button type="submit" className="hover:-translate-y-1">
            Отправить
          </Button>
        </Form>
      </SectionContainer>
    </Section>
  );
}
