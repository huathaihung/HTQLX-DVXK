import {pointService} from "../services/PointService";
import {SET_POINT_DROPOFF, SET_POINT_PICKUP, SET_POINT, SET_POINT_DETAIL, SET_POINTPICK_DETAIL, SET_POINTDROP_DETAIL} from "../types/PointTypes";
import {message} from "antd";

export const getPointPickUpAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getAllPoint(id);

			if (result.status == 200) {
				dispatch({
					type: SET_POINT_PICKUP,
					listPointPickup: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getPointDropoffAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getAllPoint(id);

			if (result.status == 200) {
				dispatch({
					type: SET_POINT_DROPOFF,
					listPointDropoff: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getAllPointByStationAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getAllPoint(id);
			console.log(result);
			if (result.status == 200) {
				dispatch({
					type: SET_POINT,
					listPoint: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getDetailPointAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getDetailPoint(id);
			console.log(result);
			if (result.status == 200) {
				dispatch({
					type: SET_POINT_DETAIL,
					pointDetail: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getDetailPointDropAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getDetailPoint(id);
			console.log(result);
			if (result.status == 200) {
				dispatch({
					type: SET_POINTDROP_DETAIL,
					PointDropDetail: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getDetailPointPickDropAction = (id) => {
	return async (dispatch) => {
		try {
			const result = await pointService.getDetailPoint(id);
			console.log(result);
			if (result.status == 200) {
				dispatch({
					type: SET_POINTPICK_DETAIL,
					PointPickDetail: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updatePointAction = (id, pointUpdate) => {
	return async (dispatch) => {
		try {
			const result = await pointService.updatePoint(id, pointUpdate);
			if (result.status == 200) {
				message.success("Cập nhật địa điểm thành công");
				dispatch(getAllPointByStationAction(pointUpdate.stationId));
			}
		} catch (error) {
			message.error("Cập nhật địa điểm thất bại");
			console.log(error);
		}
	};
};

export const createPointAction = (point) => {
	return async (dispatch) => {
		try {
			const result = await pointService.createPoint(point);
			if (result.status == 200) {
				message.success("Thêm địa điểm thành công");
				dispatch(getAllPointByStationAction(point.stationId));
			}
		} catch (error) {
			message.error("Thêm địa điểm thất bại");
			console.log(error);
		}
	};
};

export const deletePointAction = (id, stationId) => {
	return async (dispatch) => {
		try {
			const result = await pointService.deletePoint(id);
			if (result.status == 200) {
				message.success("Xóa địa điểm thành công");
				dispatch(getAllPointByStationAction(stationId));
			}
		} catch (error) {
			message.error("Xóa địa điểm thất bại");
			console.log(error);
		}
	};
};
