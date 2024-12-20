import { twMerge } from "tailwind-merge";

export default function App() {
  const cancel = false;
  return (
    <>
      <h1
        className={twMerge(
          "text-3xl font-bold underline dancing-script",
          cancel && "line-through"
        )}
      >
        Hello world!
      </h1>
    </>
  );
}
