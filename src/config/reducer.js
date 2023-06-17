export const initialState = {
  // token: "BQCuRMVZLa_eHcd_gQ75_3WL-OfhVJFVmmF_oVObvpTIvv0ymNpfYRLLHMsdBmLo6qROiEavuYhqf_PIQw8-74cWC5qMraxpqmxnKo1G38ZmCmBcJbnj_9XcxaOwtRFDNZjHkq4C1HW4QsmOhmCMptJXI_-AjHSKt1gZm4LOiJOPIPDL3M23VISzqXXRXN81zCHIzgLoNNgo57LNFEaDcwlX32s5fw",
//   "BQBJHWDph36HC2V0fp_0454ElcLWIewGADKevqcPhBuDOY1ZhPmnXx8NYkxo4Q_qE3V06gWcybTyyAG_4KjuHQjDA1EPkG-LPa6s_tclStT3qA0zQZpOtShLy3i8gRva-1lNJvVjsysvo5vcP8m_PwtCAGEZnHHMHkDKh2-0K5meYGhLki9Cs478apdvNWXLW3daZDZPpDhFH2dLf1KqXaQLoDEEkA",
  token: null,
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);

  // Action => type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
