/* IMPORTS */
import { Box, Container, Text, Title } from "@mantine/core";
import ProjectCarousel from "../../components/ui/carousels/projectCarousel/ProjectCarousel";
import "./Projects.css";

/* TBD: mock projects */
const projects = [
  {
    title: "project one",
    description:
      "placeholder description for project number one. here is some extra text to test for spacing, truncating text needs and other important things that need to be altered for visual perfection.",
    image: "https://placehold.co/400x200/1d1111/ffffff?text=400x200",
    tags: ["react", "node", "css", "api"],
  },
  {
    title: "project two",
    description:
      "placeholder description for project number two. here is some extra text to test for spacing, truncating text needs and other important things that need to be altered for visual perfection.",
    image: "https://placehold.co/400x200/1d1111/ffffff?text=400x200",
    tags: ["css", "html", "javascript"],
  },
  {
    title: "project three",
    description:
      "placeholder description for project number three. here is some extra text to test for spacing, truncating text needs and other important things that need to be altered for visual perfection.",
    image: "https://placehold.co/400x200/1d1111/ffffff?text=400x200",
    tags: ["javascript", "react", "docker", "css"],
  },
  {
    title: "project four",
    description:
      "placeholder description for project number four. here is some extra text to test for spacing, truncating text needs and other important things that need to be altered for visual perfection.",
    image: "https://placehold.co/400x200/1d1111/ffffff?text=400x200",
    tags: ["css", "html"],
  },
];

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
