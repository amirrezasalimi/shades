import { useQuery } from "@tanstack/react-query";
import { NetworkMessages } from "@common/network/messages";
import { api } from "../utils/trpc-client";

const useAuth = () => {
    const user = useQuery({
        queryKey: ["auth"],
        queryFn: async () => {
            const currentUser = await NetworkMessages.CURRENT_USER.request();
            if (!currentUser) {
                return null;
            }
            return await api.figma.checkUser.mutate({
                data: {
                    id: currentUser.id,
                    name: currentUser.name,
                    color: currentUser.color,
                    photo: currentUser.photoUrl,
                    sessionId: currentUser.sessionId
                }
            }).catch((e) => {
                return null;
            })
        },
    });
    return {
        user
    }
}

export default useAuth;