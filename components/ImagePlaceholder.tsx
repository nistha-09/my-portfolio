type ImagePlaceholderProps = {
  label: string;
  aspect?: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${aspect} ${className} flex items-center justify-center rounded-lg border border-dashed border-line bg-accentmuted/30 text-center`}
    >
      <span className="px-4 text-sm text-muted">{label}</span>
    </div>
  );
}
