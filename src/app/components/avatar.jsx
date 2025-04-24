export default function Avatar({ src, alt }) {
  return (
    <div className="size-[60px] mb-[20px]">
      <img className="rounded-4xl" src={src} alt={alt} />
    </div>
  );
}
