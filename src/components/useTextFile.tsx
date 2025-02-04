import { useEffect, useState } from "react";

const useTextFile = (filePath: string) => {
  const text_dir = "/Text/";
  const [text, setText] = useState<string>("");
  filePath = text_dir + filePath;

  useEffect(() => {
    // if (!filePath) return;

    fetch(filePath)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error("Error reading file:", error));
  }, []);

  return text;
};

export default useTextFile;
