import { Container, Title, Button, Image } from "@mantine/core";
import Link from "next/link";

export function Heading() {
    return <>
    <Container ta="center" pt="xl" pb="sm">
        <Title order={1} size="48px" fw="700" c="white">
          Movember Extras
        </Title>
        <Title order={3} fw="500">
          A collection of extra features to help fundraise for Movember
        </Title>
        <Link href="https://movember.com/m/roberttrinch" target="_blank" rel="noopener noreferrer">
          <Button mt="sm" variant="outline" color="white" size="md" radius="xl">
            <Image src="/mo_icon_white.png" alt="Movember Logo" height={10} pr="sm" />
            Donate to Movember
          </Button>
        </Link>
      </Container>
    </>
}