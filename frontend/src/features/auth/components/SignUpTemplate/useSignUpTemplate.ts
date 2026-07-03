import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(1, '1文字以上で入力してください'),
  email: z.email('メールアドレスの形式で入力してください'),
  password: z.string().min(8, '8文字以上で入力してください'),
  password_confirmation: z.string().min(8, '8文字以上で入力してください'),
});

export const useSignUpTemplate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  // TODO: API連携は後のステップで実装する。今はバリデーション結果を確認するだけ。
  const handleRegisterSubmit = handleSubmit(
    useCallback(
      (values: z.infer<typeof schema>) => {
        if (values.password !== values.password_confirmation) {
          setError('password', {
            type: 'manual',
            message: '確認用パスワードと一致しません',
          });
          return;
        }
        console.log(values);
      },
      [setError],
    ),
  );

  return {
    control,
    errors,
    handleRegisterSubmit,
  };
};
