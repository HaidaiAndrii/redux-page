import styles from "./styles.module.css";
import { SORTBUTTONS } from "../../../../constants/aviasales";
import { SortButton } from "../sortButton/SortButton";

export function SortTickets({ sortBy }) {
  return (
    <div className={styles.sortButtons}>
      {SORTBUTTONS.map((button, id) => (
        <SortButton
          sortBy={sortBy}
          name={button.name}
          title={button.title}
          key={id}
        />
      ))}
    </div>
  );
}
