function Footer() {
  return (
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a className="text-dark" href="https://myproject-three-pied.vercel.app/">
        Weather App
      </a>
    </div>
  );
}
export default Footer;
