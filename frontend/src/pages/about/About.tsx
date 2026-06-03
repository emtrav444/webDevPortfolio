/* IMPORTS */
import { useState, useEffect } from "react";
import { Container, Grid, Title, Text, Stack, Button } from "@mantine/core";
import ModalOverlay from "../../components/ui/modal/ModalOverlay";
import ContactForm from "../../components/ui/contactForm/ContactForm";
import "./About.css";

export default function About() {
  /* modal state handling */
  const [contactOpened, setContactOpened] = useState(false);

  /* scroll lock functionality */
  useEffect(() => {
    if (contactOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [contactOpened]);

  return (
    /* primary container */
    <>
      <Container size="xl" className="aboutPage">
        {/* grid container */}

        <Grid className="aboutGrid">
          {/* LEFT side grid content */}
          <Grid.Col
            span={{
              base: 12,
              md: 7,
            }}
            className="aboutLeft">
            <Stack gap="xl">
              {/* title */}
              <Title order={1} className="aboutTitle">
                about.
              </Title>
              {/* end title */}
              {/* about intro block */}
              <Text className="aboutIntro">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </Text>
              {/* end about intro block */}
            </Stack>
          </Grid.Col>
          {/* end LEFT side grid content */}
          {/* RIGHT side grid content */}
          <Grid.Col
            span={{
              base: 12,
              md: 5,
            }}
            className="aboutRight">
            <Stack className="aboutRightStack">
              {/* about bio block */}
              <Text className="aboutBio">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Donec quam felis, ultricies nec,
                pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                enim. Donec vitae sapien ut libero venenatis faucibus. Nullam
                quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
              </Text>
              {/* end about bio block */}
              {/* contact btn section */}
              <Button
                variant="subtle"
                className="aboutContactBtn"
                type="button"
                onClick={() => setContactOpened(true)}>
                contact me.
              </Button>
              {/* end contact btn section */}
            </Stack>
          </Grid.Col>
          {/* end RIGHT side grid content */}
        </Grid>
        {/* end grid container */}
      </Container>

      <ModalOverlay
        opened={contactOpened}
        onClose={() => setContactOpened(false)}>
        <ContactForm onClose={() => setContactOpened(false)} />
      </ModalOverlay>
    </>
    /* end container */
  );
}
