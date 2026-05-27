/* IMPORTS */
import { Container, Title, Stack, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <Container size="xl" className="homeContainer">
      {/* hero */}
      <section className="homeHero">
        <div className="homeCluster">
          {/* left side: title */}
          <div className="homeLeft">
            <Title order={1} className="homeTitle">
    my title.
            </Title>

            {/* subtitle */}
            <Text className="homeSubtitle">
              HEADER SUBTITLE INFORMATION HERE
            </Text>
            {/* end subtitle */}
          </div>
          {/* end left side */}

          {/* right side: links */}
          <Stack gap="sm" className="homeSideLinks">
            <Link className="homeSideLink" to="/about">
              ABOUT ME
            </Link>

            <Link className="homeSideLink" to="/projects">
             MY PROJECTS 
            </Link>
          </Stack>
          {/* end right side */}
        </div>
      </section>
      {/* end hero */}
    </Container>
  );
}
