const CustomButton = ({
  icon,
  text,
  variant = 'fill',
  bgcolor = 'bg-red-600',
  textColor = 'text-white',
  borderColor = 'border-red-600',
  width,
  height,
}) => {
  const baseStyles = 'py-2 px-3 rounded flex items-center justify-center';
  const iconStyles = 'mr-2 text-xl';

  const variantStyles =
    variant === 'fill'
      ? `${bgcolor} ${textColor}`
      : `border ${borderColor} ${textColor}`;

  return (
    <button
      className={`${baseStyles} ${variantStyles}`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      }}
    >
      {icon && (
        <span className={iconStyles}>
          {typeof icon === 'string' ? icon : icon}
        </span>
      )}
      {text}
    </button>
  );
};

export default CustomButton;
