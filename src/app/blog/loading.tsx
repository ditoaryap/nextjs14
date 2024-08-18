export default function Loading() {
  console.log("Loading component rendered");
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="text-2xl font-semibold">Loading...</div>
    </div>
  );
}
