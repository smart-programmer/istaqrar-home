import AOS from 'aos';

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out' });
  });
}
