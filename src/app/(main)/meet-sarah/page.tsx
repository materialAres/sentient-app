"use client";

import { useState, useEffect } from "react";
import { loadDialogue } from "./utils/utils";
import MeetSarahUI from "./components/MeetSarahUI";

export default function MeetSarahPage() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [dialogueStep, setDialogueStep] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [showGlitch, setShowGlitch] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const typingSpeed = 50;
  const pauseBetweenDialogues = 2000;

  // Load initial dialogue on mount
  useEffect(() => {
    loadDialogue(0, null, setIsLoading, setCurrentDialogue, setDialogueStep);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!currentDialogue || isLoading) return;

    if (currentDialogue.type === "glitch") {
      setShowGlitch(true);
      const glitchTimeout = setTimeout(() => {
        setShowGlitch(false);
        setIsComplete(true);
        const nextTimeout = setTimeout(() => {
          moveToNextDialogue();
        }, 1500);
        return () => clearTimeout(nextTimeout);
      }, 2000);
      return () => clearTimeout(glitchTimeout);
    }

    if (currentIndex < currentDialogue.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentDialogue.text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);

      if (currentDialogue.type === "dialogue") {
        const timeout = setTimeout(() => {
          moveToNextDialogue();
        }, pauseBetweenDialogues);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, currentDialogue, isLoading]);

  const moveToNextDialogue = () => {
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

  const handleChoice = (branch) => {
    setUserChoice(branch);
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
    loadDialogue(
      dialogueStep + 1,
      branch,
      setIsLoading,
      setCurrentDialogue,
      setDialogueStep
    );
  };

  const skipToEnd = () => {
    if (currentDialogue && currentDialogue.type !== "glitch") {
      setDisplayedText(currentDialogue.text);
      setCurrentIndex(currentDialogue.text.length);
      setIsComplete(true);
    }
  };

  return (
    <MeetSarahUI
      isLoading={isLoading && !currentDialogue}
      showGlitch={showGlitch}
      displayedText={displayedText}
      isComplete={isComplete}
      currentDialogue={currentDialogue}
      onSkipToEnd={skipToEnd}
      onChoice={handleChoice}
    />
  );
}
