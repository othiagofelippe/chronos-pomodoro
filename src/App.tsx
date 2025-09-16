import { Timer } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      <Container>
        <Heading>
          Olá mundo
          <Timer />
        </Heading>
      </Container>

      <Container>
        <Heading>
          Olá mundo
          <Timer />
        </Heading>
      </Container>
    </>
  );
}
