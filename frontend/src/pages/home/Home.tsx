/* IMPORTS */
import { useEffect, useState } from "react";
import { Container, Title, Stack, Text, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./Home.css";
import { ImArrowDownRight } from "react-icons/im";
import waveSvg from "../../assets/images/home/home-wave.svg";
import homeFlower from "../../assets/images/home/home-flower.svg";
import homeXLines from "../../assets/images/home/home-x-lines.svg";
import homePlusCluster from "../../assets/images/home/home-plus-cluster.svg";
import homeBigSquiggle from "../../assets/images/home/home-squiggle.svg";
import homeTitleBlob from "../../assets/images/home/home-title-blob.svg";
import homeStarShape from "../../assets/images/home/home-star-shape.svg";
import homeStarsCluster from "../../assets/images/home/home-stars-cluster.svg";
import homeBtnBlob from "../../assets/images/home/home-btn-blob.svg";
import homeContactStar from "../../assets/images/home/home-contact-star.svg";
import homeContactFlower from "../../assets/images/home/home-contact-flower.svg";
import ModalOverlay from "../../components/ui/modal/ModalOverlay";
import ContactForm from "../../components/ui/contactForm/ContactForm";

export default function Home() {
  // name typing state inspired by https://codepen.io/worksbyvan/pen/dRBGKK
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    const name = "emily";
    let index = 0;

    const startDelay = setTimeout(() => {
      const typingTimer = setInterval(() => {
        setTypedName(name.slice(0, index + 1));
        index++;

        if (index === name.length) {
          clearInterval(typingTimer);
        }
      }, 250);
    }, 800);

    return () => {
      clearTimeout(startDelay);
    };
  }, []);

  /* modal state handling */
  const [contactOpened, setContactOpened] = useState(false);

  /* contact section animation */
  const [contactVisible, setContactVisible] = useState(false);

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

  /* contact section scroll animation */
  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 40;

      if (nearBottom) {
        setContactVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="homePage">
      <Container size="xl" className="homeContainer">
        {/* hero */}
        <section className="homeHero">
          {/* begin decorative svgs */}
          <img
            src={homeFlower}
            alt=""
            className="homeFlower"
            aria-hidden="true"
          />

          <img
            src={homeXLines}
            alt=""
            className="homeXLines"
            aria-hidden="true"
          />

          <img
            src={homeBigSquiggle}
            alt=""
            className="homeBigSquiggle"
            aria-hidden="true"
          />

          <img
            src={homeStarShape}
            alt=""
            className="homeStarShape"
            aria-hidden="true"
          />
          {/* end decorative svgs */}

          {/* floating skills */}
          <div className="homeSkills" aria-hidden="true">
            <span className="homeSkill skillFrontend">frontend</span>
            <span className="homeSkill skillPython">python</span>
            <span className="homeSkill skillUiux">ui/ux</span>
            <span className="homeSkill skillMysql">mysql</span>
            <span className="homeSkill skillHtml">html</span>
            <span className="homeSkill skillCss">css</span>
            <span className="homeSkill skillReact">react</span>
            <span className="homeSkill skillJavascript">javascript</span>
            <span className="homeSkill skillFullstack">full stack</span>
            <span className="homeSkill skillBackend">backend</span>
          </div>
          {/* end floating skills */}

          {/* squiggle decoration */}
          <svg className="homeSquiggle" viewBox="0 0 320 75" aria-hidden="true">
            <path
              className="homeSquiggleLine homeSquiggleLineOne"
              d="M4 26
      Q20 6 36 26
      T68 26
      T100 26
      T132 26
      T164 26
      T196 26
      T228 26
      T260 26
      T292 26
      T316 26"
            />

            <path
              className="homeSquiggleLine homeSquiggleLineTwo"
              d="M44 54
    Q60 34 76 54
    T108 54
    T140 54
    T172 54
    T204 54
    T236 54
    T268 54
    T300 54"
            />
          </svg>
          {/* end squiggle decoration */}

          <div className="homeCluster">
            {/* left side: title */}
            <div className="homeLeft">
              <div className="homeTitleWrap">
                {/* title blob */}
                <img
                  src={homeTitleBlob}
                  alt=""
                  className="homeTitleBlob"
                  aria-hidden="true"
                />
                {/* end title blob */}

                {/* title cluster */}
                <img
                  src={homePlusCluster}
                  alt=""
                  className="homePlusCluster"
                  aria-hidden="true"
                />
                {/* end title cluster */}

                {/* subtitle */}
                <Text className="homeSubtitle">
                  <b>eta</b> 2026
                </Text>
                {/* end subtitle */}

                <Title order={1} className="homeTitle">
                  <span>web</span>
                  <span>design</span>
                </Title>

                <div className="homeTitleSecondLine">
                  <span className="homeBy">by</span>
                  <span className="homeEmily">
                    <span className="homeEmilyTyped">{typedName}</span>
                  </span>
                </div>
              </div>
            </div>
            {/* end left side */}

            {/* right side: links */}
            <Stack gap="sm" className="homeSideLinks">
              <Link className="homeSideLink" to="/about">
                <ImArrowDownRight className="homeLinkIcon" />
                ABOUT ME
              </Link>

              <Link className="homeSideLink" to="/projects">
                <ImArrowDownRight className="homeLinkIcon" />
                MY PROJECTS
              </Link>
            </Stack>
            {/* end right side */}
          </div>
        </section>
        {/* end hero */}
      </Container>

      {/* wave section */}
      <section className="homeWaveSection">
        <img className="homeWave" src={waveSvg} alt="" aria-hidden="true" />

        {/* home contact section */}
        <section className="homeContactSection">
          {/* home contact section decorations */}
          <img
            src={homeStarsCluster}
            alt=""
            className={`homeContactStarsCluster ${
              contactVisible ? "isVisible" : ""
            }`}
            aria-hidden="true"
          />

          <img
            src={homeContactStar}
            alt=""
            className={`homeContactStar ${contactVisible ? "isVisible" : ""}`}
            aria-hidden="true"
          />

          <svg
            className={`homeContactSquiggleOne ${
              contactVisible ? "isVisible" : ""
            }`}
            viewBox="0 0 900 900"
            aria-hidden="true">
            <path
              pathLength="1"
              d="M103 548 L103 365 L275 537 L275 365 L447 537 L447 365 L619 537 L619 365 L800 546"
            />
          </svg>

          <svg
            className={`homeContactSquiggleTwo ${
              contactVisible ? "isVisible" : ""
            }`}
            viewBox="0 0 900 900"
            aria-hidden="true">
            <path
              pathLength="1"
              d="M110 530 C160 455, 225 455, 275 530 S390 605, 440 530 S555 455, 605 530 S720 605, 790 515"
            />
          </svg>

          <img
            src={homeContactFlower}
            alt=""
            className={`homeContactFlower ${contactVisible ? "isVisible" : ""}`}
            aria-hidden="true"
          />
          {/* end home contact section decorations */}

          <div
            className={`homeContactPrompt ${
              contactVisible ? "isVisible" : ""
            }`}>
            <span>&hellip;questions?</span>
            <span>&hellip;comments?</span>
          </div>

          <div
            className={`homeContactButtonWrap ${
              contactVisible ? "isVisible" : ""
            }`}>
            <img
              src={homeBtnBlob}
              alt=""
              className={`homeContactBtnBlob ${
                contactVisible ? "isVisible" : ""
              }`}
              aria-hidden="true"
            />
            <Button
              variant="subtle"
              className="homeContactBtn"
              type="button"
              onClick={() => setContactOpened(true)}>
              contact me<span className="btnAccent">!</span>
            </Button>
          </div>
        </section>
        {/* end home contact section */}
      </section>
      {/* end wave section */}

      {/* wave floor */}
      <div className="homeWaveFloor" aria-hidden="true" />
      {/* end wave floor */}

      <ModalOverlay
        opened={contactOpened}
        onClose={() => setContactOpened(false)}>
        <ContactForm onClose={() => setContactOpened(false)} />
      </ModalOverlay>
    </div>
  );
}
