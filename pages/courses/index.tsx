import * as React from 'react';
import Layout from '../../src/YJComponents/Layouts/Layout';
// import CoursesContainer from '../../src/YJComponents/Courses/CoursesContainer';
import CourseBoxConfig from '../../src/YJInterfaces/CourseBoxConfig';
import CourseBox from '../../src/YJComponents/Common/CourseBox';

interface IProps {
  courseBoxesData: Array<CourseBoxConfig>
}

const CoursesPage: React.FC<IProps> = ({
  courseBoxesData = [
    {
      imageClassName: '',
      stickerClassName: '',
      title: '프로그래밍 기초',
      programLanguage: "Python",
      description: "입문자 분들께 추천 드려요!",
      prerequisite: "없음",
      orginalPrice: "159,000원",
      salePrice: "119,000원",
      monthlyPrice: "39,666원 / 월"
    },
    {
      imageClassName: '',
      stickerClassName: '',
      title: "알고리즘의 정석",
      programLanguage: "Python",
      description: "알고리즘은 이미 여러분의 코드에 녹아들어 있습니다.",
      prerequisite: "프로그래밍 기초",
      orginalPrice: "159,000원",
      salePrice: "119,000원",
      monthlyPrice: "39,666원 / 월"
    },
    {
      imageClassName: '',
      stickerClassName: '',
      title: "자바 기초",
      programLanguage: "Java",
      description: "자바를 배워보세요~!",
      prerequisite: "프로그래밍 기초",
      orginalPrice: "159,000원",
      salePrice: "119,000원",
      monthlyPrice: "39,666원 / 월"
    },
  ]
}) => {
  return (

    <Layout
    title="Courses Page"
    headingContents={<div>올인원 패키지 광고</div>}
    >
      <div>
        <h1>개별 수업</h1>
        {
          courseBoxesData.map((data:CourseBoxConfig, i:number) => {
            return (
            <CourseBox
            key = {i}
            courseBoxData = {data}
            />
            )
          })
        }
      </div>
    </Layout>
  )
}

export default CoursesPage;