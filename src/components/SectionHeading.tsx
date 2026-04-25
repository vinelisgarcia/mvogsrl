type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.14em] text-gold">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black tracking-tight text-ink md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-4 text-lg text-steel">{body}</p> : null}
    </div>
  );
}
