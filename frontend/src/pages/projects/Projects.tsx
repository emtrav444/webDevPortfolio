/* IMPORTS */
import { Box, Container, Text, Title } from "@mantine/core";
import ProjectCarousel from "../../components/ui/carousels/projectCarousel/ProjectCarousel";
import "./Projects.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    /* begin project page wrap */
    <Box className="projectsPage">
      {/* begin header section */}
      <Container size="lg" className="projectsHeader">
        <Title order={1} className="projectsTitle">
          projects.
        </Title>

        <Text className="projectsSubtitle">
          selected web development projects.
        </Text>
      </Container>
      {/* end header section */}

      {/* begin project carousel section */}
      <Container size="xl" className="projectsCarouselSection">
        <ProjectCarousel projects={projects} />
      </Container>
      {/* end project carousel section */}
    </Box>
    /* end project page wrap */
  );
}
