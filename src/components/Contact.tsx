import GithubMark from "../assets/github-mark.svg"

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-8 my-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex flex-column justify-around flex-wrap ">
          <a href="https://github.com/JakubWujec">
            <img src={GithubMark} alt="GithubMark" className="w-16 h-16" />
            <span>jakubwujec</span>
          </a>
          <a href="https://github.com/JakubWujec">
            <img src={GithubMark} alt="GithubMark" className="w-16 h-16" />
            <span>jakubwujec</span>
          </a>
          <a href="https://github.com/JakubWujec">
            <img src={GithubMark} alt="GithubMark" className="w-16 h-16" />
            <span>jakubwujec</span>
          </a>
        </div>

      </div>
    </section>
  )
}