# Zladko Zaklatko

This is a small Vue app that can be used to deliver hints for a treasure hunt or
escape room. It presents a single input field to the user, expects them to enter
a password and then displays a hint text if the password matches one of the
hints. If the password is wrong, it displays a failure message.

![Screenshot of app UI](/screenshot.png?raw=true)

## Setting up

Follow these steps:

1. Create `plaintext-hints.json` in project root. It should contain a single
   object where keys are passwords and values are hints:
   ```json
   {
     "banana": "Banana is the correct answer.",
     "strawberry": "Yes, excellent, strawberry!"
   }
   ```
2. Run `deno task encrypt-hints`, this will create a `hints.json` file with
   encrypted hints.
3. Run `deno task dev` to start a dev server. Type `banana` into the input field
   and if you did everything correctly, the hint _“Banana is the correct
   answer.”_ should appear.
4. Run `deno task build` to generate a production-ready site in `/dist` and then
   deploy it wherever you want.

## Available tasks

```sh
# Start development server
deno task dev

# Generate encrypted `hints.json` file
deno task encrypt-hints

# Build static assets for deployment in `/dist`
deno task build
```

## Caveats

Currently there's a caveat for Deno users:

- peer dependencies need to be referenced in `vite.config.mts`. In this example
  it is only `vue` package that needs to be referenced.
