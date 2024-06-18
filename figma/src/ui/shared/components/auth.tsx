import useAuth from "../hooks/auth";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return (
    <div>
      {user.isLoading && <div>Loading...</div>}
      {user.isSuccess && children}
    </div>
  );
};

export default Auth;
