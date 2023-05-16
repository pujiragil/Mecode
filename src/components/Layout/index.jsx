export default function Layout({ bg, padding, children }) {
  return (
    <section className={bg}>
      <div className={`${padding?.length ? padding.join(" ") : null} container mx-auto`}>{children}</div>
    </section>
  );
}
