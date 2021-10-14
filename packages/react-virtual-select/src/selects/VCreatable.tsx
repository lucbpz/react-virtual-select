import { ComponentProps } from 'react'
import CreatableSelect from 'react-select/creatable'

interface VCreatableProps extends ComponentProps<CreatableSelect> {}
const VCreatable = (props: VCreatableProps) => {
  return <CreatableSelect {...props} />
}

export default VCreatable
