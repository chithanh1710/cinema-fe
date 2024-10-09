"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [activeItem, setActiveItem] = useState("");
  const [location, setLocation] = useState("");
  const [movie, setMovie] = useState("");
  const [showTime, setShowTime] = useState("");
  return (
    <div className="container_custom mt-16">
      <div className="rounded-xl border-t-[6px] border-orange-600 shadow-md bg-white p-4 mb-4">
        <Image
          width={150}
          height={300}
          alt="Ảnh mẫu"
          src="/video-img-blank.svg"
          className="w-32 aspect-[2/3] rounded"
        />
      </div>
      <Accordion
        className="flex flex-col gap-4"
        value={activeItem}
        onValueChange={setActiveItem}
        type="single"
        collapsible
      >
        <AccordionItem
          className="bg-white p-4 shadow-md rounded"
          value="item-1"
        >
          <AccordionTrigger className="text-xl font-semibold">
            Chọn vị trí {location && `- ${location}`}
          </AccordionTrigger>
          <AccordionContent className="flex gap-2 flex-wrap">
            <Button
              onClick={() => {
                setLocation("TP Hồ Chí Minh");
                setActiveItem("item-2");
              }}
              variant="outline"
              className={`${
                location === "TP Hồ Chí Minh" &&
                "bg-blue-800 text-white font-medium"
              } transition-all duration-500 hover:bg-blue-800 hover:text-white hover:font-medium`}
            >
              TP Hồ Chí Minh
            </Button>
            <Button
              variant="outline"
              className="transition-all duration-500 hover:bg-blue-800 hover:text-white hover:font-medium"
            >
              TP Hồ Chí Minh
            </Button>
            <Button
              variant="outline"
              className="transition-all duration-500 hover:bg-blue-800 hover:text-white hover:font-medium"
            >
              TP Hồ Chí Minh
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="bg-white p-4 shadow-md rounded"
          value="item-2"
        >
          <AccordionTrigger className="text-xl font-semibold">
            Chọn phim
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="bg-white p-4 shadow-md rounded"
          value="item-3"
        >
          <AccordionTrigger className="text-xl font-semibold">
            Chọn suất
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
