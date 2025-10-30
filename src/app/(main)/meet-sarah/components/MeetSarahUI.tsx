import Link from "next/link";

export default function MeetSarahUI({
  isLoading,
  showGlitch,
  displayedText,
  isComplete,
  currentDialogue,
  onSkipToEnd,
  onChoice,
}) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-10">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border border-gray-300 rounded shadow-lg p-8 mt-5">
      <h2 className="text-red-700 font-bold text-xl mb-4 border-b border-gray-300 pb-2">
        Sarah
      </h2>

      <div className="min-h-[150px] relative">
        {showGlitch ? (
          <div className="text-center py-12">
            <div
              className="text-6xl animate-pulse opacity-50"
              style={{ animation: "glitch 0.3s infinite" }}
            >
              ⚠️
            </div>
            <p className="text-red-600 mt-4 font-mono animate-pulse">
              [SIGNAL INTERFERENCE DETECTED]
            </p>
          </div>
        ) : (
          <>
            <p className="text-gray-800 leading-relaxed text-lg">
              {displayedText}
              {!isComplete && (
                <span className="inline-block w-1 h-5 bg-blue-600 ml-1 animate-pulse" />
              )}
            </p>

            {!isComplete && currentDialogue.type !== "question" && (
              <button
                onClick={onSkipToEnd}
                className="absolute bottom-0 right-0 text-blue-600 text-sm hover:text-blue-800 transition-colors underline"
              >
                Continue →
              </button>
            )}

            {currentDialogue.type === "dialogue-end" && isComplete && (
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="bg-blue-600 text-white px-6 py-2 mt-8 rounded hover:bg-blue-700 transition-colors"
                >
                  Return Home
                </Link>
              </div>
            )}

            {isComplete && currentDialogue.type === "question" && (
              <div className="mt-6 flex gap-4 justify-center">
                {currentDialogue.choices.map((choice, idx) => (
                  <button
                    key={idx}
                    onClick={() => onChoice(choice.branch)}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    {choice.text}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
