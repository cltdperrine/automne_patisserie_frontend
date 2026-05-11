export default function FeaturesItem({ icon, title, subtitle }) {
  return (
    <>
      <div className="flex items-start gap-4">
        <div className="text-[#6B240F] ">{icon}</div>

        <div>
          <h3 className="text-[#6B240F] text-sm text-semibold">{title}</h3>

          <p className="mt-1 text-lg text-[#9F9F9F] text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
