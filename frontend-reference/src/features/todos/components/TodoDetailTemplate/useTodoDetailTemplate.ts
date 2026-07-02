import { useParams } from "react-router";
import { useCallback, useState, useEffect } from "react";
import { getTodo } from "../../apis";
import { TodoType } from "../../types/todo";

export const useTodoDetailTemplate = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<TodoType | null>(null);

  const fetchTodo = useCallback(async () => {
    if (!id) return;
    const response = await getTodo({ id });
    if (!response.data) return;
    setTodo(response.data);
  }, [id]);

  useEffect(() => {
    fetchTodo();
  }, [fetchTodo]);

  return { todo };
};
