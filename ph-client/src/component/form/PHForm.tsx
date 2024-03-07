import { FormProvider, useForm } from "react-hook-form";

const PHForm = ({ onSubmit, children }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="">
        {children}
      </form>
    </FormProvider>
  );
};

export default PHForm;
