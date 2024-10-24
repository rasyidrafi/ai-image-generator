"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DimensionControlsProps {
  width: number;
  height: number;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
  disabled: boolean;
}

const presets = {
  square: { name: "Square (1:1)", width: 1024, height: 1024 },
  portrait: { name: "Portrait (9:16)", width: 768, height: 1344 },
  landscape: { name: "Landscape (16:9)", width: 1344, height: 768 },
};

export function DimensionControls({
  width,
  height,
  setWidth,
  setHeight,
  disabled,
}: DimensionControlsProps) {
  const handlePresetChange = (preset: keyof typeof presets) => {
    setWidth(presets[preset].width);
    setHeight(presets[preset].height);
  };

  return (
    <div className="w-full space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Preset</Label>
        </div>
        <Select
          disabled={disabled}
          onValueChange={handlePresetChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a preset size" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(presets).map(([key, preset]) => (
              <SelectItem key={key} value={key}>
                {preset.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Width</Label>
          <span className="text-sm text-gray-500">{width}px</span>
        </div>
        <Slider
          min={256}
          max={1440}
          step={8}
          value={[width]}
          onValueChange={([value]) => setWidth(value)}
          disabled={disabled}
          className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500 [&_[role=slider]]:focus:ring-orange-500"
        />
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label>Height</Label>
          <span className="text-sm text-gray-500">{height}px</span>
        </div>
        <Slider
          min={256}
          max={1440}
          step={8}
          value={[height]}
          onValueChange={([value]) => setHeight(value)}
          disabled={disabled}
          className="[&_[role=slider]]:bg-orange-500 [&_[role=slider]]:border-orange-500 [&_[role=slider]]:focus:ring-orange-500"
        />
      </div>
    </div>
  );
}