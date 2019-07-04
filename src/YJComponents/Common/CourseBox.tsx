import * as React from 'react';
import CourseBoxConfig from '../../YJInterfaces/CourseBoxConfig';

interface IProps {
  courseBoxData: CourseBoxConfig
}

const CourseBox: React.FC<IProps> = ({
  children,
  courseBoxData = {
    imageClassName: "default-image",
    stickerClassName: '',
    title: "제목을 입려해주세요.",
    programLanguage: '',
    description:"설명을 입력해주세요.",
    prerequisite: '',
    orginalPrice: '',
    salePrice: '',
    monthlyPrice: ''
  }
}) => {
  return (
    <div className="coursebox-wrapper">
      <div className={courseBoxData.imageClassName}/>
        <div className={courseBoxData.stickerClassName}>스티커</div>
        - - - 시작 - - -
        <br/>
        Image Area
        <h2>{courseBoxData.title}</h2>
        <h4>{courseBoxData.programLanguage}</h4>
        <p>{courseBoxData.description}</p>
        <p>{courseBoxData.prerequisite? `선이수 과목: ${courseBoxData.prerequisite}`: ''}</p>
        <p>{courseBoxData.orginalPrice}</p>
        <p>{courseBoxData.salePrice}</p>
        <p>{courseBoxData.monthlyPrice}</p>
        {children}
        <br/>
        - - - - 끝 - - - -
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  )
};
export default CourseBox;