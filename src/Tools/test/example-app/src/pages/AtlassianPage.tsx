import * as React from 'react'
import styled from 'styled-components'

import { PageHeader } from '../components/PageHeader'

interface IProps {
  className?: string
}

export function AtlassianPage(props: IProps) {
  const { className } = props
  return (
    <Container className={className}>
      <PageHeader />
      <span>Removed because of NPM issues. </span>
    </Container>
  )
}

const Container = styled.div`
`
