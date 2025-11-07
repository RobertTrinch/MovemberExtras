"use client";

import { Footer } from "@/components/Footer";
import { Heading } from "@/components/Heading";
import { Container, Title, Text, Button, TextInput, NativeSelect } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mospaceId, setMospaceId] = useState("");
  const [theme, setTheme] = useState("default");

  return (
    <>
      <Heading />
      <Container pt="md">
        <Link href="/" style={{ textDecoration: 'none', color: 'dimgray' }}>
          <Button leftSection={<IconArrowBack size={16} />} variant="subtle" color="grey" mb="md">
            Go back
          </Button>
        </Link>
        <Title order={2} c="white">Movember Overlay</Title>
        <Text size="md" c="dimmed">
          An overlay for your livestreams or website which shows your current Movember progress, updating every 30 seconds.
        </Text>
      </Container>
      <Container pt="md">
        <TextInput
          variant="filled"
          radius="xl"
          label="Your Movember Number ID"
          withAsterisk
          description="This can be found in your sharing link (e.g., https://ie.movember.com/mo-space/yourID)"
          placeholder="Eg. 15270946"
          value={mospaceId}
          onChange={(event) => setMospaceId(event.currentTarget.value)}
        />
        <NativeSelect radius="xl" mt="sm" label="Your Theme" data={['default', 'blue']} value={theme} onChange={(event) => setTheme(event.currentTarget.value)} />
        <Link href={mospaceId ? `/overlay/${mospaceId}/${theme}` : '#'} style={{ textDecoration: 'none' }}>
          <Button variant="white" c="black" fullWidth radius="xl" mt="md">
            Start Overlay
          </Button>
        </Link>

      </Container>
      <Container pt="md">
        <Title order={3} c="white">How to Setup</Title>
        <Text size="md" c="dimmed" mb="lg">
          Once you have your Movember Number ID, click &quot;Start Overlay&quot; to generate your personalised overlay link. You can then copy and add this link as a browser source in your streaming software (like OBS) or embed it on your website to showcase your Movember progress in real-time.
        </Text>
      </Container>
      <Footer />
    </>
  );
}
