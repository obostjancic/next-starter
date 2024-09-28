"use client";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { Button, Textarea } from "@nextui-org/react";
import { useFormState } from "react-dom";

import { createGuestbookEntry } from "@/app/guestbook/actions";
import { InsertGuestbookEntrySchema } from "@/db/schema";

export default function GuestBookClient() {
  const [lastResult, action] = useFormState(createGuestbookEntry, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: InsertGuestbookEntrySchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      action={action}
      onSubmit={form.onSubmit}
      className="flex flex-col space-y-4"
      noValidate
    >
      <Textarea
        placeholder="Leave a message"
        key={fields.message.key}
        name={fields.message.name}
        errorMessage={fields.message.errors}
        isInvalid={!fields.message.valid}
      />
      <Button size="sm" type="submit">
        Submit
      </Button>
    </form>
  );
}
