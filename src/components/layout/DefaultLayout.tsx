import Sidebar from '@/components/sidebar/index';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { UserProps } from '@/types/user';

const DefaultLayout = ({ children, user }: React.PropsWithChildren<UserProps>) => {
  return (
    <div className="flex flex-col h-screen">
      <Header user={user} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
