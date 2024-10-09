import { ThumbsUp, Eye } from "lucide-react";

export function LikeAndView() {
  return (
    <div className="flex items-center gap-4 mt-2">
      <button className="px-3 py-1 bg-blue-500 text-white inline-flex gap-2 items-center rounded transition-all hover:bg-blue-600">
        <ThumbsUp className="size-3" />
        <span className="font-semibold text-xs">Thích</span>
      </button>
      <button className="px-3 py-1 bg-gray-200 text-gray-800 inline-flex gap-2 items-center rounded transition-all hover:bg-gray-300">
        <Eye className="size-3" />
        <span className="font-semibold text-xs">100</span>
      </button>
    </div>
  );
}
