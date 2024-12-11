const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export const chatSession = model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    { text: "Write a script to generate 30 seconds video on topic :lnteresting historical story along with Al image prompt in Realistic format for\neach scene and give me result in JSON format with imagePrompt and ContentText as field, No Plain text" },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "```json\n[\n  {\n    \"imagePrompt\": \"Realistic painting of a bustling 17th-century Parisian street market, vibrant colors, detailed clothing, people interacting, overflowing market stalls, cobblestone streets, sunlight streaming through the buildings.\",\n    \"contentText\": \"Our story begins in 1685 Paris.  The city is a whirlwind of activity, a vibrant tapestry of life and trade.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic portrait of a young, determined woman, 17th-century French clothing, intelligent eyes, holding a hidden map or letter, subtle expression of anxiety and determination.\",\n    \"contentText\": \"Meet Annelise, a young cartographer's apprentice with a secret mission.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic depiction of a dimly lit, clandestine meeting in a Parisian tavern, shadows, candlelight, several suspicious-looking individuals, Annelise seated at a table, furtively passing something.\",\n    \"contentText\": \"She's entrusted with a crucial message, a coded map leading to a long-lost treasure.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic illustration of a chase scene through the narrow, winding streets of 17th-century Paris, Annelise running, pursuers close behind, atmospheric lighting, buildings looming overhead.\",\n    \"contentText\": \"But she's being followed. Royal guards are hot on her trail.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of a hidden, underground vault, intricate stonework, flickering torches, Annelise discovering a chest filled with gold coins and ancient artifacts.\",\n    \"contentText\": \"Finally, she reaches her destination, a hidden vault beneath the city streets.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic painting of Annelise, triumphant, standing amidst the treasure, a sense of accomplishment and relief on her face, the vault illuminated by torchlight.\",\n    \"contentText\": \"Her mission is a success.  She has found the legendary treasure of the Knights Templar.\"\n  },\n  {\n    \"imagePrompt\": \"Realistic image of Annelise looking thoughtfully towards the viewer with a subtle smile; 17th-century attire; warm, inviting lighting.  The image should hint at the next chapter.\",\n    \"contentText\": \"But what will she do with her newfound wealth? That, my friends, is a story for another time.\"\n  }\n]\n```\n\n**Note:** This JSON provides prompts designed for approximately 30 seconds of video, assuming a moderate pace. The actual length will depend on the video editing style and the AI image generation speed.  You'll need an AI image generator (like Midjourney, Dall-E 2, Stable Diffusion) capable of handling realistic styles to create the images from these prompts, and a video editing program to assemble them.  You might need to adjust the number of scenes or the detail within the descriptions depending on the capabilities of your chosen AI image generator.  Remember to use appropriate keywords to guide the AI to generate high-quality, detailed images.\n" },
                ],
            },
        ],
    });
