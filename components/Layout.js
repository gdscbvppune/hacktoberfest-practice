import Header from "./Header";

const Layout = ({ header, children, ...rest }) => {
  return (
    <div className="min-h-screen bg-theme">
      <Header {...header} />
      <main {...rest}>{children}</main>
    </div>
  );
};

export default Layout;
