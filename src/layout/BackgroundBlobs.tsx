export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
      <div
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full
        bg-pink-200/40 dark:bg-pink-500/20
        blur-[100px] animate-blob
        mix-blend-multiply dark:mix-blend-screen"
      />

      <div
        className="absolute top-[30%] -right-[10%] w-[50%] h-[50%] rounded-full
        bg-purple-200/40 dark:bg-purple-500/20
        blur-[100px] animate-blob animation-delay-2000
        mix-blend-multiply dark:mix-blend-screen"
      />

      <div
        className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] rounded-full
        bg-sky-200/40 dark:bg-blue-600/20
        blur-[100px] animate-blob animation-delay-4000
        mix-blend-multiply dark:mix-blend-screen"
      />
    </div>
  );
}
