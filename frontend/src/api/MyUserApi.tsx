import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react"
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


type CreateUserRequest = {
    auth0Id: string;
    email: string;
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    const CreateMyUserRequest = async (user: CreateUserRequest) => {

        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        console.log(response)
        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    }
    const {
        mutateAsync: createUser,
        isLoading,
        isError,
        isSuccess,
    } = useMutation(CreateMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    }
}

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    const GetMyUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user");
        }

        return response.json()
    }

    const {
        data: currentUser,
        isLoading,
        error,
    } = useQuery("fetchCurrentUser", GetMyUserRequest)

    if (error) {
        toast.error(error.toString());
    }


    return { currentUser, isLoading }
}


type UpdateMyUserRequest = {
    name: string;
    address: string;
    city: string;
    country: string;
}
export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0()

    const UpdateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        const accessToken = await getAccessTokenSilently()

        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })

        if (!response.ok) {
            throw new Error("Failed to update user");
        }
        return response.json()
    }

    const {
        mutateAsync: updateUser,
        isLoading,
        isSuccess,
        error,
        reset,
    } = useMutation(UpdateMyUserRequest)

    if (isSuccess) {
        toast.success("User profile updated!")
    }

    if (error) {
        toast.error(error.toString())
        reset()
    }

    return { updateUser, isLoading }
}