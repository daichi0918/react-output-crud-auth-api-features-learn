import { type FC } from "react";
import { NavLink } from "react-router";
import { Controller } from "react-hook-form";

import { NAVIGATION_LIST } from "../../../../shared/constants/navigation";

import { InputFormSection, CommonButton } from "../../../../shared/components/ui";

import { useSignUpTemplate } from "./useSignUpTemplate";

import styles from "./style.module.css";

export const SignUpTemplate: FC = () => {
  const { control, errors, handleRegisterSubmit } = useSignUpTemplate();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SignUp</h1>
      <form className={styles.form} onSubmit={handleRegisterSubmit}>
        <div className={styles.area}>
          <Controller
            name="name"
            render={({ field }) => (
              <InputFormSection
                type="text"
                placeholder="user name"
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>

        <div className={styles.area}>
          <Controller
            name="email"
            render={({ field }) => (
              <InputFormSection
                type="email"
                placeholder="email"
                errorMessage={errors.email?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className={styles.area}>
          <Controller
            name="password"
            render={({ field }) => (
              <InputFormSection
                type="password"
                placeholder="password"
                errorMessage={errors.password?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className={styles.area}>
          <Controller
            name="password_confirmation"
            render={({ field }) => (
              <InputFormSection
                type="password"
                placeholder="confirm password"
                errorMessage={errors.password_confirmation?.message}
                {...field}
              />
            )}
            control={control}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit">{"Sign Up"}</CommonButton>
        </div>
        <div className={styles.link}>
          <NavLink to={NAVIGATION_LIST.LOGIN}>&lt;&lt; to login page</NavLink>
        </div>
      </form>
    </div>
  );
};
