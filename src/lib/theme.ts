export type Colour = "blue" | "green" | "pink" | "yellow";

const colours: Colour[] = ["blue", "green", "yellow", "pink"];

export const pageThemeClassNames: Record<Colour, string> = {
  blue: "bg-[linear-gradient(to_bottom,_#99bbff,_#fafafa)] selection:bg-[#0044cc] selection:text-[#fafafa] [&_a:hover]:text-[#0044cc]",
  green:
    "bg-[linear-gradient(to_bottom,_#93df8b,_#fafafa)] selection:bg-[#0d8e00] selection:text-[#fafafa] [&_a:hover]:text-[#0d8e00]",
  pink: "bg-[linear-gradient(to_bottom,_#ff7dff,_#fafafa)] selection:bg-[#9b009b] selection:text-[#fafafa] [&_a:hover]:text-[#9b009b]",
  yellow:
    "bg-[linear-gradient(to_bottom,_#e2ff66,_#fafafa)] selection:bg-[#7c9b00] selection:text-[#fafafa] [&_a:hover]:text-[#7c9b00]",
};

export const getRandomColour = () =>
  colours[Math.floor(Math.random() * colours.length)];
