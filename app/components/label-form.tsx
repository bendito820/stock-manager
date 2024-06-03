export default function Label({ text }: { text: string }) {
  return (
    <label className="block mb-2 text-sm font-medium text-zinc-400">
      {text}
    </label>
  );
}
