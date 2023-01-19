import React from 'react';

function Footer(props) {
  return (
    <>
      <footer className="page-footer">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Sardor Qobilov
            <a className="grey-text text-lighten-4 right" href="#!">Movie App</a>
          </div>
        </div>
      </footer>

    </>
  );
}

export default Footer;