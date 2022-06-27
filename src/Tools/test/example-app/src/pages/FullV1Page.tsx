import React, { useMemo } from 'react'
import debounce from 'lodash.debounce'


import { PageHeader } from '../components/PageHeader'

interface IProps {
  className?: string
}

export function FullV1Page(props: IProps) {
  const { className } = props
  return (
    <div className={className}>
      <PageHeader />
      <span>Removed because of NPM issues. </span>
    </div>
  )
}

