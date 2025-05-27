'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-50">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin"></div>
        <div className="mt-4 text-center text-gray-600 dark:text-gray-300">Loading...</div>
      </div>
    </div>
  );
} 