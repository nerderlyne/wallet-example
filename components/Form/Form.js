import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Heading, VStack, Button, Input } from "@chakra-ui/react";

function Form() {
  const { control, handleSubmit } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "founders",
  });
  return (
    <>
      <VStack
        as="form"
        onSubmit={handleSubmit((values) => console.log(values))}
      >
        <Heading>Founders Form</Heading>
        <ul>
          {fields.map((item, index) => (
            <li key={item.id}>
              <Controller
                name={`founders.${index}.value`}
                control={control}
                defaultValue={item.value}
                render={({ field }) => <Input {...field} />}
              />
              <Button onClick={() => remove(index)}>Delete</Button>
            </li>
          ))}
        </ul>
        <Button onClick={() => append({ value: "" })}>Add Founder</Button>
        <Button type="submit">Submit</Button>
      </VStack>
    </>
  );
}

export default Form;
