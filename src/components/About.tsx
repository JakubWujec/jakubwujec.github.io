import MePhoto from "../assets/mock.jpg"


export default function About() {
  return (
    <section id="about" className="w-full px-8 py-20 min-h-[520px]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-row">
          <div className="grow-[2]">
            <h2 className="text-6xl font-bold mb-4">Jakub <br></br> Wujec </h2>
            <p className="text-xl text-gray-700 max-w-[75%]">
              Kuba
            </p>
            <br></br>
            <p className="text-xl text-gray-700 max-w-[75%]">Jestem programistą webowym. Bla bla. Lorem ipsuma ha</p>
          </div>
          <div className="min-w-[200px] max-w-[400px] grow-[1]">
            <picture>
              <img src={MePhoto} alt="Me" />
            </picture>
          </div>
        </div>
      </div>


    </section>
  );
}

