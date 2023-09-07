import { ReactNode } from "react"

const PROJECTS_AT_WORK: {
  header: string;
  text: string;
}[] = [
    {
      header: 'Aplikacja Usprawniająca Produkcję Ram Okiennych',
      text: "W ramach tego projektu, stworzyłem aplikację, która skoncentrowana jest na automatyzacji procesu produkcji okien, począwszy od zamówienia klienta aż do produkcji na maszynie CNC. Moje rozwiązanie przyspieszyło proces produkcyjny, zminimalizowało ryzyko błędów oraz znacząco obniżyło koszty operacyjne."
    },
    {
      header: "Optymalizacja Zapytań SQL",
      text: " Przeprowadziłem optymalizację zapytań SQL, co zaowocowało znacznym przyspieszeniem dostępu do danych w naszych systemach. To usprawnienie wpłynęło na efektywność naszych aplikacji i umożliwiło szybsze podejmowanie decyzji."
    },
    {
      header: "Projektowanie i Implementacja Wyglądu Strony Sklepu",
      text: " Odpowiadałem za projektowanie i implementację interfejsu użytkownika strony sklepu internetowego, co znacznie poprawiło doświadczenie klienta i przyczyniło się do zwiększenia konwersji."
    },
    {
      header: "Usprawnienia Importu poprzez Implementację Systemu Normatywów",
      text: "Wdrożyłem system normatywów, który znacznie usprawnił proces importu i analizy danych, co umożliwiło nam bardziej precyzyjne zarządzanie zasobami i efektywne planowanie działań."
    }
  ]


export default function Experience() {
  return (
    <section id="experience" className="w-full px-8 py-24 bg-[#F2EFED]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 p-4">Experience</h2>
        <ExperienceCard >
          <h2 className="text-xl font-bold">Politechnika Wrocławska</h2>
          <h3 className="text-l font-bold mb-2">Inżynier - kierunek Informatyka</h3>
          <h4>2017 - 2021</h4>
          <p>Studia ukończone. Nauczyłem się wielu języków programowania, takich jak Java, Python, C++, JavaScript, oraz jak tworzyć efektywne i skalowalne rozwiązania programistyczne.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h2 className="text-xl font-bold">Programista Webowy</h2>
          <h3 className="text-l font-bold mb-2">Firma Emultimax</h3>
          <h4 className="text-l font-bold mb-2">Data rozpoczęcia pracy: Listopad 2021</h4>
          <p className="my-4">Jestem programistą webowym pracującym w firmie Emultimax, która specjalizuje się w sprzedaży i produkcji okien. Moja rola na tym stanowisku obejmuje szeroki zakres obowiązków, w tym rozwijanie innowacyjnych rozwiązań, optymalizację procesów i tworzenie aplikacji webowych, które usprawniają nasze operacje.</p>
          <div>
            Niektóre Projekty:
            <ul>
              {PROJECTS_AT_WORK.map(project => {
                return (
                  <li>
                    <strong>{project.header}: </strong>
                    <p>{project.text}</p>
                  </li>)
              })}
            </ul>
          </div>
        </ExperienceCard>

      </div>
    </section >
  )
}

function ExperienceCard({ children }: { children: ReactNode }) {
  return <div className="border-solid border-2 rounded-md border-slate-400 p-12 my-2">
    {children}
  </div>
}
