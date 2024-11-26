import { twMerge } from "tailwind-merge";

export default function App() {
  const cancel = false;
  return (
    <>
      <h1
        className={twMerge(
          "text-3xl font-bold underline",
          cancel && "line-through"
        )}
      >
        Hello world!
      </h1>
      <input type="text" />
    </>
  );
}
