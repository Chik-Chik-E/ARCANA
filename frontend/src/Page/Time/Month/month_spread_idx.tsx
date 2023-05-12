import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as layer from '../time_style';
import Month from './month_spread';
import MonthStart from './month_spread_animation';
import * as common from '../../Common/common_style';
import Dialog from '../../../Common/dialog';
import charDialog0 from '../../../Assets/characters/charDialog0.png';
import { DialogNPC, OptionBtn } from '../../../Common/common_styled';
import { MonthDetails } from '../../../Common/conversations';
import { useLuckyStore } from '../../../Store/User/lucky';
import { getLuckyCard } from '../../../Common/tarotSelect';
import { API } from '../../../API';

function MonthSpread() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0); // indexpage변화
  const onNext = () => {
    return setIndex(index + 1);
  };
  console.log(index);

  const [modalOpen, setModalOpen] = useState(false); // modal
  const showModal = () => {
    setModalOpen(!modalOpen);
  };

  const { lucky, setLuckyMent, setLucky } = useLuckyStore();
  const MoveLucky = async () => {
    // 럭키카드 api
    await API.get(`/api/v1/tarot/lucky/`).then((res: any) => {
      console.log(res);
      // setLuckyNum(res.data.card.idx);
      // setLuckyName(res.data.card.name);
      console.log('lucky api 결과 : ', res.data);
      setLucky({
        card: res.data.card,
        ment: res.data.luckyment,
      });
      setLuckyMent(res.data.luckyment);
    });
    await navigate('/lucky');
  };

  const text = MonthDetails();
  // console.log(text);

  if (index === 0) {
    return (
      <layer.MainBox>
        <common.SideBlock>
          <MonthStart />
        </common.SideBlock>
        <common.SideBlock>
          <OptionBtn onClick={onNext}>해석보기</OptionBtn>
        </common.SideBlock>
      </layer.MainBox>
    );
  }
  if (index === 1) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>1</common.DefaultCard>
            <common.DefaultCard>2</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page1} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
        </Dialog>
      </>
    );
  }
  if (index === 2) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>3</common.DefaultCard>
            <common.DefaultCard>4</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page2} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
        </Dialog>
      </>
    );
  }
  if (index === 3) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>5</common.DefaultCard>
            <common.DefaultCard>6</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={onNext}>다음</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page3} next={false}>
          <OptionBtn onClick={onNext}>다음</OptionBtn>
        </Dialog>
      </>
    );
  }
  if (index === 4) {
    return (
      <>
        <common.CardArea>
          <common.SideBlock />
          <common.CardBox>
            <common.DefaultCard>7</common.DefaultCard>
          </common.CardBox>
          <common.SideBlock>
            <common.SpreadModal onClick={showModal}>
              <Month />
              {modalOpen ? (
                <common.ModalBackdrop onClick={showModal}>
                  <common.ModalView onClick={(e) => e.stopPropagation()}>
                    <Month />
                    <OptionBtn onClick={showModal}>닫기</OptionBtn>
                  </common.ModalView>
                </common.ModalBackdrop>
              ) : null}
            </common.SpreadModal>
          </common.SideBlock>
        </common.CardArea>
        {/* <common.ChatArea>
          <common.SpreadBtn onClick={MoveLucky}>럭키!</common.SpreadBtn>
        </common.ChatArea> */}
        <DialogNPC src={charDialog0} />
        <Dialog content={text.page4} next={false}>
          <OptionBtn onClick={MoveLucky}>럭키!</OptionBtn>
        </Dialog>
      </>
    );
  }
  return null;
}

export default MonthSpread;
