import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export default function Twittes() {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Twittes</h4>
        {tags.map((tag) => (
          <>
            <div
              key={tag}
              className="text-sm border h-24 rounded-lg bg-black/70 p-2 text-white"
            >
              {tag}
            </div>
            {/* <Separator className="my-2" /> */}
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
