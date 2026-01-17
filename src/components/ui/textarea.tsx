import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = ({ label, ...props }: TextareaProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 min-h-[120px]"
      />
    </div>
  );
};