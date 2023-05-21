import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New loading state

  useEffect(() => {
    console.log(generatedText);
  }, [generatedText]);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextInput(event.target.value);
  };

  const handleGenerateText = async () => {
    setIsLoading(true); // Set loading to true before fetching
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ textInput }),
    });
    const data = await res.json();
    setGeneratedText(data.text);
    setIsLoading(false); // Set loading to false after fetching
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 pt-10 space-y-4 align-middle">
      <h1 className="text-4xl font-bold text-center">Chat Bot</h1>
      <p>This could get weird.</p>
      <div className="flex justify-center w-5/6 w-full sm:w-1/2">
        <textarea
          value={textInput}
          onChange={handleTextareaChange}
          rows={4}
          cols={40}
          className="w-full p-2 pt-1 border-2 border-gray-300 rounded resize-none "
          placeholder="Enter your text here"
        />
        <div className="absolute text-xs text-gray-400 bottom-2 right-2">
          <span>{textInput.length}</span>/100
        </div>
      </div>
      <button
        type="button"
        onClick={handleGenerateText}
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        {isLoading ? "Loading..." : "Send"}{" "}
        {/* Display 'Loading...' when fetching */}
      </button>
      <Image
        src="https://res.cloudinary.com/dg2xmnzto/image/upload/v1684628076/waifu_huj398.png"
        alt="Logo"
        width={200}
        height={200}
      />
      <div className="flex justify-center w-5/6 w-full sm:w-1/2">
        <textarea
          value={generatedText}
          rows={4}
          cols={40}
          className="w-full p-2 pt-1 border-2 border-gray-300 rounded resize-none "
          placeholder="Chatbot response will appear here"
        />
      </div>
    </div>
  );
}

// import Image from "next/image";
// // import { Inter } from "next/font/google";
// import { useState, useEffect } from "react";

// // const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [textInput, setTextInput] = useState("");
//   const [generatedText, setGeneratedText] = useState("");

//   useEffect(() => {
//     console.log(generatedText);
//   }, [generatedText]);

//   const handleTextareaChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ) => {
//     setTextInput(event.target.value);
//   };

//   const handleGenerateText = async () => {
//     const res = await fetch("/api/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ textInput }),
//     });
//     const data = await res.json();
//     setGeneratedText(data.text);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center pt-10 space-y-4 align-middle">
//       <h1 className="text-4xl font-bold text-center">
//         Marketing Copy Generator
//       </h1>
//       <div className="relative flex justify-center w-5/6 w-full sm:w-1/2">
//         <textarea
//           value={textInput}
//           onChange={handleTextareaChange}
//           rows={4}
//           cols={40}
//           className="w-full p-2 pt-1 border-2 border-gray-300 rounded resize-none "
//           placeholder="Enter your text here"
//         />
//         <div className="absolute text-xs text-gray-400 bottom-2 right-2">
//           <span>{textInput.length}</span>/100
//         </div>
//       </div>
//       <button
//         type="button"
//         onClick={handleGenerateText}
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
//       >
//         Generate
//       </button>
//     <div className="relative flex justify-center w-5/6 w-full sm:w-1/2">
//       <textarea
//         value={JSON.stringify(generatedText)}
//         rows={4}
//         cols={40}
//         className="w-full p-2 pt-1 border-2 border-gray-300 rounded resize-none "
//         placeholder="Generated text will appear here"
//       />
//     </div>
//   </div>
// );
// }
