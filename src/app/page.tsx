import { Button, Card, CardBody } from "@nextui-org/react";

import { sleep } from "@/utils/sleep";

export default async function Home() {
  await sleep(0);
  return (
    <Card>
      <CardBody>
        <h1>Hello, NextUI!</h1>
        <p>
          This is a simple example of a NextUI app. You can start editing this
          page by modifying the code in <code>src/pages/index.tsx</code>.
        </p>
        <Button size="sm">Get started</Button>
      </CardBody>
    </Card>
  );
}
