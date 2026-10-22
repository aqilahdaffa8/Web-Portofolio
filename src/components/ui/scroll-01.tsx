"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type Dispatch, type SetStateAction } from "react";

export type Scroll01Item = {
  title: string;
  description: string;
  media: string;
  tag?: string;
  href?: string;
};

export interface Scroll01Props {
  items: Scroll01Item[];
}

/** Bingkai HP untuk screenshot aplikasi mobile (rasio ± 9:19.5). */
export function PhoneFrame({ src, alt, priority, sizes = "(min-width: 768px) 20rem, 70vw" }: { src: string; alt: string; priority?: boolean; sizes?: string }) {
  return (
    <div className="relative size-full overflow-hidden rounded-[2.25rem] border-[6px] border-ink-raised bg-ink-deep shadow-2xl shadow-black/40">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}

function ScrollItem({
  item,
  index,
  setActive,
}: {
  item: Scroll01Item;
  index: number;
  setActive: Dispatch<SetStateAction<number>>;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "end 15%"] });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacityValues = index === 0 ? [1, 0.7, 1, 0] : [0, 0.7, 1, 0];
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], opacityValues);
  const isActive = useTransform(scrollYProgress, (v) => v > 0.4 && v < 0.6);

  useMotionValueEvent(isActive, "change", (v) => {
    if (v) setActive((prev) => (prev === index ? prev : index));
  });

  return (
    <motion.article ref={ref} style={{ opacity, y }}>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
      <h3 className="mb-3 font-display text-3xl font-semibold tracking-tight text-[#ececec] lg:text-4xl">{item.title}</h3>
      <p className="max-w-sm text-[#ececec]/60">{item.description}</p>
      {item.tag && <p className="mt-5 font-mono text-xs text-[#ececec]/40">{item.tag}</p>}
    </motion.article>
  );
}

export function Scroll01({ items }: Readonly<Scroll01Props>) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* HP: carousel geser samping (CSS snap, tanpa JS). Gambar lazy, hanya yang mendekati layar yang dimuat. */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10 md:hidden">
        {items.map((item, index) => (
          <Link
            key={item.title}
            href={item.href ?? "#"}
            className="block w-[78%] shrink-0 snap-center rounded-3xl border border-white/10 bg-ink-raised p-5 sm:w-[55%]"
          >
            <div className="relative mx-auto aspect-[9/19.5] w-36">
              <PhoneFrame src={item.media} alt={item.title} sizes="10rem" />
            </div>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#ececec]">{item.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-[#ececec]/60">{item.description}</p>
            {item.tag && <p className="mt-3 font-mono text-xs text-[#ececec]/40">{item.tag}</p>}
          </Link>
        ))}
      </div>

      {/* Desktop: HP sticky di kiri, teks bergulir di kanan */}
      <div className="hidden gap-10 md:grid md:grid-cols-2">
        <div className="sticky top-20 flex h-[80vh] items-center justify-center self-start">
          <div className="relative aspect-[9/19.5] h-[72vh] max-h-[640px]">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                className="absolute inset-0"
                initial={{ opacity: index === 0 ? 1 : 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ duration: 0.2, ease: "linear" }}
              >
                <PhoneFrame src={item.media} alt={item.title} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="py-[25vh]">
          <div className="space-y-[35vh]">
            {items.map((item, index) => (
              <ScrollItem key={item.title} item={item} index={index} setActive={setActiveIndex} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Scroll01;
