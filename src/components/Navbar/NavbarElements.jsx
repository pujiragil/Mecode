export const Logo = ({ src, title }) => {
  return (
    <div className="flex gap-x-2.5 justify-center items-center">
      <img src={src} alt="Macode" />
      <h1 className="text-xl font-bold text-black lg:hidden">{title}</h1>
    </div>
  );
};

export const Toggle = () => {
  return (
    <div className="md:hidden">
      <span className="bg-black w-6 h-0.5 block my-2 rounded-full"></span>
      <span className="bg-black w-6 h-0.5 block my-2 rounded-full"></span>
    </div>
  );
};

export const NavMenu = ({ links }) => {
  return (
    <div className="hidden font-poppins md:flex justify-center items-center gap-x-8 font-inter md:text-sm lg:text-base">
      {links.map((link, idx) => (
        <a key={idx} className="block" href="#">
          {link}
        </a>
      ))} 
    </div>
  );
};
