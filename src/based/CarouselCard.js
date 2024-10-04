import * as React from "react";

import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import styled from "styled-components";
import Common from "./Common";
import { HeaderIcon } from "./icon/configIcon";
import { Button } from "../components/ui/button";

export function CarouselCard(props) {
  const { data } = props;
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {data.map((item, index) => {
          return (
            <CarouselItem>
              <div className="p-1">
                <Card
                  className={`relative h-auto ${
                    props.minHeight
                      ? `min-h-[${props.minHeight}]`
                      : "min-h-[480px]"
                  } overflow-hidden rounded-lg group  shadow-md`}
                >
                  <CardContent className="h-full  p-0 ">
                    <div className="card_header h-[10%] ">
                      {/* {showButton && (
                          <STT
                            bgColor={Common.renderColor(item.type)}
                            className={` cursor-pointer`}
                            onClick={() => handleOnClick(item.id)}
                          >
                            <HeaderIcon.Menu width="17" height="17" />
                          </STT>
                        )} */}
                      <TagName bgColor={Common.renderColor(item.type)}>
                        {item.type.toUpperCase()}
                      </TagName>
                    </div>
                    <p className="h-[70%]">
                      <div className="card_img mt-3 flex justify-center items-center rounded-md w-full h-auto object-cover">
                        <img
                          src={item.img}
                          alt="Serendipity"
                          className="rounded-md w-[120px] min-h-[120px] object-contain"
                        />
                      </div>

                      <div className="card_content p-6 space-y-4">
                        <h3 className="text-2xl ">
                          <div className="font-bold">{item.word}</div>
                          <div className="space-x-2 text-sm">
                            {item.spelling}
                          </div>
                        </h3>
                        {/* <p className="font-bold text-color3">{item.meaning}</p> */}
                        <p className="text-muted-foreground italic">
                          {item.describe}
                        </p>
                      </div>
                    </p>
                    {/* <CardExample
                      bgColor={Common.renderColor(item.type)}
                      className="card_example w-full p-3  h-[25%] "
                    >
                      <p className="example_english italic">
                        {Common.checkWord(item.word, item.example)}
                      </p>
                      <p className="example_vietnamese italic mt-3">
                        {Common.checkWord(
                          item.meaning,
                          item.example_vietnamese
                        )}
                      </p>
                    </CardExample> */}
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
        ;
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const TagName = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  width: 75px;
  text-align: center;
  height: 30px;
  font-weight: 600;
  border-radius: 0 0 0 0.55rem;
  background-color: ${(props) => props.bgColor};
`;

const STT = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0 0 0.55rem 0;
  background-color: ${(props) => props.bgColor};
`;

const ButtonWrapperBottom = styled.div`
  background-color: ${(props) => props.bgColor};
`;

const CardExample = styled.div`
  background-color: ${(props) => props.bgColor};
`;
