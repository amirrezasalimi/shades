import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IBottomsheet {
  toggleBottomSheet: boolean;
  setToggleBottomSheet: (value: boolean) => void;
}

const useBottomsheet = create<IBottomsheet>()(
  immer((set) => ({
    toggleBottomSheet: false,
    setToggleBottomSheet: (value) =>
      set((state) => {
        state.toggleBottomSheet = value;
      }),
  }))
);

export default useBottomsheet;
