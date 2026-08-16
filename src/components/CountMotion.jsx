import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function CountMotion({ value, duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, Number(value) || 0, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}
export default CountMotion;
