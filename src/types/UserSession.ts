export type UserSession = {
  accessToken: string;
  provider: {
    name: string;
    id: string;
  };
  user: {
    name: string;
    email: string;
    image: string;
  };
};
