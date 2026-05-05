/* IMPORTS */
import { useState } from "react";
import { Box, UnstyledButton, Group, SimpleGrid } from "@mantine/core";
import ProjectCard from "../../cards/projectCards/ProjectCard";
import "./ProjectCarousel.css";

/* define project type properties */
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

/* define project carousel properties */
type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);

  /* carousel logic */
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const startIndex = currentPage * projectsPerPage;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  return (
    /* begin carousel holder */
    <Box className="projectCarousel">
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {visibleProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
      {/* begin carousel page tracker */}
      <Group className="projectCarouselDots" justify="center" gap="lg">
        {Array.from({ length: totalPages }).map((_, index) => (
          <UnstyledButton
            key={index}
            className={`projectCarouselDot ${
              currentPage === index ? "activeProjectCarouselDot" : ""
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`go to project page ${index + 1}`}
          />
        ))}
      </Group>
      {/* end carousel page tracker */}
    </Box>
    /* end carousel holder */
  );
}
