import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
// import postReducer from "./post/post.reducer";
// import categoryReducer from "./category/category.reducer";
// import tagReducer from "./tag/tag.reducer";
// import languageReducer from "./language/language.reducer";
// import eventsReducer from "./event/event.reducer";
// import eventTagReducer from "./event_tag/event_tag.reducer";
// import settingReducer from "./setting/setting.reducer";
// import propertyReducer from "./property/property.reducer";
// import mediaReducer from "./media/media.reducer";

const rootReducer = combineReducers({
  authReducer,
  // postReducer,
  // languageReducer,
  // categoryReducer,
  // tagReducer,
  // eventsReducer,
  // eventTagReducer,
  // settingReducer,
  // propertyReducer,
  // mediaReducer,
});

export default rootReducer;
