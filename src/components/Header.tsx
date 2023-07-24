export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold">Jakub Wujec</h1>
        <nav className="mt-4">
          <a className="mr-4" href="#about">About</a>
          <a className="mr-4" href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
