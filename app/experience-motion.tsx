"use client";

import { useEffect } from "react";

export default function ExperienceMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    root.classList.add("motion-ready");

    const observedReveals = new WeakSet<Element>();
    const revealObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries, observer) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  entry.target.classList.add("is-visible");
                  observer.unobserve(entry.target);
                }
              }
            },
            { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
          )
        : null;

    function observeReveal(element: Element) {
      if (observedReveals.has(element)) return;
      observedReveals.add(element);
      if (revealObserver) {
        revealObserver.observe(element);
      } else {
        element.classList.add("is-visible");
      }
    }

    function observeRevealsWithin(node: Node) {
      if (!(node instanceof Element)) return;
      if (node.matches(".reveal")) observeReveal(node);
      node.querySelectorAll(".reveal").forEach(observeReveal);
    }

    document.querySelectorAll(".reveal").forEach(observeReveal);
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(observeRevealsWithin);
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    const parallaxTargets = document.querySelectorAll<HTMLElement>(
      ".device-stage, .showcase-device-stage",
    );
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

    let animationFrame = 0;

    function handlePointerMove(event: PointerEvent) {
      if (!canHover.matches || reduceMotion.matches) return;
      if (animationFrame) return;
      const { clientX, clientY, currentTarget } = event;
      const target = currentTarget as HTMLElement;

      animationFrame = window.requestAnimationFrame(() => {
        const bounds = target.getBoundingClientRect();
        const x = (clientX - bounds.left) / bounds.width - 0.5;
        const y = (clientY - bounds.top) / bounds.height - 0.5;
        target.style.setProperty("--pointer-x", `${Math.max(-1, Math.min(1, x))}`);
        target.style.setProperty("--pointer-y", `${Math.max(-1, Math.min(1, y))}`);
        animationFrame = 0;
      });
    }

    function resetParallax(event: PointerEvent) {
      const target = event.currentTarget as HTMLElement;
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      target.style.setProperty("--pointer-x", "0");
      target.style.setProperty("--pointer-y", "0");
    }

    parallaxTargets.forEach((target) => {
      target.addEventListener("pointermove", handlePointerMove, { passive: true });
      target.addEventListener("pointerleave", resetParallax);
    });

    return () => {
      root.classList.remove("motion-ready");
      revealObserver?.disconnect();
      mutationObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      parallaxTargets.forEach((target) => {
        target.removeEventListener("pointermove", handlePointerMove);
        target.removeEventListener("pointerleave", resetParallax);
      });
    };
  }, []);

  return null;
}
