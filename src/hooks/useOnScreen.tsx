import { RefObject, useEffect, useState } from "react";

export function useOnScreen(ref: RefObject<Element>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref?.current;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (!node) return;
    observer.observe(node);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
