const Navbar = () => {
  return (
    <div className="bg-white-900 bg-white text-black p-4 flex justify-between px-20 font-bold">
      <h3 className="text-blue-600 text-2xl cursor-pointer">findme.ai</h3>
      <ul className="flex gap-10 text-black">
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
