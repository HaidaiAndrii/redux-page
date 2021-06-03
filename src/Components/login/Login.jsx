import React from "react";
import { useHistory } from "react-router-dom";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../hooks/hook-auth";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { loginAC } from "../../store/actions/actionlogin";
import { ButtonGroup } from "@material-ui/core";

// import Button from "@material-ui/core/Button";

export const Login = ({ signIn, signOut }) => {
  let history = useHistory() || [];
  const dispatch = useDispatch();

  let root = {
    marginBottom: 20
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.login === "user" && data.password === "user") {
      history.push("/tickets");
      dispatch(loginAC(true));
    }
  };

  return (
    <div className={style.formbox}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.title}>Sign In</h2>
        <input
          className={style.input}
          placeholder="Login"
          {...register("login", { required: true })}
        />

        <input
          className={style.input}
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
          fullWidth	= 'true'
          classe={root}
        >
          <Button type="submit">Login</Button>
          <Button onClick={signIn}>Google</Button>
        </ButtonGroup>
      </form>
    </div>
  );
};
