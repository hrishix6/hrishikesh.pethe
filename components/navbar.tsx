import ThemeSwitcher from './buttons/theme.switcher';

export default function Navbar() {
  return (
    <nav className="border-gray-200 px-4 sm:px-10 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto lg:w-2/4 sm:w-auto">
        <div className="flex items-center">
          <span className="text-semibold text-xl">Hrishikesh Pethe</span>
        </div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
