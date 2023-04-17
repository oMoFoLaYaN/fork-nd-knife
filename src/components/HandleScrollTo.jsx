

export function  handleScrollTo (selector) {
        const element = document.querySelector(selector);
        const offset = 70;
        const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yCoordinate - offset, behavior: 'smooth' });
      };
 