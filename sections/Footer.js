const Footer = () => {
  return (
    <>
      <footer className="py-6 mt-12 sm:px-6">
        <p className="text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Teri. All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
