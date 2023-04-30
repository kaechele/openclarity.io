import ReactPlayerLoader from "@brightcove/react-player-loader";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";
import styles from "../../../styles/components/WhatIsSection.module.scss";
import gridStyles from "../../../styles/layout/Grid.module.scss";
import Container from "../../Container";

type Props = {
  title: string;
  description: string;
  keyCapabilities: string[];
  githubLink: string;
  documentationLink: string;
  mainColor: string;
  thumbnail: string;
  diagram: string;
  diagramHeight: string;
  videoID: string;
};

const WhatIsSection = ({
  title,
  description,
  keyCapabilities,
  githubLink,
  documentationLink,
  mainColor,
  diagramHeight,
  diagram,
  videoID,
}: Props) => {
  return (
    <div className={styles.Wrapper} style={{ backgroundColor: mainColor }}>
      <div className={styles.LowerOverlay} />
      <Container>
        <div className={gridStyles.Grid} style={{ marginTop: 0 }}>
          <div className={gridStyles.Span1} />
          <div className={gridStyles.Span10}>
            <h1 className={styles.Title}>
              <strong style={{ backgroundColor: mainColor }}>
                What is {title}?
              </strong>
            </h1>
            <div className={styles.Content}>
              <p className={styles.Description}>{description}</p>
              <div className={styles.ContentVideo}>
                <ReactPlayerLoader
                  accountId="1384193102001"
                  videoId={videoID}
                  playerId="HkD0dCe7"
                />
              </div>
              <Image
                src={diagram}
                alt="diagram"
                className={styles.Diagram}
                width={"1236px"}
                height={diagramHeight}
              />
              <h2 className={styles.Header}>Key Capabilities:</h2>
              <ul className={styles.KeyCapabilities}>
                {keyCapabilities.map((capability) => {
                  return (
                    <li key={capability} className={styles.Capability}>
                      <ImCheckmark
                        color="#00bceb"
                        style={{ marginRight: 10 }}
                        size={25}
                      />
                      {capability}
                    </li>
                  );
                })}
              </ul>
              <h2 className={styles.Header}>Check out the code:</h2>
              <div className={styles.ButtonWrapper}>
                <a
                  className={styles.Button}
                  href={githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={25} style={{ marginRight: 5 }} />
                  GitHub
                </a>
                <a
                  className={styles.Button}
                  href={documentationLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsSection;
