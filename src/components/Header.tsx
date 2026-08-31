import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/princebyte-logo.png"
            alt="PrinceByte Innovations"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              PrinceByte Innovations
            </p>
            <p className="text-xs text-slate-500">
              AI Readiness Assessment
            </p>
          </div>
        </Link>

        <span className="hidden text-xs font-medium uppercase tracking-wider text-slate-400 sm:block">
          Test What You Really Know
        </span>
      </div>
    </header>
  );
}