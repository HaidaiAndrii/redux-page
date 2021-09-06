import React, { useState, useEffect } from "react";
import { TableRow } from "./components/TableRow/TableRow";
import Header from "./components/headers";
import { useDispatch, useSelector } from "react-redux";
import { usersAC } from "../../store/actions/usersAC";

import styles from "./styles.module.css";

export function UsersTable({}) {
  let [sorted, setSorted] = useState(false);
  let [sortedField, setSortedField] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersAC());
  }, []);

  function handleSort(field, arr) {
    if (Number.isInteger(arr[0][field])) {
      users.sort((a, b) => {
        if (sorted) {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      });
    } else {
      arr.sort((a, b) => {
        let valueA = a[field.trim()].toLowerCase();
        let valueB = b[field.trim()].toLowerCase();

        if (sorted) {
          return valueA > valueB ? 1 : -1;
        } else {
          return valueA < valueB ? 1 : -1;
        }
      });
    }

    setSortedField(field);
    setSorted(!sorted);
  }

  const arr = [
    { id: 0, title: "id" },
    { id: 1, title: "name" },
    { id: 2, title: "username" },
    { id: 3, title: "email" },
  ];

  return (
    <div className={styles.tableWrapper}>
      <h2 className={styles.title}>Users List</h2>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr className={styles.tableTr}>
            <Header
              headings={arr}
              users={users}
              handleSort={handleSort}
              sorted={sorted}
              sortedField={sortedField}
            />
          </tr>
        </thead>
        <tbody>
          {users.length &&
            users.map((user) => {
              return <TableRow user={user} key={user.id} />;
            })}
        </tbody>
      </table>
    </div>
  );
}
