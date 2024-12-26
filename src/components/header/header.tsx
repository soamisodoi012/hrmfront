import { UserProps } from '@/types/user';

const Header = ({ user }: UserProps) => {
  return (
    <header className="flex items-center justify-end p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-sm">{user.role}</span>
            <span className="text-sm">{user.username}</span>
          </>
        ) : (
          <span className="text-sm italic">Guest</span>
        )}
        <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
