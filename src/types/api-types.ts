import { User } from "./types";

export type MessageResponse = {
  success: boolean;
  message: string;
};

export type UserResponce = {
  success: boolean;
  user: User;
};
