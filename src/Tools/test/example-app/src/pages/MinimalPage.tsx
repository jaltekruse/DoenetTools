import * as React from 'react'
import styled from 'styled-components'

//import { Editor } from '@pm-react-example/minimal'

import { PageHeader } from '../components/PageHeader'

interface IProps {
  className?: string
}

export function MinimalPage(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <PageHeader/>
      <span>Removed for now</span>
    </Container>
  )
}

const Container = styled.div`
`
