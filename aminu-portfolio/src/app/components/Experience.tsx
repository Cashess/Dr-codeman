import { FC } from 'react';

interface ExperienceItemProps {
  title: string;
  description: string;
  date: string;
  company: string;
  isRightAligned?: boolean; // Optional prop to align the experience item
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  description,
  date,
  company,
  isRightAligned = false,
}) => {
  return (
    <div className="flex justify-between h-48">
      {/* Left-aligned or Right-aligned */}
      <div className={isRightAligned ? 'w-1/3' : 'w-1/3'}>
        {isRightAligned ? null : (
          <>
            {/* JOB TITLE */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            {/* JOB DESCRIPTION */}
            <div className="p-3 text-sm italic">{description}</div>
            {/* JOB DATE */}
            <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
            {/* COMPANY */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </>
        )}
      </div>

      {/* Center - Vertical Line */}
      <div className="w-1/6 flex justify-center">
        <div className="w-1 h-full bg-gray-600 rounded relative">
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>

      {/* Right-aligned content */}
      <div className="w-1/3">
        {isRightAligned && (
          <>
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="p-3 text-sm italic">{description}</div>
            <div className="p-3 text-red-400 text-sm font-semibold">{date}</div>
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperienceItem;
