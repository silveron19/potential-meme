const CustomButton = ({
  icon,
  text,
  variant = "fill",
  bgcolor = "bg-red-600",
  textColor,
  borderColor = "border-black",
  width,
  height,
  onClick,
}) => {
  const baseStyles = "py-2 px-3 rounded flex items-center justify-center";
  const iconStyles = "mr-2 text-xl";
  const localTextColor =
    textColor || (variant === "fill" ? "text-white" : "text-black");

  const variantStyles =
    variant === "fill"
      ? `${bgcolor} ${localTextColor}`
      : `border ${borderColor} ${localTextColor} bg-white`;

  return (
    <button
      className={`${baseStyles} ${variantStyles} cursor-pointer`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      }}
      onClick={onClick}
    >
      {icon && (
        <span className={iconStyles}>
          {typeof icon === "string" ? icon : icon}
        </span>
      )}
      {text}
    </button>
  );
};

export default CustomButton;
