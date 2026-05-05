/* IMPORTS */
import {
  Grid,
  Stack,
  Title,
  Text,
  TextInput,
  Textarea,
  Group,
  Button,
} from "@mantine/core";
import "./ContactForm.css";

type ContactFormProps = {
  onClose: () => void;
};

export default function ContactForm({ onClose }: ContactFormProps) {
  /* begin contact form */
  return (
    <div className="contactFormContainer">
      <Grid className="contactGrid">
        {/* begin LEFT side content */}
        <Grid.Col span={{ base: 12, md: 6 }} className="contactLeft">
          <Stack>
            {/* begin title */}
            <Title order={1} className="contactTitle">
              contact me.
            </Title>
            {/* end title */}

            {/* begin subtitle */}
            <Text className="contactSubtitle">
              questions? comments? tell me about it!
            </Text>
            {/* end subtitle */}
          </Stack>
        </Grid.Col>
        {/* end LEFT side content */}

        {/* begin RIGHT side content */}
        <Grid.Col span={{ base: 12, md: 6 }} className="contactRight">
          <Stack className="contactFormStack">
            {/* begin name & email inputs */}
            <Grid className="contactInputGrid">
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput label="name" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput label="email" type="email" />
              </Grid.Col>
            </Grid>
            {/* end name & email inputs */}

            {/* begin message input */}
            <Textarea label="message" minRows={7} />
            {/* end message input */}

            {/* begin buttons section */}
            <Group justify="center">
              <Button type="submit">submit</Button>
              <Button variant="default" type="button" onClick={onClose}>
                cancel
              </Button>
            </Group>
            {/* end buttons section */}
          </Stack>
        </Grid.Col>
        {/* end RIGHT side content */}
      </Grid>
    </div>
  );
  /* end contact form */
}
