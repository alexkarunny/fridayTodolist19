import { Dispatch } from "redux";
import { appActions } from "app/app.reducer";
import { BaseResponseType } from "common/types/common.types";

/**
 * Обрабатывает ошибку сервера и выполняет соответствующие действия.
 *
 * @template D - тип данных в ответе сервера
 * @param {BaseResponseType<D>} data - Ответ сервера
 * @param {Dispatch} dispatch - Функция диспетчера для отправки действий в Redux store
 * @param {boolean} [isShow=true] - Флаг, определяющий, нужно ли показывать ошибку пользователю. По умолчанию true.
 * @returns {void}
 */

export const handleServerAppError = <D>(data: BaseResponseType<D>, dispatch: Dispatch, isShow: boolean = true) => {
  if (isShow) {
    dispatch(appActions.setAppError({ error: data.messages.length ? data.messages[0] : "Some error occurred" }));
  }
  //dispatch(appActions.setAppStatus({ status: "failed" }));
};
