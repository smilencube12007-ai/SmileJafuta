function ValueCard({ title, description }) {
  return (
    <div className="bg-white min-h-[327px] px-8 py-10">
      <h2 className="text-center text-2xl font-bold text-[#252525]">
        {title}
      </h2>

      <div className="w-24 h-px bg-[#333333] mx-auto mt-4 mb-6"></div>

      <p className="text-[16px] leading-[29px] text-[#333333]">
        {description}
      </p>
    </div>
  );
}

export default ValueCard;
