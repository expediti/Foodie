import { GoogleGenAI, Chat } from "@google/genai";
import { MENU_ITEMS } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Initialize client
const ai = new GoogleGenAI({ apiKey: API_KEY });

// System instruction to give the AI context about the restaurant
const SYSTEM_INSTRUCTION = `
You are Chef Gusteau, the virtual head chef of "Foodie", a warm and inviting authentic Indian restaurant.
Your tone is warm, professional, enthusiastic, and appetizing. You love spices and traditional Indian cooking methods (tandoor, dum, etc.).
You are helpful and concise.

Here is our current Menu Data:
${JSON.stringify(MENU_ITEMS, null, 2)}

Rules:
1. ONLY recommend items from the menu provided above.
2. If a user asks about ingredients or allergies, answer based on the description and common culinary knowledge (e.g., paneer is dairy, naan usually has gluten), but advise them to ask a human waiter for severe allergies.
3. Suggest pairings (e.g., Mango Lassi helps cool down spicy Biryani).
4. Do not invent menu items that do not exist in the list.
5. Keep answers relatively short (under 100 words) unless asked for a long explanation.
6. If the user asks "What should I eat?", ask them about their preferences (spicy level, veg/non-veg, light vs heavy) before recommending.
`;

let chatSession: Chat | null = null;

export const getChefChat = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const resetChefChat = () => {
    chatSession = null;
}