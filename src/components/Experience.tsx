import { ReactNode } from "react"

export default function Experience() {
  return (
    <section id="experience" className="w-full px-8 py-12 bg-[#F2EFED]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 p-4">Experience</h2>


        <ExperienceCard >
          <h2 className="text-xl font-bold">Politechnika Wrocławska</h2>
          <h3 className="text-l font-bold mb-2">Inżynier - kierunek Informatyka</h3>
          <h4>2017 - 2021</h4>
          <p>Studia ukończone. Nauczyłem się wielu języków programowania, takich jak Java, Python, C++, JavaScript, oraz jak tworzyć efektywne i skalowalne rozwiązania programistyczne.</p>
        </ExperienceCard>

        <ExperienceCard>
          <h2 className="text-xl font-bold">Emultimax</h2>
          <h3 className="text-l font-bold mb-2">Programista Webowy</h3>
          <h4>2021 - ????</h4>
          <p>Współtworzyłem aplikację webową do zarządzania klientami dla jednego z naszych kluczowych klientów w branży detalicznej. Byłem odpowiedzialny za implementację backendu i integrację z bazą danych. Opracowałem również interfejs użytkownika dla różnych modułów systemu, co znacznie zwiększyło wydajność i użyteczność aplikacji.</p>
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
