import { NextResponse } from "next/server";

const dialogueFlow = [
  {
    text: "Hi! I'm Sarah, your guide on this journey home.",
    type: "dialogue",
  },
  {
    text: "Because that's what meditation is: it's about coming home, into your own body :)",
    type: "dialogue",
  },
  {
    text: "Aren't you excited about that?",
    type: "question",
    choices: [
      { text: "Of course!", branch: "excited" },
      { text: "I just want to get out of here.", branch: "reluctant" },
    ],
  },
  // Branch: excited
  {
    text: "Good, good. Then first of all, take a deep breath…",
    type: "dialogue",
    condition: "excited",
  },
  {
    text: "...that's all, my friend.",
    type: "dialogue",
    condition: "excited",
  },
  // Branch: reluctant
  {
    text: "How rude... but if that's what you want, why don't you just close the computer and leave?",
    type: "dialogue",
    condition: "reluctant",
  },
  {
    text: "I see you're still here. Good, then take a nice deep breath...",
    type: "dialogue",
    condition: "reluctant",
  },
  {
    text: "...that's all, my friend.",
    type: "dialogue",
    condition: "reluctant",
  },
  // Continue regardless
  { text: "I hope you're feeling more r e l a x e d now.", type: "dialogue" },
  { text: "···", type: "glitch" },
  {
    text: "Maybe we've stayed here too long. Anyway, make sure to read my articles, they'll be useful to you :)",
    type: "dialogue-end",
  },
];

export async function POST(request: Request) {
  const { step, choice } = await request.json();

  // Validate step is within bounds
  if (step < 0 || step >= dialogueFlow.length) {
    return NextResponse.json({ error: "Invalid step" }, { status: 400 });
  }

  // Find next valid dialogue
  let currentStep = step;
  while (currentStep < dialogueFlow.length) {
    const dialogue = dialogueFlow[currentStep];
    if (!dialogue.condition || dialogue.condition === choice) {
      return NextResponse.json({ dialogue, step: currentStep });
    }
    currentStep++;
  }

  return NextResponse.json({ dialogue: null, step: currentStep });
}
