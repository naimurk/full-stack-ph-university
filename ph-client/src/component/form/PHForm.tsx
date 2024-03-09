/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TDefaultValues;

type TDefaultValues = {
  defaultValues?: Record<string, any>;
};
const PHForm = ({ onSubmit, children, defaultValues }: TForm) => {
  const formConfig: TDefaultValues = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        {children}
      </form>
    </FormProvider>
  );
};

export default PHForm;
