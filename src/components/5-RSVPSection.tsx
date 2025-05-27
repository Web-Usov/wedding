import { useEffect, useState } from "react";
// import PhoneInput from "react-phone-number-input/input";
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
  MultiSelect,
  PhoneInput,
} from "./ui";
import { AttendanceStatus, RSVP } from "../types/RSVP";
import { isPossiblePhoneNumber } from "react-phone-number-input";

interface Props extends SectionBackgroundProps {}

const AttendanceStatuses = Array.from(Object.values(AttendanceStatus));

const hasErrors = (fields: Record<keyof RSVP, string>) => {
  return Object.values(fields).some((error) => error.length > 0);
};

export default function RSVPSection({ bgImageUrl }: Props) {
  const [formData, setFormData] = useState<RSVP>({
    name: "",
    phone: "",
    message: "",
    attendanceStatus: AttendanceStatus.one,
    guestName: "",
    drinks: [],
    allergies: "",
  });

  const resetErrors = () => {
    setFormErrors({
      name: "",
      phone: "",
      message: "",
      attendanceStatus: "",
      guestName: "",
      drinks: "",
      allergies: "",
    });
  };

  const [formErrors, setFormErrors] = useState<Record<keyof RSVP, string>>({
    name: "",
    phone: "",
    message: "",
    attendanceStatus: "",
    guestName: "",
    drinks: "",
    allergies: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const tempErrors: Record<keyof RSVP, string> = {
      name: "",
      phone: "",
      message: "",
      attendanceStatus: "",
      guestName: "",
      drinks: "",
      allergies: "",
    };

    if (!formData.name) {
      tempErrors.name = "Пожалуйста, введите ваше имя.";
    } else if (formData.name.length < 2) {
      tempErrors.name = "Имя должно быть не менее 2 символов.";
    }

    if (!formData.phone) {
      tempErrors.phone = "Пожалуйста, введите номер телефона.";
    } else if (isPossiblePhoneNumber(formData.phone) === false) {
      tempErrors.phone = "Пожалуйста, введите корректный номер телефона.";
    }

    if (
      formData.attendanceStatus === AttendanceStatus.couple &&
      !formData.guestName
    ) {
      tempErrors.guestName = "Пожалуйста, введите имя гостя.";
    } else if (
      formData.attendanceStatus === AttendanceStatus.couple &&
      formData.guestName.length < 2
    ) {
      tempErrors.guestName = "Имя гостя должно быть не менее 2 символов.";
    }

    if (formData.drinks.length === 0) {
      tempErrors.drinks = "Пожалуйста, выберите хотя бы один напиток.";
    }

    if (formData.allergies.length > 100) {
      tempErrors.allergies = "Максимальная длина - 100 символов.";
    }

    if (formData.message.length > 500) {
      tempErrors.message = "Максимальная длина сообщения - 500 символов.";
    }

    if (hasErrors(tempErrors)) {
      console.warn("Form has errors:", tempErrors);
      setFormErrors(tempErrors);
      return;
    }
    resetErrors();

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

  useEffect(() => {
    resetErrors();
  }, [formData]);

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
            value={formData.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormData({ ...formData, name: e.target.value })
            }
            error={formErrors.name}
          >
            Ваше имя
          </InputField>

          <PhoneInput
            value={formData.phone}
            onChangeValue={(value) =>
              setFormData({ ...formData, phone: value || "" })
            }
            id="phone"
            name="phone"
            error={formErrors.phone}
          >
            Номер телефона
          </PhoneInput>

          <div className="grid gap-2">
            <RadioButton
              id="attendance-status"
              items={AttendanceStatuses}
              selectedValue={formData.attendanceStatus}
              onChange={handleAttendanceChange}
              error={formErrors.attendanceStatus}
            >
              Я буду...
            </RadioButton>
          </div>

          <InputField
            data-visible={formData.attendanceStatus === AttendanceStatus.couple}
            id="guest-name"
            name="guest-name"
            type="text"
            value={formData.guestName}
            onChange={(e) => handleGuestNameChange(e.target.value)}
            placeholder="Имя гостя"
            wrapperClassName="data-[visible=false]:opacity-0"
            error={formErrors.guestName}
          />

          <MultiSelect
            id="drinks"
            name="drinks"
            options={[
              "Вино",
              "Шампанское",
              "Коньяк",
              "Водка",
              "Виски",
              "Безалкогольные",
            ]}
            selectedValues={formData.drinks}
            onChange={(values) => setFormData({ ...formData, drinks: values })}
            error={formErrors.drinks}
          >
            Выберите напитки
          </MultiSelect>

          <InputField
            id="allergies"
            name="allergies"
            value={formData.allergies}
            onChange={(e) =>
              setFormData({ ...formData, allergies: e.target.value })
            }
            placeholder="Укажите аллергены, если есть"
            error={formErrors.allergies}
          >
            Аллергии
          </InputField>

          <TextareaField
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            error={formErrors.message}
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
