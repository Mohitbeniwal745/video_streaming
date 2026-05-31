import type { FC } from 'react';

export const Logo: FC = () => {
    return (
        <div className="flex items-center justify-center">
            <img 
                src="/onlylogo.png" 
                alt="VidTube Logo" 
                className="w-[45px] h-[45px] object-contain rounded-lg border border-orange-500/20"
            />
        </div>
    );
};
