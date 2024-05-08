import { object } from "zod";
import { useGetStudentOfferedCourseQuery } from "../../redux/feature/student/studentCourseManagementApi";
import { Button, Col, Row } from "antd";

const OfferedCourse = () => {
  const { data: studentOfferedCourses } =
    useGetStudentOfferedCourseQuery(undefined);
  const singleObject = studentOfferedCourses?.data?.reduce((acc, item) => {
    const key = item?.course?.title;
    acc[key] = acc[key] || { courseTitle: key, sections: [] };
    acc[key].sections.push({
      section: item?.section,
      _id: item?._id,
      startTime: item?.startTime,
      endTime: item?.endTime,
      days: item?.days,
    });
    return acc;
  }, {});
  const modifiedData = Object.values(singleObject ? singleObject : {});
  console.log(modifiedData);
  // console.log(Object.values(singleObject));
  return (
    <Row gutter={[0, 10]}>
      {modifiedData?.map((item) => {
        return (
          <Col style={{border: "solid #d4d4d4" , padding: "5px"}} span={24}>
            <div style={{padding: "10px"}}>
              <h1>{item?.courseTitle}</h1>
            </div>
            <div>
              {item.sections?.map((section) => {
                return (
                  <Row justify={'space-between'} align={"middle"} style={{borderTop: "solid #d4d4d4" , padding : "10px"}}>
                    <Col span={4}>
                      <p>Section : {section?.section}</p>
                    </Col>
                    <Col span={4}>
                      <p>Start Time : {section?.startTime}</p>
                    </Col>
                    <Col span={4}>
                      <p>End Time:  {section?.endTime}</p>
                    </Col>
                    <Col span={4}>
                      <p>
                        Days: 
                        {section?.days?.map((day) => (
                          <span>{day}</span>
                        ))}
                      </p>
                    </Col>
                    <Col span={4}>
                      <Button>Enroll Course</Button>
                    </Col>
                  </Row>
                );
              })}
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default OfferedCourse;
