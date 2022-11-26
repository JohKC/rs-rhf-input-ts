import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { CustomSelectInput, ErrorMessage } from "./common";
import { CatColorEnum } from "./enums";
import { Cat, SelectOption } from "./interfaces";

const options: SelectOption[] = Object.keys(CatColorEnum).map((color) => {
  return {
    label: color,
    value: color
  };
});

const validationSchema = Yup.object({
  name: Yup.string().required('name is required').min(1).max(20),
  color: Yup.string().required('color is required'),
  age: Yup.number().required('number is required').positive().integer().max(5000),
})

interface CatFormProps {
  onCatSubmit: (cat: Cat) => void,
}

export const CatForm = ({ onCatSubmit }: CatFormProps) => {
  const { register, handleSubmit, control, formState: { errors, defaultValues } } = useForm<Cat>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<Cat> = data => onCatSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormControl {...register("name")} />
        <ErrorMessage>{errors.name?.message}</ErrorMessage>
      </FormGroup>
      <FormGroup>
        <FormLabel>Color</FormLabel>
        <CustomSelectInput
          control={control}
          name={"color"}
          options={options}
          placeholder="Select a color"
        />
        <ErrorMessage>{errors.color?.message}</ErrorMessage>
      </FormGroup>
      <FormGroup>
        <FormLabel>Age</FormLabel>
        <FormControl type="number" {...register("age")} />
        <ErrorMessage>{errors.age?.message}</ErrorMessage>
      </FormGroup>
      <Button type="submit" className="mt-2">Submit</Button>
    </form>
  )
}
