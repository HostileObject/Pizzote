import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import InputAdornment from "@material-ui/core/InputAdornment";
import Search from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CloseIcon from "@material-ui/icons/Close";
import Controls from "./controls/controls";
import Popup from "./popup";
import PizzaForm from "./pizzaForm";
import { connect } from "react-redux";
import * as actions from "../actions/pizzaData";

function descendingComparator(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

function getComparator(order, orderBy) {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

const headCells = [
	{ id: "restaurantName", label: "Restaurant Name" },
	{ id: "entryDate", label: "Date" },
	{ id: "waitTime", label: "Time Waited" },
	{ id: "moment", label: "Moment" },
	{ id: "type", label: "Type" },
	{ id: "price", label: "Price" },
	{ id: "rating", label: "Rating" },
	{ id: "comments", label: "Comments" },
	{ id: "Actions", label: "Actions", disableSorting: true },
];

const useStyles = makeStyles({
	root: {
		display: "flex",
		width: "100%",
	},
	table: {
		minWidth: 650,
	},
	container: {
		width: "80%",
		margin: "1% auto",
		backgroundColor: "#222222",
	},
	searchInput: {
		width: "100%",
		margin: "1%",
		marginLeft: 0,
	},
	addButton: {
		margin: "1%",
		padding: "0 2%",
	},
	toolbar: {
		flex: "0 0 80%",
	},
});

const BlueTableCell = withStyles({
	root: {
		color: "#87c9ff",
		// borderBottom: "1px solid #3a3d3f",
	},
})(TableCell);

const GrayTableCell = withStyles({
	root: {
		// color: "#c6c5b6",
		// borderBottom: "1px solid #3a3d3f",
	},
})(TableCell);

function EnhancedTableHead(props) {
	const { order, orderBy, onRequestSort } = props;
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<BlueTableCell key={headCell.id}>
						<TableSortLabel
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : "asc"}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
						</TableSortLabel>
					</BlueTableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

function SearchBar(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Toolbar className={classes.toolbar}>
				<Controls.Input
					className={classes.searchInput}
					label="Search"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<Search />
							</InputAdornment>
						),
					}}
					onChange={props.onChange}
				/>
			</Toolbar>
			<Controls.Button
				className={classes.addButton}
				text="Add Pizza"
				startIcon={<AddIcon />}
				onClick={() => props.setOpenPopup(true)}
			/>
		</div>
	);
}

function DataTable(props) {
	const [currentID, setCurrentID] = useState(0);
	const [recordForEdit, setRecordForEdit] = useState(null);
	const [openPopup, setOpenPopup] = useState(false);
	const [order, setOrder] = useState();
	const [orderBy, setOrderBy] = useState();
	const [filterFn, setFilterFn] = useState({
		fn: (items) => {
			return items;
		},
	});
	const classes = useStyles();

	const rows = props.pizzaDataList;
	const handleRequestSort = (event, property) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSearch = (e) => {
		let target = e.target;
		setFilterFn({
			fn: (items) => {
				if (target.value == "") return items;
				else return items.filter((x) => x.restaurantName.toLowerCase().includes(target.value));
			},
		});
	};

	const checkID = (rowID) => {
		if (rowID !== undefined) {
			return rowID;
		} else {
			return "new-entry";
		}
	};

	const refreshAll = () => {
		setTimeout(() => {
			props.getPizzaData();
		}, 500);
	};

	const onDelete = (rowID) => {
		const onSuccess = () => {
			console.log("Submitted Succefully");
		};
		console.log("deleted");
		props.deletePizzaData(rowID, onSuccess);
		refreshAll();
	};

	const openInPopup = (item) => {
		setRecordForEdit(item);
		setCurrentID(item.id);
		console.log(item.id);
		setOpenPopup(true);
	};
	return (
		<>
			<TableContainer className={classes.container}>
				<SearchBar onChange={handleSearch} setOpenPopup={setOpenPopup} />

				<Table className={classes.table}>
					<EnhancedTableHead
						classes={classes}
						order={order}
						orderBy={orderBy}
						onRequestSort={handleRequestSort}
					/>
					<TableBody>
						{stableSort(filterFn.fn(rows), getComparator(order, orderBy)).map((row) => {
							return (
								<TableRow key={checkID(row.id)}>
									<GrayTableCell component="th">{row.restaurantName}</GrayTableCell>
									<GrayTableCell align="left">{row.entryDate}</GrayTableCell>
									<GrayTableCell align="left">{row.waitTime}</GrayTableCell>
									<GrayTableCell align="left">{row.moment}</GrayTableCell>
									<GrayTableCell align="left">{row.type}</GrayTableCell>
									<GrayTableCell align="left">{row.price}</GrayTableCell>
									<GrayTableCell align="left">{row.rating}</GrayTableCell>
									<GrayTableCell align="left">{row.comments}</GrayTableCell>
									<GrayTableCell>
										<Controls.ActionButton color="primary">
											<EditOutlinedIcon fontSize="small" onClick={() => openInPopup(row)} />
										</Controls.ActionButton>
										<Controls.ActionButton color="secondary">
											<CloseIcon fontSize="small" onClick={() => onDelete(row.id)} />
										</Controls.ActionButton>
									</GrayTableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
			<Popup
				title="Pizza Form"
				openPopup={openPopup}
				{...{ currentID, setCurrentID }}
				setOpenPopup={setOpenPopup}
			>
				<PizzaForm
					recordForEdit={recordForEdit}
					{...{ currentID, setCurrentID }}
					setOpenPopup={setOpenPopup}
				/>
			</Popup>
		</>
	);
}

const mapStateToProps = (state) => ({
	pizzaDataList: state.pizzaData.list,
});

const mapDispatchToProps = {
	getPizzaData: actions.fetchAll,
	deletePizzaData: actions.deletePizza,
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);
