import { useParams } from "react-router";
import { useCallback, useState, useEffect } from "react";
import { getTodo } from "../../apis";
import { type TodoType } from "../../types/todo";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect -- マウント時にTodo詳細をサーバーから取得するための意図的なfetch
    fetchTodo();
  }, [fetchTodo]);

  return { todo };
};
