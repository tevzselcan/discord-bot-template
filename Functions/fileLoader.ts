const { glob } = require("glob");
const { promisify } = require("util");
const proGlob = promisify(glob);

async function loadFiles(dirName) {
  const Files = await proGlob(
    `${process.cwd().replace(/\\/g, "/")}/${dirName}/**/*.ts`
  );
  Files.forEach((file) => delete require.cache[require.resolve(file)]);
  return Files;
}

export { loadFiles };
