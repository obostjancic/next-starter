import { Card, CardBody } from "@nextui-org/react";

export default function NotFound() {
  return (
    <Card className="flex items-center justify-center">
      <CardBody>
        <h1>404</h1>
        <p>
          Page not found. Please check the URL in the address bar and try again.
        </p>
      </CardBody>
    </Card>
  );
}
