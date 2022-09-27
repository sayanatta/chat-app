// type for user login form payload
export type UserLoginPayload = {
  email: string;
  password: string;
};
// type for user data recieved
export type UserDataRecieved = {
  success: string;
  msg: string;
  data: {
    _id: string;
    name: string;
    email: string;
  };
  token: string;
};

// type for user state
export type UsersState = {
  user: null | UserDataRecieved;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | undefined;
};

// type for authentication error
export type MyKnownError = {
  msg: string;
};
