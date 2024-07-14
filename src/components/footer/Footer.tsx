import React, { useRef, useEffect, useLayoutEffect } from 'react';
import './styles/styles.css';
import gsap from 'gsap';

//fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const wrapper = useRef(null);
  const tl = gsap.timeline({ defaults: { duration: 1 } });
  const today = new Date();

  useLayoutEffect(() => {
    tl.fromTo(wrapper.current, { y: 0 }, { y: 0, repeat: -1 });
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className='footer'>
      <div className='footer-mainCtn'>
        <div className='footer-container'>
          © {today.getFullYear()} | coded and designed by Jagoda Kubicka
        </div>

        <div
          ref={wrapper}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }}
          className='footer-link'>
          <FontAwesomeIcon icon={faArrowUp} className='footer__icon' />
        </div>
      </div>
    </div>
  );
}
