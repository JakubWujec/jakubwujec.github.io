import MePhoto from "../assets/mock.jpg"


export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-8 my-6">
      <div className="flex flex-row">
        <div className="grow-[2]">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="grow-[1]">
          <picture>
            <img src={MePhoto} alt="Me" />
          </picture>
        </div>
      </div>

    </section>
  );
}

