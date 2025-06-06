import {
  Button,
  ButtonLayout,
  Chip,
  CommonButton,
  IconLabel,
} from "@linenow/core/components";
import { useModal } from "@linenow/core/hooks";

// interfaces
import { Waiting } from "@interfaces/waiting";

// components
import * as S from "./MainWaitingCard.styled";
import { modalCancelWaiting } from "@components/modal/waiting";

// hooks
import { usePostWaitingAction } from "@hooks/apis/boothManaging";
import { useMainWaitingCard } from "./_hooks/useMainWaitingCard";

interface MainWaitingCardProps {
  waiting: Waiting;
}

const MainWaitingCard = ({ waiting }: MainWaitingCardProps) => {
  const { openModal } = useModal();

  const { mutate: postWaitingAction } = usePostWaitingAction();

  const handleCancelWaitingButton = () => {
    const modal = modalCancelWaiting(waiting.user.name, () => {
      postWaitingAction({
        waitingID: waiting.waitingID,
        action: "manager-cancel",
      });
    });
    openModal(modal);
  };

  //전화번호 복사
  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText(waiting.user.phoneNumber).then(() => {
      alert("전화번호가 복사되었습니다!");
    });
  };

  const config = useMainWaitingCard({
    waitingID: waiting.waitingID,
    waitingNum: waiting.waitingNum,
    userName: waiting.user.name,
    waitingStatus: waiting.waitingStatus,
    confirmedAt: waiting.confirmedAt,
  });

  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);

    const year = date.getFullYear();
    const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "오후" : "오전";

    const formattedHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

    return `${ampm} ${formattedHours}시 ${minutes}분 · ${year}년 ${month}월 ${day}일`;
  };

  return (
    <S.MainWaitingCardWrapper
      $backgroundColor={config.backgroundColor}
      style={{
        opacity: config.userInfoOpacity ?? 1,
      }}
    >
      <S.MainWaitingCardContentWrapper>
        <S.MainWaitingCardHeader>
          <span className="waitingNum">
            {waiting.waitingNum.toString().padStart(3, "0")}
          </span>
          <span className="waitingTime">{formatDate(waiting.createdAt)}</span>

          {config.isValidate ? (
            <CommonButton onClick={handleCancelWaitingButton}>
              <Chip variant="outline">대기취소</Chip>
            </CommonButton>
          ) : null}
        </S.MainWaitingCardHeader>

        <S.MainWaitingCardInfoBox>
          <S.MainWaitingCardPartySizeInfo>
            <label>입장인원</label>
            <span
              className="partySize"
              style={{
                color: `${config.partySizeColor}`,
              }}
            >
              {waiting.personNum}명
            </span>
          </S.MainWaitingCardPartySizeInfo>

          <S.MainWaitingCardUserInfo>
            <span className="userName">{waiting.user.name}</span>
            <IconLabel
              icon="phone"
              iconProps={{ size: 16, color: "gray" }}
              gap="0.25rem"
              font="body3"
              color="gray"
            >
              <span
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleCopyPhoneNumber}
              >
                {waiting.user.phoneNumber}
              </span>
            </IconLabel>
          </S.MainWaitingCardUserInfo>
        </S.MainWaitingCardInfoBox>

        <ButtonLayout
          colCount={config.secondButton ? 2 : 1}
          colTemplate={config.secondButton ? "1fr 6.25rem" : ""}
        >
          <Button size="medium" {...config.primaryButton} />

          {config.secondButton && (
            <Button size="medium" {...config.secondButton} />
          )}
        </ButtonLayout>
      </S.MainWaitingCardContentWrapper>
    </S.MainWaitingCardWrapper>
  );
};

export default MainWaitingCard;
