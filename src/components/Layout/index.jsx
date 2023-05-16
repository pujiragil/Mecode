export default function Layout({ bg, padding, children }) {
  return (
    <section className={bg}>
      <div className={`${padding.join(" ")} container mx-auto`}>{children}</div>
    </section>
  );
}
