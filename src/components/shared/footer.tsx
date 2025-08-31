const Footer = () => {
  return (
    <footer className="w-full py-6 text-center text-muted-foreground text-sm">
      <div className="container mx-auto">
        <p>Designed & Built by Cao Lê Minh Khoa</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
