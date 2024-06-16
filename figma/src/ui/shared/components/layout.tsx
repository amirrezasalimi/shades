import { Toaster } from "react-hot-toast";
import "@fontsource/inter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen">
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
      <Toaster />
    </div>
  );
};

export default Layout;
