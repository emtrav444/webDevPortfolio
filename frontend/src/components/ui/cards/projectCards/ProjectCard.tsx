/* IMPORTS */
import { Badge, Box, Card, Group, Image, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

/* define project card props */
type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  /* tags logic to display max of 3 tags */
  const MAX_TAGS = 3;
  const visibleTags = tags.slice(0, MAX_TAGS);
  const remainingTags = tags.length - MAX_TAGS;

  return (
    /* begin card */
    <Link to={`/projects/${id}`} className="projectCardLink">
      <Card className="projectCard" padding={0} radius={0}>
        {/* begin image section */}
        <Image src={image} alt={title} className="projectCardImage" />
        {/* end image section */}

        {/* begin title section */}
        <Box className="projectCardTitleSection">
          <Title order={2} className="projectCardTitle">
            {title}
          </Title>
        </Box>
        {/* end title section */}

        {/* begin description section */}
        <Box className="projectCardDescSection">
          <Text className="projectCardDesc">{description}</Text>
        </Box>
        {/* end description section */}

        {/* begin tags section */}
        <Group className="projectCardTagsSection" justify="center" gap="md">
          {visibleTags.map((tag, index) => (
            <Badge key={index} className="projectCardTag" radius={0}>
              {tag}
            </Badge>
          ))}
          {remainingTags > 0 && (
            <Badge className="projectCardTag" radius={0}>
              +{remainingTags}
            </Badge>
          )}
        </Group>
        {/* end tags section */}
      </Card>
    </Link>
    /* end card */
  );
}
