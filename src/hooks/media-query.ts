import { theme } from "@/shared/theme";
import { useMediaQuery } from "react-responsive";

const breakpoints = theme.screens;

type Breakpoint = keyof typeof breakpoints;

export function useBreakpoint(breakpoint: Breakpoint) {
  return useMediaQuery({
    query: `(min-width: ${breakpoints[breakpoint]})`,
  });
}
