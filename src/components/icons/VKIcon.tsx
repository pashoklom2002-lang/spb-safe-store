export const VKIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#0077FF"/>
      <path 
        fill="#fff" 
        d="M12.785 16.13c-4.055 0-6.368-2.779-6.466-7.402h2.03c.066 3.392 1.563 4.83 2.748 5.128V8.728h1.91v2.926c1.168-.126 2.394-1.46 2.808-2.926h1.91c-.317 1.805-1.64 3.139-2.58 3.686.94.448 2.46 1.607 3.034 3.716h-2.106c-.447-1.394-1.563-2.472-3.066-2.62v2.62h-.222z"
      />
    </svg>
  );
};
