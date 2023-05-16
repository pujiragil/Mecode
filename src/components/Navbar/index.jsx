import { Logo, NavMenu, Toggle } from "./NavbarElements";

const Navbar = ({ data }) => {
  return (
    <div className="flex justify-between lg:justify-start lg:gap-x-20 items-center">
      <Logo src={data.imgLink} title={data.title} />
      <Toggle />
      <NavMenu links={data.links} />
    </div>
  );
};

export default Navbar;
