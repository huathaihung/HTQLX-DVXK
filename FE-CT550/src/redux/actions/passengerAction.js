import {message} from "antd";
import {passengerService} from "../services/passengerService";
import {SET_DETAIL_PASSENGER, SET_LIST_PASSENGER} from "../types/PassengerTypes";
import {getTripPassengerAction} from "./tripAction";

export const getAllPassenger = () => {
	return async (dispatch) => {
		try {
			const result = await passengerService.getAllPassenger();
			if (result.status == 200) {
				dispatch({
					type: SET_LIST_PASSENGER,
					listPassenger: result.data,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getDetailPassenger = (id) => {
	return async (dispatch) => {
		try {
			const result = await passengerService.getDetailPassenger(id);

			if (result.status == 200) {
				let passengerCarNew = result.data.passengerCar.map((item, index) => {
					return {...item, visible: false};
				});

				let detailPassenger = {...result.data, passengerCar: passengerCarNew};

				dispatch({
					type: SET_DETAIL_PASSENGER,
					passengerDetail: detailPassenger,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const updatePassengerAction = (passenger, id, file) => {
	return async (dispatch) => {
		try {
			const result = await passengerService.updatePassenger(passenger, id);
			console.log("update passenger", result);
			if (result.status == 200) {
				message.success("Cập nhật nhà xe thành công");
				dispatch(getAllPassenger());
			}
		} catch (error) {
			message.error("Cập nhật nhà xe thất bại");
			console.log(error);
		}
	};
};

export const updateImagePassengerAction = (id, file) => {
	return async (dispatch) => {
		try {
			const result = await passengerService.updateImagePassenger(id, file);
			console.log("update images passenger", result);
			if (result.status == 200) {
				message.success("Cập nhật hình ảnh xe thành công");
				dispatch(getAllPassenger());
			}
		} catch (error) {
			message.error("Cập nhật hình ảnh xe thất bại");
			console.log(error);
		}
	};
};

export const deletePassenger = (id) => {
	return async (dispatch) => {
		try {
			const result = await passengerService.deletePassenger(id);
			console.log("delete passenger", result);
			if (result.status == 200) {
				message.success("Xóa nhà xe thành công");
				dispatch(getAllPassenger());
			}
		} catch (error) {
			message.error("Xóa nhà xe  thất bại");
			console.log(error);
		}
	};
};

export const createPassenger = (passenger, file) => {
	return async (dispatch) => {
		try {
			const result = await passengerService.createPassenger(passenger);
			console.log("thêm passenger", result);
			if (result.status == 200) {
				dispatch(updateImagePassengerAction(result.data.id, file));
				message.success("Thêm nhà xe thành công");
				dispatch(getAllPassenger());
			}
		} catch (error) {
			message.error("Thêm nhà xe thất bại");
			console.log(error);
		}
	};
};
