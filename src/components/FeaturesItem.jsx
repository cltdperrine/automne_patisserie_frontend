export default function FeaturesItem({ icon, title, subtitle }) {
  return (
    <>
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-[#6B240F] ">{icon}</div>

        <div>
          <h3 className="text-[#6B240F] text-sm font-semibold">{title}</h3>

          <p className="mt-1 text-lg text-[#9F9F9F] text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
