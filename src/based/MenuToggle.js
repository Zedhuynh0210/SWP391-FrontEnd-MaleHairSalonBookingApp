import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../components/ui/collapsible";
import { Link } from "react-router-dom";

export default function MenuToggle(props) {
  const { data, onSelect } = props;
  return (
    <>
      {data.map((item, index) => (
        <Collapsible className="group">
          <CollapsibleTrigger className="w-full flex items-center justify-between rounded-md px-4 py-2 font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[state=open]:bg-muted data-[state=open]:text-muted-foreground">
            <span>{item.title}</span>
            <ChevronRightIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-90" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1">
            {item.subMenu.map((subItem, subIndex) => (
              <div
                onClick={() =>
                  onSelect({
                    selected: item.id,
                    selectedSub: subItem.id,
                  })
                }
                className="cursor-pointer block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                {subItem.title}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
