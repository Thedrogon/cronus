import { PropsWithChildren } from "react";
import CronusHeaderNav from "../components/Header";
import { Cronusfooter } from "../components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CronusHeaderNav />
      <main className="grow">{children}</main>
      <Cronusfooter/>
    </div>
  )
};

export default Layout;
