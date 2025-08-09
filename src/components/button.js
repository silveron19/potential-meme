const CustomButton = ({
  icon,
  text,
  variant = 'fill',
  bgcolor,
  textColor,
  borderColor = 'border-black',
  width,
  height,
  onClick,
  type = 'button',
  children,
  ...props
}) => {
  const baseStyles =
    'py-2 px-3 rounded flex items-center justify-center font-semibold text-sm';
  const iconStyles = 'mr-2 text-xl';
  const localTextColor =
    textColor || (variant === 'fill' ? 'text-white' : 'text-black');

  const variantStyles =
    variant === 'fill'
      ? `${bgcolor} ${localTextColor}`
      : `border ${borderColor} ${localTextColor} bg-white`;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles} cursor-pointer`}
      style={{
        ...(width ? { width } : {}),
        ...(height ? { height } : {}),
      }}
      onClick={onClick}
      {...props}
    >
      {children}
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
