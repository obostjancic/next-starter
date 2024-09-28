import { Button, Card, CardBody } from "@nextui-org/react";

export default async function Home() {
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
