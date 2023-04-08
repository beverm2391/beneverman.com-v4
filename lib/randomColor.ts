export const randomColor = (): string => {
    const colors = [
        'bg-green-500',
        'bg-blue-500',
        'bg-yellow-500',
        'bg-red-500',
        'bg-purple-500',
        'bg-pink-500',
        'bg-indigo-500',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
};