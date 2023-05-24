export default function Layout({ bg, padding, styles, children }) {
  return (
    <section className={bg}>
      <div
        className={`${padding?.length ? padding.join(" ") : null} ${
          styles ? styles : ""
        } container mx-auto`}
      >
        {children}
      </div>
    </section>
  );
}
