import { Check, Copy } from 'lucide-react';

type CopyCodeButtonProps = {
  code: string;
};

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  return (
    <button
      className="copy-btn flex cursor-pointer items-center gap-1.5 border border-gray-800 px-2 py-0.5 font-mono text-[9px] uppercase tracking-tighter text-gray-400 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-white hover:shadow-[0_0_8px_rgba(125,29,99,0.3)] active:scale-95"
      data-copy-code={encodeURIComponent(code)}
      data-copy-state="idle"
      type="button"
    >
      <Copy className="h-3 w-3" data-copy-icon-idle />
      <Check className="hidden h-3 w-3 text-green-400" data-copy-icon-success />
      <span
        data-copy-label
        data-copy-label-idle="SKOPIUJ KOD"
        data-copy-label-success="SKOPIOWANO!"
      >
        SKOPIUJ KOD
      </span>
    </button>
  );
}