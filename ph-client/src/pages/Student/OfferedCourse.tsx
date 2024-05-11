import {
  useEnrollCourseMutation,
  useGetStudentOfferedCourseQuery,
} from "../../redux/feature/student/studentCourseManagementApi";
import { Button, Col, Row } from "antd";
type TAC = {
  [index: string]: any;
};
type TSections = {
  section: string;
  _id: string;
  startTime: string;
  endTime: string;
  days: string[];
};
type TModifiedData = { courseTitle: string; sections: TSections[] };
const OfferedCourse = () => {
  const {
    data: studentOfferedCourses,
    isLoading,
    isFetching,
  } = useGetStudentOfferedCourseQuery(undefined);
  const [EnrollCourse] = useEnrollCourseMutation();
  const singleObject = studentOfferedCourses?.data?.reduce((acc: TAC, item) => {
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

  const modifiedData = Object.values(
    singleObject ? singleObject : []
  ) as TModifiedData[];
  // console.log(modifiedData);

  if (isLoading || isFetching) {
    return <p>loading ...</p>;
  }
  if (modifiedData.length == 0) {
    return <p>Courses not available </p>;
  }
  const handleEnrollCourse = (id: string) => {
    const data = {
      offeredCourse: id,
    };
    console.log(data);
    EnrollCourse(data);
  };
  // console.log(Object.values(singleObject));

  return (
    <Row gutter={[0, 10]}>
      {modifiedData?.map((item, idx) => {
        return (
          <Col
            key={idx}
            style={{ border: "solid #d4d4d4", padding: "5px" }}
            span={24}
          >
            <div style={{ padding: "10px" }}>
              <h1>{item?.courseTitle}</h1>
            </div>
            <div>
              {item.sections?.map((section, idx) => {
                return (
                  <Row
                    key={idx + 1}
                    justify={"space-between"}
                    align={"middle"}
                    style={{ borderTop: "solid #d4d4d4", padding: "10px" }}
                  >
                    <Col span={4}>
                      <p>Section : {section?.section}</p>
                    </Col>
                    <Col span={4}>
                      <p>Start Time : {section?.startTime}</p>
                    </Col>
                    <Col span={4}>
                      <p>End Time: {section?.endTime}</p>
                    </Col>
                    <Col span={4}>
                      <p>
                        Days:
                        {section?.days?.map((day, idxx) => (
                          <span key={idxx} style={{ margin: "2px" }}>
                            {day}
                          </span>
                        ))}
                      </p>
                    </Col>
                    <Col span={4}>
                      <Button onClick={() => handleEnrollCourse(section._id)}>
                        Enroll Course
                      </Button>
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
