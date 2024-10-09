export function TitleH2({ text }: { text: string }) {
  return (
    <h2 className="mb-6 border-l-[4px] border-l-blue-800 pl-2 text-xl uppercase font-semibold text-gray-600 max-sm:hidden">
      {text}
    </h2>
  );
}
