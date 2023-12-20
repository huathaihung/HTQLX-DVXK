import React, {Fragment, useEffect} from "react";
import {Layout, Menu, Breadcrumb, Table, Input, Space, Popconfirm, Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {deleteUserAction, getUserAction} from "../../redux/actions/UserAction";
import {AudioOutlined, EditOutlined, SearchOutlined, DeleteOutlined, CalendarOutlined, UserAddOutlined} from "@ant-design/icons";
import {SET_MODAL} from "../../redux/types/ModalTypes";
import EditUser from "../../components/Edit/EditUser";
import {OPEN_DRAWER} from "../../redux/types/DrawerTypes";
import AddUser from "../../components/Add/AddUser";

const {Header, Content, Footer, Sider} = Layout;
const {Search} = Input;

export default function AdminUser() {
	const dispatch = useDispatch();
	const {listUser} = useSelector((state) => state.userReducer);
	console.log("file: AdminUser.js ~ line 17 ~ AdminUser ~ listUser", listUser);
	let arrFilterPhone = listUser.map((item) => {
		return {value: item.numberPhone, text: item.numberPhone};
	});
	useEffect(() => {
		dispatch(getUserAction());
	}, []);
	const columns = [
		{
			title: "Tên Người Dùng",
			dataIndex: "name",

			// specify the condition of filtering result
			// here is that finding the name started with `value`
			onFilter: (value, record) => record.name.indexOf(value) === 0,
			sorter: (a, b) => a.name.length - b.name.length,
			sortDirections: ["descend"],
		},
		{
			title: "Email",
			dataIndex: "email",
			defaultSortOrder: "descend",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Số Điện Thoại",
			dataIndex: "numberPhone",
			filters: arrFilterPhone,
			onFilter: (value, record) => record.numberPhone.startsWith(value),
			filterSearch: true,
		},
		{
			title: "Loại Người Dùng",
			dataIndex: "type",
			filters: [
				{
					text: "Admin",
					value: "ADMIN",
				},
				{
					text: "Client",
					value: "CLIENT",
				},
			],
			onFilter: (value, record) => record.type.startsWith(value),
			filterSearch: true,
		},
		{
			title: "Tùy Chọn",

			render: (text, item) => {
				return (
					<Fragment>
						<div>
							<button
								className="mr-3"
								onClick={() => {
									dispatch({
										type: SET_MODAL,
										title: "Chỉnh sửa thông tin",
										content: <EditUser id={item.id} />,
										width: 600,
									});
								}}
							>
								<EditOutlined />
							</button>
							<Popconfirm
								placement="topLeft"
								title={"Bạn có muốn xóa tài khoản này"}
								onConfirm={() => {
									dispatch(deleteUserAction(item.id));
								}}
								okText="Có"
								cancelText="Không"
							>
								<button className="text-red-700">
									<DeleteOutlined />
								</button>
							</Popconfirm>
						</div>
					</Fragment>
				);
			},
		},
	];

	function onChange(pagination, filters, sorter, extra) {
		console.log("params", pagination, filters, sorter, extra);
	}

	const onSearch = (value) => {
		dispatch(getUserAction(value));
	};

	return (
		<Content style={{margin: "0 16px"}}>
			<Breadcrumb style={{margin: "16px 0"}}>
				<Breadcrumb.Item>Admin</Breadcrumb.Item>
				<Breadcrumb.Item>Quản Lý Người Dùng</Breadcrumb.Item>
			</Breadcrumb>
			<div className="site-layout-background" style={{padding: 12, minHeight: 360}}>
				<Search placeholder="Nhập vào tên người dùng" allowClear enterButton="Tìm Kiếm" size="large" onSearch={onSearch} className="mb-3" />
				<Button
					type="primary"
					className="mb-3"
					onClick={() => {
						dispatch({
							type: OPEN_DRAWER,
							title: "Thêm Người Dùng",
							content: <AddUser />,
						});
					}}
				>
					<UserAddOutlined />
					Thêm Người Dùng
				</Button>
				<Table columns={columns} dataSource={listUser} onChange={onChange} />
			</div>
		</Content>
	);
}
