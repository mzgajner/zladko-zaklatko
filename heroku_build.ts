const buildStatus = await Deno.run({
  cmd: [Deno.execPath(), "task", "build"],
  stdout: "inherit",
  stderr: "inherit",
}).status();

console.log(`Build Exit Code: ${buildStatus.code}`);
