import { ComponentProps } from 'react'
import AsyncCreatable from 'react-select/async-creatable'

interface VAsyncCreatableProps extends ComponentProps<AsyncCreatable> {}
const VAsyncCreatable = (props: VAsyncCreatableProps) => {
  return <AsyncCreatable {...props} />
}

export default VAsyncCreatable
