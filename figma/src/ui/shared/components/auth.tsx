import useAuth from "../hooks/auth";
import Spinner from "./spinner";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  return (
    <div>
      {user.isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
      {user.isSuccess && children}
    </div>
  );
};

export default Auth;
