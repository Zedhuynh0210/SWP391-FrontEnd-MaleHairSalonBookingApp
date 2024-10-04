import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        noun: "border-transparent bg-noun text-noun-foreground hover:bg-noun/80",
        verb: "border-transparent bg-verb text-verb-foreground hover:bg-verb/80",
        adj: "border-transparent bg-adj text-adjective-foreground hover:bg-adjective/80",
        adverb:
          "border-transparent bg-adverb text-adverb-foreground hover:bg-adverb/80",
        preposition:
          "border-transparent bg-preposition text-preposition-foreground hover:bg-preposition/80",
        wordKnow:
          "border-transparent bg-wordKnow text-wordKnow-foreground hover:bg-wordKnow/80",
        wordRemember:
          "border-transparent bg-wordRemember text-wordRemember-foreground hover:bg-wordRemember/80",
        flashCard:
          "border-transparent bg-flashCard text-flashCard-foreground hover:bg-flashCard/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
