import { Button, Card, Container, SimpleGrid, Group, Image, Title, Text } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
      <Container ta="center" pt="md" m={0} fluid>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }}>
          <Card shadow="md" padding="md" radius="lg" withBorder>
            <Group justify="space-between" mt="xs">
              <Text fw={500}>Movember Overlay</Text>
            </Group>
            <Text size="sm" c="dimmed" ta="start">
              An overlay for your livestreams or website which shows your current Movember progress, updating every 30 seconds.
            </Text>
            <Button color="white" variant="outline" fullWidth mt="md" radius="md">
              Setup Movember Overlay
            </Button>
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
  );
}
