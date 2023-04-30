import Image from "next/legacy/image";
import Link from "next/link";
import useWindowSize from "../../../hooks/useWindowSize";
import styles from "../../../styles/components/Card.module.scss";
import gridStyles from "../../../styles/layout/Grid.module.scss";

type Props = {
  logo: string;
  subLogo: string;
  description: string;
  link: string;
};
const Card = ({ logo, subLogo, description, link }: Props) => {
  const { width } = useWindowSize();
  return (
    <div
      className={
        width > 1200
          ? gridStyles.Span4
          : width > 820
          ? gridStyles.Span6
          : gridStyles.Span12
      }
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className={styles.Card}>
        <Image src={logo} alt="logo" width={188} height={150} />
        <Image
          src={subLogo}
          alt="sublogo"
          className={styles.Sublogo}
          width={270}
          height={30}
        />
        <div className={styles.Details}>
          <p className={styles.Description}>{description}</p>
          <Link href={link} target="_blank" className={styles.Link}>
            Learn more{">"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
