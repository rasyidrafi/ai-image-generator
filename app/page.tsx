"use client";

import { useState } from "react";
import { ImageIcon, Sparkles } from "lucide-react";
import { PromptInput } from "@/components/prompt-input";
import { ImageDisplay } from "@/components/image-display";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      setImageUrl(null);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      setImageUrl(data.imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-16 px-4">
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="h-8 w-8 text-orange-400" />
        <h1 className="text-4xl font-serif text-[#2d2d2d]">AI Image Generator</h1>
      </div>

      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        isGenerating={isGenerating}
        onGenerate={handleGenerate}
      />

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <ImageIcon className="h-4 w-4" />
        <span>Generate images using AI</span>
      </div>

      <ImageDisplay imageUrl={imageUrl} isLoading={isGenerating} />
    </main>
  );
}