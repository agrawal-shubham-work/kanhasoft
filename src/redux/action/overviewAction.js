import { ADD_NEW_CHART_DATA, ADD_NEW_TABLE_DATA } from "../../Utils/constant";

export const addNewFormDataAction = (data) => {
  return (dispatch) => {
    dispatch(addNewChartData(data));
    dispatch(addNewTableData(data));
  };
};

export const addNewChartData = (data) => {
  return {
    type: ADD_NEW_CHART_DATA,
    data,
  };
};

export const addNewTableData = (data) => {
  return {
    type: ADD_NEW_TABLE_DATA,
    data,
  };
};
