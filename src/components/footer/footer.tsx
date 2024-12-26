const Footer = () => {
    return (
      <footer className="bg-yellow-500 text-white text-center p-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}
          <span className="mx-2"></span> {/* Adds space between the year and link */}
          <a
            href="https://www.gohbetbank.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Goh betoch bank
          </a>
          . All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  