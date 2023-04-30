import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/layout/Navbar.module.scss";

const NavDropdownItem = ({
  link,
  text,
  internal = false,
}: {
  link?: string;
  text: string;
  disabled?: boolean;
  internal?: boolean;
}) => {
  const router = useRouter();
  return internal ? (
    (<Link
      href={link}
      className={
        router.pathname === link
          ? styles.PrimaryNavDropdownMenuItemActive
          : styles.PrimaryNavDropdownMenuItem
      }>

      {text}

    </Link>)
  ) : (
    <a
      className={styles.PrimaryNavDropdownMenuItem}
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};
export default NavDropdownItem;
