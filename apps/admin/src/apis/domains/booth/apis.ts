// api method
import { getResponse } from "@apis/instance";

// types
import { Waiting } from "@interfaces/waiting";
import {
  GetWaitingsResponse,
  transformGetWaitingsResponse,
} from "./_interfaces";
import { WaitingStatusParams } from "@linenow-types/status";

// get waitings : - 부스 예약 상태 전체 조회
export const getWaitings = async (
  status: WaitingStatusParams
): Promise<Waiting[]> => {
  const response = await getResponse<GetWaitingsResponse>(
    status != undefined
      ? `/api/v1/manager/booth/${status}`
      : `/api/v1/manager/booth`
  );
  return response ? transformGetWaitingsResponse(response) : [];
};
