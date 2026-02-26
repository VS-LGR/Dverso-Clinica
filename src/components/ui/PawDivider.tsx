import { PawPrint } from "@/components/ui/PawPrint";

export function PawDivider() {
  return (
    <div
      className="flex items-center justify-center gap-4 py-6 bg-transparent"
      aria-hidden
    >
      <PawPrint size={20} animate="float" className="opacity-50" animationDelay="0s" />
      <PawPrint size={16} animate="float" className="opacity-40" animationDelay="0.3s" />
      <PawPrint size={20} animate="float" className="opacity-50" animationDelay="0.6s" />
      <PawPrint size={14} animate="float" className="opacity-40" animationDelay="0.9s" />
      <PawPrint size={20} animate="float" className="opacity-50" animationDelay="1.2s" />
    </div>
  );
}
