import { ADD_NEW_CHART_DATA, ADD_NEW_TABLE_DATA } from "../../Utils/constant";

const intialState = {
  tableData: [],
  pieChartData: [],
};

export const overviewReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_NEW_TABLE_DATA:
      let newData = [...state.tableData];

      newData.push(action.data);

      return {
        ...state,
        tableData: newData,
      };
    case ADD_NEW_CHART_DATA:
      let newChartData = [...state.pieChartData];

      let index = newChartData.findIndex(
        (item) => item.name === action.data.sportActivity
      );

      if (index !== -1) {
        newChartData[index].players = newChartData[index].players + 1;
      } else {
        newChartData.push({
          name: action.data.sportActivity,
          players: 1,
        });
      }

      return {
        ...state,
        pieChartData: newChartData,
      };
    default:
      return state;
  }
};
