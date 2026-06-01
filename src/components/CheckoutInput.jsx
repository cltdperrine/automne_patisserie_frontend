export default function CheckoutInput({ label, type = "text", placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#2B2B2B]">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-[52px] rounded-[10px] border border-[#D9D9D9] px-4 outline-none"
      />
    </div>
  );
}
