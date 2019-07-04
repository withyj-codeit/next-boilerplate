import * as React from 'react';
import { render } from 'enzyme';

interface IProps {
  buttonName: string;
  className: string;
}

const PopUpButton: React.FC<IProps> = ({
  children,
  buttonName = '',
  className = ''
}) => {
  function popUpContents() {
    render() {
      return (
        <div>
          버튼 동작 중
        {children}
        </div>
      )
    }
  };

  return (
    <div
    className = {className}
    onClick = {popUpContents}
    >
      {buttonName}
    </div>
  )
}
export default PopUpButton;