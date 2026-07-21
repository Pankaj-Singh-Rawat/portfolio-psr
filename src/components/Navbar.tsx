import Container from "./Container";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <div
          className="
          mt-8
          flex
          items-center
          justify-between
          rounded-[999px]
          border
          border-[var(--border)]
          bg-[rgba(247,243,238,0.75)]
          px-6
          py-5
          backdrop-blur-xl
        "
        >
          <Logo />

          <nav className="hidden gap-8 md:flex">
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Skills</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}