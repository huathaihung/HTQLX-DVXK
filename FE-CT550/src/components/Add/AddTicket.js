import React, {useEffect} from "react";
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space, TimePicker, Tag} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {getDetailTripPassengerAction, updateTripPassengerAction} from "../../redux/actions/tripAction";
import moment from "moment";
import _ from "lodash";
import {getDetailTicket, updateTicket, createTicket} from "../../redux/actions/ticketAction";
import {CLOSE_DRAWER} from "../../redux/types/DrawerTypes";
const {Option} = Select;

export default function AddTicket(props) {
	const {id} = props;
	const dispatch = useDispatch();
	const {detailTicket} = useSelector((state) => state.TicketReducer);
	console.log("file: AddTicket.js ~ line 15 ~ AddTicket ~ detailTicket", detailTicket);
	useEffect(() => {
		dispatch(getDetailTicket(id));
	}, [id]);
	console.log();
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			id: detailTicket?.id,
			status: detailTicket?.status,
			totalAmount: detailTicket?.totalAmount,
			note: detailTicket?.note,
			user: detailTicket?.user,
			tripPassengerTicket: detailTicket?.tripPassengerTicket,
			createdAt: detailTicket?.createdAt,
			ticketPointId: detailTicket?.ticketPointId,
			ticketSeatId: detailTicket?.ticketSeatId,
			pickUp: `${
				detailTicket?.ticketPointId?.find((obj) => {
					return obj.typePoint == "pickup";
				})?.timepointTicket?.time
			}-${
				detailTicket?.ticketPointId?.find((obj) => {
					return obj.typePoint == "pickup";
				})?.timepointTicket?.point?.name
			}`,
			pickUpId: detailTicket?.ticketPointId?.find((obj) => {
				return obj.typePoint == "pickup";
			})?.id,
			PointpickUpId: detailTicket?.ticketPointId?.find((obj) => {
				return obj.typePoint == "pickup";
			})?.timepointId,
			dropOff: `${
				detailTicket?.ticketPointId?.find((obj) => {
					return obj.typePoint == "dropoff";
				})?.timepointTicket?.time
			}-${
				detailTicket?.ticketPointId?.find((obj) => {
					return obj.typePoint == "dropoff";
				})?.timepointTicket?.point?.name
			}`,
			dropOffId: detailTicket?.ticketPointId?.find((obj) => {
				return obj.typePoint == "dropoff";
			})?.id,
			PointdropOffId: detailTicket?.ticketPointId?.find((obj) => {
				return obj.typePoint == "dropoff";
			})?.timepointId,
			numberPhone: detailTicket?.user?.numberPhone,
			name: detailTicket?.user?.name,
		},

		onSubmit: (values) => {
			let update = {
				status: values.status,
				totalAmount: values.totalAmount,
				note: values.note,
				numberPhone: values.numberPhone,
				name: values.name,
				// userId: values.user.id,
				pickUpId: values.pickUpId,
				dropOffId: values.dropOffId,
				PointpickUpId: values.PointpickUpId,
				PointdropOffId: values.PointdropOffId,
			};
			console.log(update);
			dispatch(updateTicket(detailTicket.id, update));
			dispatch({type: CLOSE_DRAWER});
		},
	});

	const handleChange = (name) => {
		return (e) => {
			formik.setFieldValue(name, e.target.value);
		};
	};
	const handleChangeSelect = (name) => {
		return (value) => {
			formik.setFieldValue(name, value);
		};
	};
	const handleChangeSelectPoint = (setname, setid) => {
		return (value) => {
			formik.setFieldValue(setname, value);
			formik.setFieldValue(setid, value);
		};
	};
	const renderSeat = (ticket) => {
		return ticket?.ticketSeatId?.map((item, index) => {
			return `${item?.seatofticket?.name},tầng ${item?.seatofticket?.floor}`;
		});
	};
	return (
		<Form layout="vertical" name="basic" autoComplete="off">
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Số Vé">
						<Input name="id" placeholder="Vui lòng nhập mã số vé" ></Input>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Ngày đặt">
						<Input style={{width: "100%"}} disabled name="createdAt" value={moment(formik.values.createdAt).format("DD-MM-YYYY h:mm:ss")} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Điểm Đón">
					
                        <Input style={{width: "100%"}} name="pickUpId" placeholder="Vui lòng nhập điểm trả" value={formik.values.pickUpId} />
					</Form.Item>

                    
				</Col>
				<Col span={12}>
					<Form.Item label="Điểm Trả">
						
                        <Input style={{width: "100%"}} name="dropOffId" placeholder="Vui lòng nhập điểm trả" value={formik.values.dropOffId} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Nhân Viên Tạo Vé">
						<Input style={{width: "100%"}} name="user" placeholder="Vui lòng nhập tên người đặt vé" value={formik.values.name} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Số Điện Thoại Khách hàng">
						<Input style={{width: "100%"}} name="numberPhone" placeholder="Vui lòng nhập số điện thoại" value={formik.values.numberPhone} />
					</Form.Item>

					<Form.Item label="Tổng Tiền">
						<Input style={{width: "100%"}} name="totalAmount"  value={formik.values.totalAmount} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item label="Trạng thái thanh toán">
						<Select style={{width: "100%"}}  value={formik.values.status}>
							<Option value="pending">Thanh toán khi lên xe</Option>
							<Option value="confirm">Đã thanh toán với nhân viên</Option>
							<Option value="cancel">Đã hủy</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item label="Số Ghế Đặt">
					<Input name="seat" placeholder="Vui lòng nhập số ghế đặt" ></Input>
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col span={24}>
					<Form.Item
						label="Ghi Chú"
						rules={[
							{
								required: true,
								message: "Vui lòng nhập thông tin ghi chú",
							},
						]}
					>
						<Input.TextArea rows={4} name="note" placeholder="Vui lòng nhập ghi chú" value={formik.values.note} />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					onClick={() => {
						formik.handleSubmit();
					}}
				>
					Thêm vé xe cho khách hàng
				</Button>
			</Form.Item>
		</Form>
	);
}
