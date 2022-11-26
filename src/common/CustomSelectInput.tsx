import { ReactNode } from 'react';
import { Control, Controller, Path, PathValue } from 'react-hook-form'
import ReactSelect from 'react-select'
import { SelectOption } from '../interfaces';

interface CustomSelectInputProps<T> {
 name: Path<T>, 
 control: Control<T, any>, 
 defaultValue?: PathValue<T, Path<T>>, 
 options: SelectOption[],
 placeholder?: ReactNode,
}

export const CustomSelectInput = <T,>({ options, placeholder, ...props }: CustomSelectInputProps<T>) => {
  return (
      <Controller
        {...props}
        render={({ field }) => (
          <ReactSelect
            isClearable
            ref={field.ref}
            options={options}
            value={options.find(c => c.value === field.value)}
            onChange={val => field.onChange(val?.value)}
            placeholder={placeholder}
          />
        )}
      />
  )
}
