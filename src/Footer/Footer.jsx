import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-white footer sm:footer-horizontal p-10">
  <aside>
    <p className='text-3xl'>
      CS — Ticket System
      <br />
    </p>
    <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br />the industry's standard dummy text ever since <br /> the 1500s, when an unknown printer took a galley <br /> of type and scrambled it to make a type specimen book.</p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact Saled</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Products & Services</a>
    <a className="link link-hover">Customer Stories</a>
    <a className="link link-hover">Download Apps</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover"><i class="p-1.5 text-black bg-white rounded-4xl fa-brands fa-x-twitter"></i> CS — Ticket System</a>
    <a className="link link-hover"><i class="p-1.5 text-black bg-white rounded-4xl fa-brands fa-linkedin-in"></i> CS — Ticket System</a>
    <a className="link link-hover"><i class="p-2 text-black bg-white rounded-4xl fa-brands fa-facebook-f"></i> CS — Ticket System</a>
    <a className="link link-hover"><i class="p-1.5 text-black bg-white rounded-4xl fa-regular fa-envelope"></i> support@cst.com</a>
  </nav>
</footer>
<hr /><hr /><hr /><hr />
<footer className="text-white footer sm:footer-horizontal footer-center bg-black p-4">
  <aside>
    <p>© {new Date().getFullYear()} CS — Ticket System. All rights reserved</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;