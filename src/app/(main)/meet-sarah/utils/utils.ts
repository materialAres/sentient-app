export const loadDialogue = async (
  step,
  choice,
  setIsLoading,
  setCurrentDialogue,
  setDialogueStep
) => {
  setIsLoading(true);
  try {
    const response = await fetch("/api/meet-sarah-dialogue", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ step, choice }),
    });

    const data = await response.json();

    if (data.dialogue) {
      setCurrentDialogue(data.dialogue);
      setDialogueStep(data.step);
    } else {
      setCurrentDialogue(null);
    }
  } catch (error) {
    console.error("Failed to load dialogue:", error);
  } finally {
    setIsLoading(false);
  }
};

export const moveToNextDialogue = (
  setDisplayedText,
  setCurrentIndex,
  setIsComplete,
  loadDialogue,
  dialogueStep,
  userChoice,
  setIsLoading,
  setCurrentDialogue,
  setDialogueStep
) => {
  setDisplayedText("");
  setCurrentIndex(0);
  setIsComplete(false);
  loadDialogue(
    dialogueStep + 1,
    userChoice,
    setIsLoading,
    setCurrentDialogue,
    setDialogueStep
  );
};
