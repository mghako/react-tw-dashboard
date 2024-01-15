export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900 ` + className}>
            {value ? value : children}
        </label>
    );
}
