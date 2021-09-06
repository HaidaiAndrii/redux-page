import styles from "./styles.module.css";
import React from "react";
import { DialogTitle } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";

export const UserWelcome = ({ profile }) => {
  return (
    <div className={styles.block}>
      {profile && (
        <>
          <Typography
            align="center"
            children={<span> Welcome, {profile.getName()}</span>}
            variant="h2"
            classes=""
            color="textPrimary"
          />
          <Container>
            <img
              src={profile.getImageUrl()}
              className={styles.img}
              alt="profle"
            />
          </Container>
        </>
      )}
      <DialogTitle />
    </div>
  );
};
