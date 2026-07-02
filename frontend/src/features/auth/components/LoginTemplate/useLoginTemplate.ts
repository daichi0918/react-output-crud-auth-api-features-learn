import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.email('メールアドレスの形式で入力してください'),
  password: z.string().min(8, '8文字以上で入力してください'),
});

export const useLoginTemplate = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // TODO: API連携は後のステップで実装する。今はバリデーション結果を確認するだけ。
  const handleLoginSubmit = handleSubmit(
    useCallback((values: z.infer<typeof schema>) => {
      console.log(values);
    }, []),
  );

  return {
    control,
    errors,
    handleLoginSubmit,
  };
};
