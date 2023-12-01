export const scrollToSection = (
  evt: React.MouseEvent,
  elementRef: React.RefObject<HTMLElement>,
  time: number,
  margin?: number,
): void => {
  evt.preventDefault();

  if (elementRef.current) {
    const targetPosition = elementRef.current.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    const marginTop = margin || 20;
    const duration = time;

    scrollTo(
      startPosition,
      startPosition +
        targetPosition -
        marginTop -
        3.5 * parseFloat(getComputedStyle(document.documentElement).fontSize),
      duration,
    );
  }
};

const scrollTo = (
  start: number,
  end: number,
  duration: number,
  callback?: Function,
) => {
  const startTime = performance.now();

  function animateScroll(currentTime: any) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    window.scrollTo(0, start + (end - start) * progress);

    if (progress < 1) requestAnimationFrame(animateScroll);
    else if (callback) callback();
  }

  requestAnimationFrame(animateScroll);
};
