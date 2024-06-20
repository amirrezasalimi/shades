import { NetworkMessages } from "@common/network/messages";
import { useQuery } from "@tanstack/react-query"
import { api } from "@ui/shared/utils/trpc-client";
const useView = () => {
    const data = useQuery({
        queryKey: ["page-view"],
        queryFn: async () => {
            const currentUser = await NetworkMessages.CURRENT_USER.request();
            if (!currentUser) return null;
            return api.figma.viewPlugin.mutate({
                uid: currentUser.id,
            });
        }
    })

}

export default useView;