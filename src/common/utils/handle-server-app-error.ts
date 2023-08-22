import { Dispatch } from "redux";
import { appActions } from "app/app.reducer";
import { BaseResponseType } from "common/types/common.types";

/**
 *
 * @param data
 * @param dispatch
 * @param isShow
 */

export const handleServerAppError = <D>(data: BaseResponseType<D>, dispatch: Dispatch, isShow: boolean = true) => {
  if (isShow) {
    dispatch(appActions.setAppError({ error: data.messages.length ? data.messages[0] : "Some error occured" }));
  }
  dispatch(appActions.setAppStatus({ status: "failed" }));
};
