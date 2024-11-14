export default function Button({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) {
  return (
    <button
      className={`flex justify-center items-center gap-2 py-4 px-7 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${(backgroundColor, textColor, borderColor)}`
        : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}
    `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="right arrow icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </button>
  );
}
