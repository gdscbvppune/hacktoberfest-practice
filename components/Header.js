const Navbar = () => {
  return (
    <header className="w-full py-6 pb-10">
      <div className="container">
        <nav className="flex items-start justify-between">
          <div className="flex flex-wrap items-center gap-6 md:gap-12">
            <img src="/hacktoberfest.svg" width="150"/>
            <img src="/gdscbvp.svg" width="550"/>
          </div>
          <iframe
              src="https://ghbtns.com/github-btn.html?user=gdscbvppune&repo=hacktoberfest-practice&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="120"
              height="30"
              title="GitHub"
            ></iframe>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
