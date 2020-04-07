import { message } from "antd";
import service from "./tntdService";

export default {
	namespace: "demo",
	state: {

	},
	effects: {
		*getSolutionList({ payload }, { call, put, select }) {
			const { id } = yield select(state => state.demo);
			const res = yield call(service.getSolutionList, payload);

			yield put({
				type: "updateState",
				payload: {
					list: res
				}
			});
		}
	},
	reducers: {
		updateState(state, { payload }) {
			return {
				...state,
				...payload
			};
		}
	}
};
