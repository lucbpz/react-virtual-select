import { ComponentProps } from 'react'
import AsyncSelect from 'react-select/async'

interface VAsyncSelectProps extends ComponentProps<AsyncSelect> {}

const VAsyncSelect = (props: VAsyncSelectProps) => {
  return <AsyncSelect {...props} />
}

export default VAsyncSelect
