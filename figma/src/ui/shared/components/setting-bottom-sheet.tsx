import { FC, useEffect } from "react";
import settings from "@ui/assets/settings.svg";
import x from "@ui/assets/x-icon.svg";
import ToggleSwitch from "@ui/shared/components/toggle-switch";
import { NetworkMessages } from "@common/network/messages";
import { useMutation, useQuery } from "@tanstack/react-query";
import { PluginSettings } from "@common/models/settings";
import clsx from "clsx";

interface Toggle {
  isOpen: boolean;
  showBottomSheet: (isOpen: boolean) => void;
}

const Setting: FC<Toggle> = ({ showBottomSheet, isOpen }) => {
  const settingsQuery = useQuery({
    queryKey: ["settings", isOpen],
    queryFn: async () => {
      return await NetworkMessages.GET_SETTINGS.request();
    },
  });
  useEffect(() => {
    if (settingsQuery.data) {
      settingsQuery.refetch();
    }
  }, [isOpen]);

  const setSettings = useMutation({
    mutationFn: async (data: PluginSettings) => {
      return await NetworkMessages.SET_SETTINGS.request(data);
    },
    onMutate(variables) {
      setTimeout(() => {
        settingsQuery.refetch();
      }, 0);
    },
  });

  return (
    <>
      {isOpen && (
        <div
          onClick={() => showBottomSheet(false)}
          className="top-0 right-0 bottom-0 left-0 z-30 fixed bg-black bg-opacity-60"
        />
      )}

      <div
        className={clsx(
          "fixed z-40 rounded-t-2xl bg-white left-0 right-0 w-full transition-transform duration-200 ease-linear p-6",
          isOpen ? "animate-slide-up" : "animate-slide-down"
        )}
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img width={20} src={settings} alt="setting icon" />
              <span className="font-medium">Import settings</span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => showBottomSheet(false)}
            >
              <img width={24} src={x} alt="x icon" />
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 mb-4">
            <div className="">
              <div className="font-medium">Add color to the Style</div>
              <div className="font-light text-gray-400 text-xs">
                It helps you add all the colors to the styles.
              </div>
            </div>
            <ToggleSwitch
              checked={settingsQuery.data?.addToStyle ?? true}
              onChange={(value) => {
                setSettings.mutate({
                  addToStyle: value,
                  addToVariables: !!settingsQuery.data?.addToVariables,
                });
              }}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="">
              <div className="font-medium">Add color to the Variable</div>
              <div className="font-light text-gray-400 text-xs">
                This feature adds all colors to the tokens.
              </div>
            </div>
            <ToggleSwitch
              checked={settingsQuery.data?.addToVariables || false}
              onChange={(value) => {
                setSettings.mutate({
                  addToStyle: !!settingsQuery.data?.addToStyle,
                  addToVariables: value,
                });
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
