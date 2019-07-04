import * as React from 'react';

interface IProps {
  wraperClassName?: string
}

const Heading: React.FC<IProps> = ({
  children,
  wraperClassName = "heading-default"
}) => {

  return (
    <div
    className = {wraperClassName}
    >
      - - - - - - - - - - - - - - -
      <br/>
      Heading Area
      {children}
      <br/>
      - - - - - - - - - - - - - - -
    </div>
  )
}
export default Heading;