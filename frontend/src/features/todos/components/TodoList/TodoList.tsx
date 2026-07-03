import { useCallback, type FC } from "react";
import { useNavigate } from "react-router";
import {
  faTrashAlt,
  faFile,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAVIGATION_PATH } from "../../../../shared/constants/navigation";
import { type TodoType } from "../../types";
import styles from "./style.module.css";

type TodoListProps = {
  todoList: Array<TodoType>;
  onDeleteTodo: (id: string, title: string) => void;
};

export const TodoList: FC<TodoListProps> = ({ todoList, onDeleteTodo }) => {
  const navigate = useNavigate();

  const handleMoveDetailPage = useCallback(
    (id: string) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate]
  );

  const handleMoveEditPage = useCallback(
    (id: string) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate]
  );

  return (
    <ul className={styles.list}>
      {todoList.map((todo) => (
        <li key={todo.id} className={styles.todo}>
          <span className={styles.task}>{todo.title}</span>
          <div className={styles.area}>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => handleMoveDetailPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => handleMoveEditPage(todo.id)}
              />
            </div>
            <div className={styles.far}>
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => onDeleteTodo(todo.id, todo.title)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
