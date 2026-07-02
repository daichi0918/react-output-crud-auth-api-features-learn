import { BaseLayout } from "../../../../shared/components/layouts";
import { InputForm, TextArea }  from "../../../../shared/components/ui";
import { useTodoDetailTemplate } from "./useTodoDetailTemplate";
import styles from "./style.module.css";

export const TodoDetailTemplate = () => {
  const { todo } = useTodoDetailTemplate();

  return (
    <BaseLayout title={"TodoDetail"}>
      <div></div>
      {!!todo && (
        <div className={styles.container}>
          <div className={styles.area}>
            <InputForm disabled value={todo.title} placeholder={"Title"} />
          </div>
          <div className={styles.area}>
            <TextArea disabled value={todo.content} placeholder={"Content"} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
