/* IMPORTS */
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../data/projects";
import "./ProjectView.css";

export default function ProjectView() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  /* handles project not found */
  if (!project) {
    return (
      /* begin not found container */
      <Container size="lg" className="projectNotFound">
        <Title order={1}>project not found.</Title>
        <Button component={Link} to="/projects">
          back to projects
        </Button>
      </Container>
      /* end not found container */
    );
  }

  return (
    /* begin project view page */
    <Box className="projectViewPage">
      {/* begin project display container */}
      <Container size="xl" className="projectViewDisplay">
        {/* begin image display */}
        <Box className="projectViewImgWrap">
          <Image
            src={project.image}
            alt={project.title}
            className="projectViewImg"
          />
        </Box>
        {/* end image display */}

        <Stack className="projectViewContent" gap="lg">
          {/* begin project description */}
          <Text className="projectViewDesc">{project.description}</Text>
          {/* end project description */}

          {/* begin project buttons section */}
          <Group className="projectViewBtns" gap="md">
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                component="a"
                href={project.liveUrl}
                className="projectViewBtn">
                live preview.
              </Button>
            )}
            <Button
              component="a"
              href={project.githubUrl}
              className="projectViewBtn">
              github repo.
            </Button>
          </Group>
          {/* end project buttons section */}
        </Stack>
      </Container>
      {/* end project display container */}

      {/* begin project title section */}
      <Container size="lg" className="projectViewTitleSection">
        {/* begin title */}
        <Title order={1} className="projectViewTitle">
          {project.title}
        </Title>
        {/* end title */}

        {/* begin back btn */}
        <Button component={Link} to="/projects" className="projectViewBtn">
          back to projects.
        </Button>
        {/* end back btn */}
      </Container>
      {/* end project title section */}
    </Box>
    /* end project view page */
  );
}
