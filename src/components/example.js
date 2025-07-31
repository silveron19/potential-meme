// Example Component

// Reusable Button Component
const Button = ({ label, onClick, type = 'button', style = {} }) => (
    <button type={type} onClick={onClick} style={{ padding: '8px 16px', borderRadius: '4px', ...style }}>
        {label}
    </button>
);

export default Button;