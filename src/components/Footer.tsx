import { Container, Text } from "@mantine/core";
import Link from "next/link";

export function Footer() {
    return <>
    <Container ta="center">
        <Text size="sm" c="dimmed" mt="xl" mb="md">
          <Link href="https://movember.com/m/roberttrinch" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'dimgray', paddingRight: '30px' }}>
            Donate to Movember
          </Link>
          <Link href="https://github.com/RobertTrinch/MovemberExtras" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'dimgray' }}>
            GitHub Page
          </Link>
        </Text>
      </Container>
    </>
}