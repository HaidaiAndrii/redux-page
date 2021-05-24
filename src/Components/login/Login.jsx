import React from "react";
import { useHistory } from "react-router-dom";
import style from "./style.module.css";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../hooks/hook-auth";
import { Button } from '@material-ui/core';


export const Login = ({ signIn, signOut }) => {
  let history = useHistory() || [];
  // const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  //   // let status = auth.signin(data.login, data.password);
  //   if (status) {
      history.push("/tickets");
  //   }
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

        <Button type="submit" variant="contained" color="primary" className={style.button}>asdas</Button>
     
        {/* <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div> */}

          <Button onClick={signIn}>Log in</Button>
          <Button onClick={signOut}>Log out</Button>

      </form>
    </div>
  );
};
