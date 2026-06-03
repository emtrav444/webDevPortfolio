/* IMPORTS */
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Group } from "@mantine/core";
import Logo from "../../../assets/logo/Logo";

export default function NavBar() {
  return (
    <header>
      <div className="navWrapper">
        {/* page links */}
        <Group gap="lg" className="navLeftLinks">
          <Link className="navLink" to="/projects">
            projects
          </Link>
          <Link className="navLink" to="/about">
            about
          </Link>
        </Group>
        {/* end page links */}

        {/* left deco line */}
        <span className="navLine navLineLeft" />
        {/* end left deco line */}

        {/* center logo */}
        <Link className="navLogo" to="/">
          <Logo />
        </Link>
        {/* end center logo */}

        {/* right deco line */}
        <span className="navLine navLineRight" />
        {/* end right deco line */}

        {/* social links */}
        <Group gap="lg" className="navRightLinks">
          <a
            className="navLink"
            href="https://x.com/realemtrav444"
            target="_blank"
            rel="noopener noreferrer">
            twitter/x
          </a>

          <a
            className="navLink"
            href="https://letterboxd.com/emtrav111/"
            target="_blank"
            rel="noopener noreferrer">
            github
          </a>
        </Group>
        {/* end social links */}
      </div>
    </header>
  );
}
