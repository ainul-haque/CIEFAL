import * as esbuild from "esbuild";
import { promises as fs } from "fs";

async function compile() {
  try {
    // Create dist directory if it doesn't exist
    await fs.mkdir("dist/css", { recursive: true });
    await fs.mkdir("dist/js", { recursive: true });

    // Minify CSS
    await esbuild.build({
      entryPoints: ["public/css/*.css"],
      outdir: "dist/css",
      minify: true,
    });

    // Minify JS
    await esbuild.build({
      entryPoints: ["public/js/*.js"],
      outdir: "dist/js",
      minify: true,
      bundle: true,
    });

    console.log("Build completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

compile();
