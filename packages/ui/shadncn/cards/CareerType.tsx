import React from 'react';
import { Briefcase, Lightbulb, Award, GraduationCap } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../base/tooltip';

type CareerTypeProps = {
  type: 'work' | 'side' | 'award' | 'education';
};

const CareerType: React.FC<CareerTypeProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'work':
        return <Briefcase className="h-5 w-5" />;
      case 'side':
        return <Lightbulb className="h-5 w-5" />;
      case 'award':
        return <Award className="h-5 w-5" />;
      case 'education':
        return <GraduationCap className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getMessage = () => {
    switch (type) {
      case 'work':
        return '직장 경력';
      case 'side':
        return '사이드 프로젝트';
      case 'award':
        return '수상 경력';
      case 'education':
        return '교육 이력';
      default:
        return '';
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {getIcon()}
        </TooltipTrigger>
        <TooltipContent>
          <p>{getMessage()}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CareerType;
