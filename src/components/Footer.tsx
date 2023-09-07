
import GithubMarkWhite from "../assets/github-mark-white.svg"
import EnvelopWhite from "../assets/envelope-white.svg"
import LinkedinWhite from "../assets/linkeding-white.svg"

const CONTACT_INFO = [
  {
    link: "https://github.com/JakubWujec",
    logo: GithubMarkWhite,
    subtitle: "jakubwujec"
  },
  {
    link: "https://github.com/JakubWujec",
    logo: EnvelopWhite,
    subtitle: "@jakubwujec"
  },
  {
    link: "https://github.com/JakubWujec",
    logo: LinkedinWhite,
  }
]

export default function Footer() {
  return (
    <footer id="contact" className="w-full px-8 pt-8 pb-16 bg-purple-950 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 p-4">Contact</h2>
        <div className="flex flex-column justify-around items-stretch flex-wrap gap-4">
          {CONTACT_INFO.map((contactInfo, index) => {
            return (
              <a href={contactInfo.link} key={index}>
                <img src={contactInfo.logo} alt="Contact type logo" className="w-16 h-16" />
                {!!contactInfo.subtitle && <span>{contactInfo.subtitle}</span>}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}


