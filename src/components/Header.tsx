export default function Header() {
  return (
    <header className="bg-[#F2EFED] w-full px-8 py-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center font-bold text-lg">
        <div>
          Jakub Wujec
        </div>
        <div className="md:flex space-x-12 items-center">
          <a className="mr-4 hover:underline" href="#about">About</a>
          <a className="mr-4 hover:underline" href="#experience">Experience</a>
          <a className="hover:underline" href="#contact">Contact</a>
        </div>
      </div>
    </header>
  );
}
