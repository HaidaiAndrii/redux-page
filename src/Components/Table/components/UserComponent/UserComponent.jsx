import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import styles from "./styles.module.css";
// import { sendUser } from "../../API/fetchs";
// import { getUser } from "../../API/fetchs";
import { useDispatch, useSelector } from "react-redux";
import { usersAC } from "../../../../store/actions/usersAC";


export function UserComponent({}) {
  let location = useLocation();
  let history = useHistory() || [];
  const isLogined = JSON.parse(localStorage.getItem("isAuth")) || false;
  const dispatch = useDispatch();
  const id = location.pathname.slice(7);
  let [userInTable ,setUser] = useState({})

   let user = useSelector((state) => state.users).find((user) => parseInt(user.id) === parseInt(id));
  console.log('rener', userInTable)
  useEffect(() => {
    if(!user) {
      dispatch(usersAC());
    } else {
      setUser(user)
    }
  }, [user]);

  function saveChanges() {
    // sendUser(user);
    history.push("/table");
  }

  function changeUserInfo(value, field) {
    setUser({...userInTable, [field]: value,})
    let us = {
      ...user,
      [field]: value,
    };

    console.log(us);
  }

  const FIELDS = ["id", "name", "username", "email", "website"];

  return (
    <div className={styles.table}>
      <h2>User</h2>
      {user ? (
        <div className={styles.inputsSection}>
          {FIELDS.map((field) => {
            return (
              <div className={styles.tableSection}>
                <label className={styles.span} for={field}>
                  {field}
                </label>
                <input
                  className={styles.input}
                  id={field}
                  type="text"
                  value={userInTable[field]}
                  onChange={(e) => changeUserInfo(e.target.value, e.target.id)}
                  readOnly={!isLogined}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Hyi</div>
      )}
      <button className={styles.button} onClick={saveChanges}>
        Save changes
      </button>
    </div>
  );
}
