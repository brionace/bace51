import { NextResponse } from "next/server";

export async function POST(request) {
  const res = await request.json();
  let tmp;
  console.log(res);
  if (res.name === "Anna Paton") {
    tmp = buildDemo();
    console.log(tmp);
  }
  return NextResponse.json({ res, tmp });
}

// using nodejs in the current root create a directory with a random name
// and install nextjs in it
function installNextJs() {
  const { execSync } = require("child_process");
  const { join } = require("path");
  const { tmpdir } = require("os");
  const { randomBytes } = require("crypto");

  const tmp = join(tmpdir(), randomBytes(16).toString("hex"));
  execSync(
    `mkdir ${tmp} && cd ${tmp} && npm init -y && npm i next react react-dom`
  );
  return tmp;
}

function buildDemo() {
  const fs = require("fs");
  const fsPromises = fs.promises;
  const path = "./bxuxzn";
  // fs.mkdtemp(path, (err, folder) => {
  //   if (err) throw err;
  //   console.log(folder);
  //   // https://stackoverflow.com/questions/15957529/can-i-install-a-npm-package-from-javascript-running-in-node-js
  //   const child_process = require("child_process");
  //   child_process.execSync(
  //     `pnpm create next-app ../demos/bxuxzn  --no-ts --no-pnpm --no --use-tailwind --no-src-dir --use-app --no-import-alias`,
  //     {
  //       stdio: [0, 1, 2],
  //     }
  //   );
  // });
  return fsPromises
    .mkdir(path)
    .then(function () {
      const child_process = require("child_process");
      child_process.execSync(
        `npm install --prefix ${path} next@latest react@latest react-dom@latest && cd ${path} touch index.js && echo "console.log('done!')" >> index.js && npm run build && npm run start`,
        {
          stdio: [0, 1, 2],
        }
      );
    })
    .catch(function (error) {
      if (error) throw error;
    });
  // npm install next@latest react@latest react-dom@latest
}
