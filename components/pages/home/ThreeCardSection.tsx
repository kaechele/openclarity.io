import gridStyles from "../../../styles/layout/Grid.module.scss";
import { ImgPaths } from "../../../types/enums";
import Container from "../../Container";
import Card from "./Card";
const cardData = [
  {
    logo: ImgPaths.VMClarityLogo,
    sublogo: ImgPaths.VMClaritySubLogo,
    description:
      "VMClarity is an open source tool for agentless detection and management of Virtual Machine Software Bill Of Materials (SBOM) and security threats such as vulnerabilities, exploits, malware, rootkits, misconfigurations and leaked secrets.",
    link: "https://github.com/openclarity/vmclarity/blob/main/README.md",
  },
  {
    logo: ImgPaths.KubeClarityLogo,
    sublogo: ImgPaths.KubeClaritySubLogo,
    description:
      "KubeClarity is a tool for detection and management of software bills of materials (SBOMs) and vulnerabilities in container images and filesystems. It scans both runtime Kubernetes clusters and CI/CD pipelines for enhanced software supply-chain security.",
    link: "https://github.com/openclarity/kubeclarity/blob/main/README.md",
  },
  {
    logo: ImgPaths.APIClarityLogo,
    sublogo: ImgPaths.APIClaritySubLogo,
    description:
      "APIClarity, an open source cloud native visibility tool for APIs, utilizes a service-mesh framework to capture and analyze API traffic, and identify potential risks.",
    link: "https://github.com/openclarity/apiclarity.io/blob/main/README.md",
  },
];
const ThreeCardSection = () => {
  return (
    <Container>
      <div className={gridStyles.Grid}>
        {cardData.map(({ logo, sublogo, description, link }, index) => {
          return (
            <Card
              key={index}
              logo={logo}
              subLogo={sublogo}
              description={description}
              link={link}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ThreeCardSection;
