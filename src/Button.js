import { useEffect } from "react";
let grades = 0;
export default function Button(given) {
  useEffect(() => {
    if (!given.checked) return;
    if (given.rightAnswer) grades++;
  }, [given.checked]);
  const styling = {
    backgroundColor: given.checked ? "#d6dbf5" : "",
    borderColor: given.checked ? "#d6dbf5" : "",
  };
  return (
    <button
      onClick={given.toggle}
      style={styling}
      dangerouslySetInnerHTML={{ __html: given.content }}
    ></button>
  );
}
export { grades };
