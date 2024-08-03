import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identity />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton
          icon={faFacebookF}
          href="https://www.facebook.com/fauzan.ridho.1840"
        />
        <SocialButton
          icon={faInstagram}
          href="https://instagram.com/fauzanridho._"
        />
        <SocialButton
          icon={faTwitter}
          href="https://x.com/fauzanridh?t=OqL7pi3jYkNXXzDwSWtItA&s=09"
        />
      </div>
      <div className="social-buttons right">
        <SocialButton
          icon={faLinkedinIn}
          href="https://www.linkedin.com/in/fauzanridho/"
        />
        <SocialButton icon={faGithub} href={"https://github.com/fauzanridho"} />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Gutenk Cat</div>
      </div>
      <div className="title">Meow Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className="desc">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, placeat
        beatae? Tempore porro reprehenderit illo iste nemo molestias, commodi
        corporis exercitationem, magnam impedit quaerat labore cupiditate. Ex
        voluptates ab dolor.
      </p>
    </div>
  );
}
function Badge({ text }) {
  return (
    <button>
      <div className="heiht">{text}</div>
    </button>
  );
}
function Highlight() {
  return (
    <div className="buttons">
      <Badge
        text="⚽ Football
      "
      />
      <Badge
        text="🎶 Music
      "
      />
      <Badge
        text="🏔️ Mountaineer
      "
      />
    </div>
  );
}

function SocialButton({ icon, href }) {
  return (
    <button onClick={() => window.open(href)} className="white">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
}
