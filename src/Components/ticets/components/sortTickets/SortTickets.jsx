// import styles from "./styles.module.css";
import { SORTBUTTONS } from '../../../../constants/aviasales';
import { SortButton } from '../sortButton/SortButton';

export function SortTickets({ sortBy }) {

  return (
    <div className='' >
      {SORTBUTTONS.map(button => 
        <SortButton sortBy={sortBy} name={button.name} title={button.title} />
      )}
    </div>
  );
}
