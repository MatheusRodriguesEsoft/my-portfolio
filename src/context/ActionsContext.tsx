/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
  createContext,
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface ActionsContextData {
  sectionRefs: MutableRefObject<null>[];
  visibleSectionIndex: number;
}

interface ActionsProviderProps {
  children: ReactNode;
}
export const ActionsContext = createContext({} as ActionsContextData);

export function ActionsProvider({ children }: ActionsProviderProps) {
  const [visibleSectionIndex, setVisibleSectionIndex] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const sections = ["home", "skills", "works", "contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSectionIndex(sections.indexOf(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    sectionRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  return (
    <ActionsContext.Provider value={{ sectionRefs, visibleSectionIndex }}>
      {children}
    </ActionsContext.Provider>
  );
}
