"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  isGenerating: boolean;
  onGenerate: () => void;
}

export function PromptInput({
  prompt,
  setPrompt,
  isGenerating,
  onGenerate,
}: PromptInputProps) {
  return (
    <div className="w-full max-w-2xl flex gap-2">
      <Input
        placeholder="Enter your image prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="flex-1 bg-white"
        disabled={isGenerating}
      />
      <Button
        onClick={onGenerate}
        disabled={!prompt || isGenerating}
        className="bg-orange-500 hover:bg-orange-600"
      >
        {isGenerating ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating
          </>
        ) : (
          "Generate"
        )}
      </Button>
    </div>
  );
}