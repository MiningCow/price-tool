import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "../mock/InitialComponentGroups";
import ComponentGroupType from "../types/ComponentGroupType";
import ComponentType from "../types/ComponentType";

export const counterSlice = createSlice({
  name: "components",
  initialState,
  reducers: {
    updateComponentGroup: (state, action: PayloadAction<ComponentGroupType>) => {
      state[action.payload.id] = {
        id: action.payload.id,
        title: action.payload.title,
        components: state[action.payload.id].components
      };
    },
    updateComponentGroupTitle: (state, action: PayloadAction<Omit<ComponentGroupType, "components">>) => {
      state[action.payload.id].title = action.payload.title;
    },
    deleteComponentGroup: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
    },
    deleteComponent: (state, action: PayloadAction<{componentGroupId: string, componentId: string}>) => {
      delete state[action.payload.componentGroupId].components[action.payload.componentId];
    },
    updateComponents: (state, action: PayloadAction<{componentGroupId: string, component: ComponentType}>) => {
      state[action.payload.componentGroupId].components[action.payload.component.id] = action.payload.component;
    }
  },
});

// Action creators are generated for each case reducer function
export const { deleteComponentGroup, updateComponentGroup, updateComponentGroupTitle, deleteComponent, updateComponents } = counterSlice.actions;

export default counterSlice.reducer;