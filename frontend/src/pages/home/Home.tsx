/* IMPORTS */
import { Container, Grid, Title, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container size="lg">
      {/* hero */}
      <Grid align="center" my="xl">
        {/* left side: title */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Title order={1} className="homeTitle">
            title
          </Title>
          {/* end left side */}
        </Grid.Col>
        {/* right side: sides */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Stack align="flex-start" gap="md">
            <Link className="homeLink" to="/about">
              about
            </Link>
            <Link className="homeLink" to="/projects">
              projects
            </Link>
          </Stack>
          {/* end right side */}
        </Grid.Col>
      </Grid>
      {/* subtitle */}
      <Text size="sm" my="xl" className="homeSubtitle">
        subtitle text here.
      </Text>
      {/* end subtitle */}
      {/* end hero */}
    </Container>
  );
}
