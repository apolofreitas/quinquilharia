import tailwindConfig from "../../tailwind.config";

import resolveConfig from "tailwindcss/resolveConfig";

export const { theme } = resolveConfig(tailwindConfig);
