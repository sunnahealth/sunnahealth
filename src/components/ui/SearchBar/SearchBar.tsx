import { useState } from 'react';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  className?: string;
}

export function SearchBar({
  placeholder = 'Search for products...',
  value: controlledValue,
  onChange,
  onSubmit,
  className = '',
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState('');
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(value);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`
        flex flex-row items-start px-4 py-3 gap-3 flex-1
        bg-[rgba(232,232,232,0.5)] rounded-[62px]
        ${className}
      `}
    >
      {/* Search Icon */}
      <div className="w-6 h-6 flex items-center justify-center">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="text-[#B7B7B7]"
        >
          <path 
            d="M21 21L16.514 16.506M19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent border-none outline-none
          font-['Poppins'] font-normal text-base leading-6
          text-black placeholder:text-[#B7B7B7]
        "
      />
    </form>
  );
}

export default SearchBar;