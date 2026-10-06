// Lets plain Node run the project's TypeScript data files: resolves the "@/"
// alias and extensionless imports the way the Next.js build does.
// Used by: node --import ./scripts/alias.mjs <script>
import { existsSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = new URL("../", import.meta.url);

registerHooks({
  resolve(specifier, context, next) {
    const local = specifier.startsWith("@/") || specifier.startsWith(".");
    if (!local) return next(specifier, context);
    const base = specifier.startsWith("@/") ? new URL(specifier.slice(2), root) : new URL(specifier, context.parentURL);
    const file = fileURLToPath(base);
    for (const candidate of [file, `${file}.ts`, `${file}.tsx`, `${file}/index.ts`]) {
      if (existsSync(candidate) && !candidate.endsWith("/") && /\.[a-z]+$/.test(candidate)) return next(pathToFileURL(candidate).href, context);
    }
    return next(specifier, context);
  },
});
