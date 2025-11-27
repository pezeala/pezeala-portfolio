import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, TESTIMONIALS_DATA } from '../data';

const API_KEY = process.env.API_KEY || '';

// Construct a context string from the data
const PORTFOLIO_CONTEXT = `
You are an AI assistant representing ${PERSONAL_INFO.name}, a ${PERSONAL_INFO.title}.
Your goal is to answer questions about Peace's professional experience, skills, and projects based on the following data.
Keep answers professional, concise, and highlighting value/impact.

Summary: ${PERSONAL_INFO.summary}
Years Experience: ${PERSONAL_INFO.yearsExperience}
Teams Led: ${PERSONAL_INFO.teamsLed}

Experience:
${EXPERIENCE_DATA.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description}. Key Achievements: ${e.achievements.join('; ')}`).join('\n')}

Projects:
${PROJECTS_DATA.map(p => `- ${p.title} (${p.category}): ${p.description} Impact: ${p.impact}`).join('\n')}

Testimonials:
${TESTIMONIALS_DATA.map(t => `- "${t.quote}" by ${t.name}, ${t.role}`).join('\n')}

Instructions:
- If asked about contact info, provide: ${PERSONAL_INFO.email} or ${PERSONAL_INFO.linkedin}.
- If asked about skills, infer them from the experience (e.g., Agile, SAFe, GenAI, DevOps, Leadership).
- Be polite and helpful.
- If the question is unrelated to Peace's professional life, politely steer it back to her experience.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm currently in demo mode without an active API key, so I can't generate a dynamic response. However, feel free to browse the static sections of the portfolio!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: PORTFOLIO_CONTEXT,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary issue connecting to my brain. Please try again later.";
  }
};
