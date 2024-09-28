import { Card, CardBody, CardHeader } from "@nextui-org/react";

import db from "@/db";

import GuestBookClient from "./page.client";

export default async function GuestBook() {
  const entries = await db.query.guestbookEntries.findMany();

  return (
    <Card>
      <CardHeader>
        <h2>Guest Book</h2>
      </CardHeader>
      <CardBody>
        <GuestBookClient />
      </CardBody>

      <CardBody>
        <h3>Entries</h3>
        <ul>
          {entries.map((entry) => (
            <li key={entry.message}>{entry.message}</li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}
