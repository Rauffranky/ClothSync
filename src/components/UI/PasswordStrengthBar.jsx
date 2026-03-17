import React from 'react';

const PasswordStrengthBar = ({ password }) => {
    const getStrength = (pass) => {
        let score = 0;
        if (!pass) return 0;

        if (pass.length >= 8) score += 1;
        if (/[A-Z]/.test(pass)) score += 1;
        if (/[a-z]/.test(pass)) score += 1;
        if (/[0-9]/.test(pass)) score += 1;
        if (/[^A-Za-z0-9]/.test(pass)) score += 1;

        return score;
    };

    const score = getStrength(password);

    const getColor = () => {
        if (score === 0) return 'bg-gray-200';
        if (score <= 2) return 'bg-red-500';
        if (score <= 3) return 'bg-orange-500';
        return 'bg-green-500';
    };

    const getLabel = () => {
        if (score === 0) return '';
        if (score <= 2) return 'Weak';
        if (score <= 3) return 'Medium';
        return 'Strong';
    };

    const widthPercent = Math.min(100, (score / 5) * 100);

    return (
        <div className="w-full mt-2">
            <div className="h-1.5 w-full bg-gray-200 dark:bg-[#465064] rounded-full overflow-hidden">
                <div
                    className={`h-full ${getColor()} transition-all duration-300 ease-out`}
                    style={{ width: `${widthPercent}%` }}
                />
            </div>
            {password && (
                <p className={`text-xs mt-1 text-right font-medium ${score <= 2 ? 'text-red-500' : score <= 3 ? 'text-orange-500' : 'text-green-600'}`}>
                    {getLabel()}
                </p>
            )}
        </div>
    );
};

export default PasswordStrengthBar;
