import { Timer } from "lucide-react";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo/>
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
