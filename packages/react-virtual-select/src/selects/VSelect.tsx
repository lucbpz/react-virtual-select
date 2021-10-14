import { ComponentProps } from 'react'
import Select from 'react-select'

// https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/#componentprops

interface VSelectProps extends ComponentProps<Select> {}

const VSelect = (props: VSelectProps) => {
  return <Select {...props} />
}

export default VSelect
