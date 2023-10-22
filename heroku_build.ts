const buildCommand = new Deno.Command(`${Deno.execPath()} task build`, {
  stdout: "inherit",
  stderr: "inherit",
});

console.log(`Build Exit Code: ${buildCommand.outputSync().code}`);
