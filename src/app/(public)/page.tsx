import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Button, Card, Container, SimpleGrid, Group, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Heading />
      <Container ta="center" pt="md" px="lg" fluid>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          <Card shadow="md" padding="md" radius="lg" withBorder>
            <Group justify="space-between" mt="xs">
              <Text fw={500}>Movember Overlay</Text>
            </Group>
            <Text size="sm" c="dimmed" ta="start">
              An overlay for your livestreams or website which shows your current Movember progress, updating every 30 seconds.
            </Text>
            <Link href="/overlay" style={{ textDecoration: 'none' }}>
              <Button color="white" variant="outline" fullWidth mt="md" radius="md">
                Setup Movember Overlay
              </Button>
            </Link>
          </Card>
          <Card shadow="md" padding="md" radius="lg" withBorder>
            <Group justify="space-between" mt="xs">
              <Text fw={500}>Coming soon..</Text>
            </Group>
          </Card>
          <Card shadow="md" padding="md" radius="lg" withBorder>
            <Group justify="space-between" mt="xs">
              <Text fw={500}>Coming soon..</Text>
            </Group>
          </Card>
        </SimpleGrid>
      </Container>
      
      <Footer />
    </>
  );
}