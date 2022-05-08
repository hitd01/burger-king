import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = 'Liên hệ';
    window.scrollTo(0, 0);
  }, []);

  return <div>Contact</div>;
};

export default Contact;
