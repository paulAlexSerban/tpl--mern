import { useQuery, useMutation, useQueryClient, UseMutationResult } from '@tanstack/react-query';
import customFetch from '../utils';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';
import { Task } from '../types.d';

// Fetch tasks hook
export const useFetchTasks = () => {
    const { isPending, data, isError } = useQuery<{ taskList: Task[] }, Error>({
        queryKey: ['tasks'],
        queryFn: async () => {
            const { data } = await customFetch.get<{ taskList: Task[] }>('/');
            return data;
        },
    });
    return { isPending, isError, data };
};

// Create task hook
export const useCreateTask = (): {
    createTask: (taskTitle: { title: string }, options?: { onSuccess?: () => void }) => void;
    isPending: boolean;
} => {
    const queryClient = useQueryClient();
    const mutation = useMutation<AxiosResponse<any>, Error, { title: string }>({
        mutationFn: (taskTitle) => customFetch.post('/', taskTitle),
        onSuccess: (_data, _variables, context) => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Task added');
            if (context && typeof context === 'function') {
                context();
            }
        },
        onError: (error: any) => {
            toast.error(error.response.data.msg);
        },
    });

    const createTask = (taskTitle: { title: string }, options?: { onSuccess?: () => void }) => {
        mutation.mutate(taskTitle, {
            onSettled: options?.onSuccess,
        });
    };

    return {
        createTask,
        isPending: mutation.isPending,
    };
};

// Edit task hook
export const useEditTask = (): {
    editTask: (variables: { taskId: number; isDone: boolean }) => void;
    isPending: boolean;
} => {
    const queryClient = useQueryClient();
    const {
        mutate: editTask,
        isPending,
    }: UseMutationResult<AxiosResponse<any>, Error, { taskId: number; isDone: boolean }> = useMutation({
        mutationFn: ({ taskId, isDone }) => customFetch.patch(`/${taskId}`, { isDone }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Task updated');
        },
        onError: (error: any) => {
            toast.error(error.response.data.msg);
        },
    });
    return { editTask, isPending };
};

// Delete task hook
export const useDeleteTask = (): {
    deleteTask: (taskId: number) => void;
    isPending: boolean;
} => {
    const queryClient = useQueryClient();
    const {
        mutate: deleteTask,
        isPending,
    }: UseMutationResult<AxiosResponse<any>, Error, number> = useMutation({
        mutationFn: (taskId) => customFetch.delete(`/${taskId}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
            toast.success('Task deleted');
        },
        onError: (error: any) => {
            toast.error(error.response.data.msg);
        },
    });
    return { deleteTask, isPending };
};
