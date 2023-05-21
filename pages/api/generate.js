import { log } from "console";
import axios from "axios";
//import { text } from "stream/consumers";

export default async function handler(req, res) {
  const { textInput } = req.body;

  // const options = {
  //   method: "POST",
  //   url: "https://iamai.p.rapidapi.com/ask",
  //   headers: {
  //     "content-type": "application/json",
  //     "X-Forwarded-For": "<user's ip>",
  //     "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
  //     "X-RapidAPI-Host": "iamai.p.rapidapi.com",
  //   },
  //   data: {
  //     consent: true,
  //     ip: "::1",
  //     question: "What is the meaning of life?",
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  // } catch (error) {
  //   console.error(error);
  // }

  //harley the chatbot
  // const options = {
  //   method: "POST",
  //   url: "https://harley-the-chatbot.p.rapidapi.com/talk/bot",
  //   headers: {
  //     "content-type": "application/json",
  //     Accept: "application/json",
  //     "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
  //     "X-RapidAPI-Host": "harley-the-chatbot.p.rapidapi.com",
  //   },
  //   data: {
  //     client: "",
  //     bot: "harley",
  //     message: textInput,
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data.data.conversation.output);
  //   res.status(200).json({ text: response.data.data.conversation.output });
  // } catch (error) {
  //   console.error(error);
  // }

  //waifu ai chatbot
  const options = {
    method: "POST",
    url: "https://waifu.p.rapidapi.com/path",
    params: {
      user_id: "sample_user_id",
      message: textInput,
      from_name: "Boy",
      to_name: "Girl",
      situation: "Girl loves Boy",
      translate_from: "auto",
      translate_to: "auto",
    },
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
      "X-RapidAPI-Host": "waifu.p.rapidapi.com",
    },
    data: {},
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.status(200).json({ text: response.data });
  } catch (error) {
    console.error(error);
  }

  // robomatic ai chatbot
  // const encodedParams = new URLSearchParams();
  // encodedParams.set("in", textInput);
  // encodedParams.set("op", "in");
  // encodedParams.set("cbot", "1");
  // encodedParams.set("SessionID", "RapidAPI1");
  // encodedParams.set("cbid", "1");
  // encodedParams.set("key", "RHMN5hnQ4wTYZBGCF3dfxzypt68rVP");
  // encodedParams.set("ChatSource", "RapidAPI");
  // encodedParams.set("duration", "1");

  // const options = {
  //   method: "POST",
  //   url: "https://robomatic-ai.p.rapidapi.com/api",
  //   headers: {
  //     "content-type": "application/x-www-form-urlencoded",
  //     "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
  //     "X-RapidAPI-Host": "robomatic-ai.p.rapidapi.com",
  //   },
  //   data: encodedParams,
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   res.status(200).json({ text: response.data.out });
  // } catch (error) {
  //   console.error(error);
  // }

  //stable diffusion
  // const options = {
  //   method: "GET",
  //   url: "https://stable-diffusion-v2.p.rapidapi.com/stable-diffusion",
  //   params: { description: textInput },
  //   headers: {
  //     "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
  //     "X-RapidAPI-Host": "stable-diffusion-v2.p.rapidapi.com",
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   console.log(response.data);
  //   res.status(200).json({ text: response.data });
  // } catch (error) {
  //   console.error(error);
  // }

  // chat gpt
  //   const options = {
  //     method: "POST",
  //     url: "https://chatgpt-open-ai-nlp.p.rapidapi.com/",
  //     headers: {
  //       "content-type": "application/json",
  //       Type: "chatgpt4-chat",
  //       "X-RapidAPI-Key": "386fef1f5fmsh847890c3de2e0e8p1830e1jsnd9139b90acdd",
  //       "X-RapidAPI-Host": "chatgpt-open-ai-nlp.p.rapidapi.com",
  //     },
  //     data: {
  //       messages: [
  //         {
  //           role: "system",
  //           content: "You are a helpful assistant.",
  //         },
  //         {
  //           role: "user",
  //           content: `${textInput}`,
  //         },
  //       ],
  //       temperature: "0.7",
  //     },
  //   };

  //   try {
  //     const response = await axios.request(options);
  //     const responseData = response.data;
  //     console.log(responseData);

  //     // assuming responseData.content exists and is a string
  //     res.status(200).json({ text: responseData.content });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ error: "An error occurred" });
  //   }
}
