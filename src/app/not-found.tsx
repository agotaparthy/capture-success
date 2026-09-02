import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="log">404</p>
      <h1 className="h-hero mt-3 max-w-[14ch]">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="prose mt-4">
        Plenty of things around here are still getting built — that&apos;s kind
        of the point. The page you want isn&apos;t one of them.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn">
          Back to the homepage
        </Link>
        <Link href="/accelerator" className="btn btn-line">
          See the accelerator
        </Link>
      </div>
    </section>
  );
}
