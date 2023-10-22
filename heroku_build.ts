const buildCommand = new Deno.Command("deno task build", {
  stdout: "inherit",
  stderr: "inherit",
});

console.log(`Build Exit Code: ${buildCommand.outputSync().code}`);
