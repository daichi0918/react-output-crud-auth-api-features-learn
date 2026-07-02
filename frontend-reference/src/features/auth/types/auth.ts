import { UserType } from "../../users/types";

export type AuthType = {
  token: string;
  user: UserType;
};