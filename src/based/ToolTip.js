import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../components/ui/tooltip';
import { Info } from './icon/configIcon';

const ToolTip = (props) => {
   return (
      <TooltipProvider>
         <Tooltip className="">
            <TooltipTrigger className="border-sky-100 w-[30px]">
               <Info width="20px" height="20px" />
            </TooltipTrigger>
            <TooltipContent>
               <p>{props.content}</p>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
};

export default ToolTip;
