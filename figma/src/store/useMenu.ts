import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface IMenu {
  activeTab: "aiColors" | "colorWheel";
  setActiveTab: (value: "aiColors" | "colorWheel") => void;
}

const useMenu = create<IMenu>()(
  immer((set) => ({
    activeTab: "aiColors",
    setActiveTab: (value) =>
      set((state) => {
        state.activeTab = value;
      }),
  }))
);

export default useMenu;
