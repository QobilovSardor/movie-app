import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Sardor Qobilov
            <a className="grey-text text-lighten-4 right" href="https://telegram.me/SardorQobilov" target="_blank">React movies app</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;