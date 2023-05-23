import { Outlet } from "react-router";
import Header from "./Header";

const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />

      <main className='h-screen box-border mx-4'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
