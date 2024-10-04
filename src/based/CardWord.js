/**
 * @param {object} props
 *
 */

import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Common from "../based/Common";
import styled from "styled-components";
import { HeaderIcon } from "./icon/configIcon";

const CardWord = (props) => {
  const {
    item,
    handleOnClick,
    dataBtn,
    handleOnClickBtn,
    showMark,
    showButton,
    handleToast,
    indexItem,
  } = props;

  if (item !== null && item !== undefined && item !== "") {
    return (
      <Card
        style={{
          border: `1px solid ${Common.renderColor(item.type)}`,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className={`relative h-auto min-h-[565px] overflow-hidden rounded-lg group  shadow-md`}
      >
        <CardContent className="h-full  p-0 ">
          <div className="card_header h-[10%] ">
            {showButton && (
              <STT
                bgColor={Common.renderColor(item.type)}
                className={` cursor-pointer`}
                onClick={() => handleOnClick(item.id)}
              >
                <HeaderIcon.Menu width="17" height="17" />
              </STT>
            )}
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
                <div className="space-x-2 text-sm">{item.spelling}</div>
              </h3>
              <p className="font-bold text-color3">{item.meaning}</p>
              <p className="text-muted-foreground italic">{item.describe}</p>
            </div>
          </p>
          <CardExample
            bgColor={Common.renderColor(item.type)}
            className="card_example w-full p-3  h-[25%] "
          >
            <p className="example_english italic">
              {Common.checkWord(item.word, item.example)}
            </p>
            <p className="example_vietnamese italic mt-3">
              {Common.checkWord(item.meaning, item.example_vietnamese)}
            </p>
          </CardExample>
          {showButton && (
            <ButtonWrapperBottom
              bgColor={Common.renderColor(item.type)}
              className={`button_wrapper flex gap-2   justify-between ${
                item.id === showMark ? "flex" : "hidden"
              }  
                  overflow-x-auto scrollbar-hide absolute bottom-0 w-full items-center  p-2  h-[18%]
                  `}
            >
              {dataBtn?.map((itemBtn, indexBtn) => (
                <Button
                  key={itemBtn.id}
                  variant="outline"
                  style={{}}
                  className={`button_action px-4 py-2  bg-background hover:transform hover:scale-105 transition-transform duration-500 ease-in-out hover:text-black-foreground`}
                  onClick={() => {
                    handleToast({
                      title: itemBtn.title,
                      item: item,
                      indexItem: indexItem,
                    });
                    handleOnClickBtn({
                      item: item,
                    });
                  }}
                >
                  {itemBtn.title}
                </Button>
              ))}
            </ButtonWrapperBottom>
          )}
        </CardContent>
      </Card>
    );
  } else {
    return <div>Không có dữ liệu</div>;
  }
};
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

export default CardWord;
