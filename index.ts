import { bgBlue, green, bold } from "https://deno.land/std/fmt/colors.ts";

const sayHello = (name: string = "world") => {
    console.log(bgBlue(green(bold(` \n Hello ${name}! \n `))));
}


sayHello();

sayHello("Frank");
