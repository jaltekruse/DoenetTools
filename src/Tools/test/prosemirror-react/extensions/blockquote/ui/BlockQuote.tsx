import React, { forwardRef, useState, Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { UIProps } from '..'

/*
// import uniqueId from 'lodash/uniqueId'
import assign from 'lodash/assign'

import JXG from 'jsxgraph'

export default class JXGBoard extends Component {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    logic: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string]).isRequired,
    boardAttributes: PropTypes.object,
    jessieCode: PropTypes.bool
  }
  constructor(props: any) {
    super(props)
    //this.id = 'board_' + Math.random().toString(36).substr(2, 9)
    this.state = { board: null }
    //this.defaultStyle = { width: 500, height: 500 }
    //this.defauflboardAttributes = {}
  }

  // called right before child lifecycles, passes context object to all children
  getChildContext() {
    //return { board: this.state.board }
  }

  // called only after initial render
  componentDidMount() {
    // now that div exists, create new JSXGraph board with it
    let attributes = {}
    //Object.assign(attributes, this.defauflboardAttributes, this.props.boardAttributes || {})
    let board = JXG.JSXGraph.initBoard("12341234", attributes)
    if (this.props.jessieCode) {
      board.jc.parse(this.props.logic)
    } else {
      this.props.logic(board)
    }

    //this.props.logic(board)
    this.setState({
      board: board
    })
  }

  // called only if shouldComponentUpdate returns true
  // for rendering the JSXGraph board div and any child elements
  render() {
    let style = {} //assign(this.defaultStyle, this.props.style || {})

    return (
      <div id={"12341234"} className={'jxgbox'} style={style} />
    )
  }
}

*/

interface IProps {
  className?: string
  initialProps: UIProps,
  useListenProps: (cb: (newProps: UIProps) => void) => void
}

export const BlockQuote = forwardRef((props: IProps, ref: any) => {
  const { className, initialProps, useListenProps } = props
  useListenProps(handlePropsUpdate)
  const [attrs, setAttrs] = useState({ ...initialProps.attrs })

  function handlePropsUpdate(newProps: any) {
    // console.log(newProps)
  }
  return (
    <input type="submit" className={className} ref={ref}/>
  )
})

export const StyledBlockQuote = styled.blockquote`
  box-sizing: border-box;
  color: #6a737d;
  padding: 0 1em;
  border-left: 4px solid #dfe2e5;
  margin: 0.2rem 0 0 0;
  margin-right: 0;

  [dir='rtl'] & {
    padding-left: 0;
    padding-right: 4px;
  }

  &:first-child {
    margin-top: 0;
  }

  &::before {
    content: '';
  }

  &::after {
    content: none;
  }

  & p {
    display: block;
  }

  & table,
  & table:last-child {
    display: inline-table;
  }
`
