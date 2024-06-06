"use client";
import Link from "next/link";
import Logo from "../logo";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  const path = usePathname();
  const showExplore = path !== "/";

  return (
    <div className="container mx-auto flex max-w-6xl flex-col items-center px-4">
      <div className="flex w-full justify-between py-4">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Logo className="w-24" />
          </Link>
          {showExplore && (
            <Link href={"/"} className="hover:text-blue-500">
              palettes
            </Link>
          )}
        </div>
        <Link href={"https://x.com/amirsalimiiii"}>
          <FaXTwitter className="h-6 w-6 hover:opacity-80" />
        </Link>
      </div>
      <div className="mt-12 w-full">{children}</div>
    </div>
  );
};

export default Layout;
