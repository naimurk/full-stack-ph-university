import { Button, Modal, Pagination, Table } from "antd";
import type { TableColumnsType } from "antd";

import { useState } from "react";
import { TQueryParams } from "../../../types/queryParams.type";
import { useGetAllCoursesQuery } from "../../../redux/feature/admin/courseMangement/courseManagementApi";

import { TCourse } from "../../../types/course.type";
import PHForm from "../../../component/form/PHForm";
import PHSelect from "../../../component/form/PHSelect";
import { useAllFacultyQuery } from "../../../redux/feature/admin/userManament/userManagementApi";

export type TTablData = Pick<TCourse, "title" | "code">;
const Courses = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setpage] = useState(1);

  const {
    data: coursesData,
    isFetching,
    isLoading,
  } = useGetAllCoursesQuery([
    { name: "limit", value: "10" },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const data = coursesData?.data?.map(({ _id, title, code }) => ({
    key: _id,
    title,
    code,
  }));

  // console.log(params);

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Title",
      key: "title",
      dataIndex: "title",
    },
    {
      title: "Code",
      key: "code",
      dataIndex: "code",
    },

    {
      key: "x",
      title: "Action",
      render: (item) => {
        return <AssignFaculty data={item.key}></AssignFaculty>;
      },
      width: "1%",
    },
  ];

  //   const onChange: TableProps<TTablData>["onChange"] = (
  //     _pagination,
  //     filters,
  //     _sorter,
  //     extra
  //   ) => {
  //     if (extra.action === "filter") {
  //       const paramsArr: TQueryParams[] = [];
  //       if (filters?.name) {
  //         filters.name.forEach((element) => {
  //           paramsArr.push({ name: "name", value: element });
  //         });
  //       }
  //       if (filters?.year) {
  //         filters.year.forEach((element) => {
  //           paramsArr.push({ name: "year", value: element });
  //         });
  //       }
  //       setParams(paramsArr);
  //     }
  //   };
  if (isLoading) {
    return <p style={{ textAlign: "center", fontSize: "24px" }}>loading...</p>;
  }

  return (
    <>
      <Table
        loading={isFetching}
        columns={columns}
        dataSource={data}
        //   onChange={onChange}
      />
      <Pagination
        onChange={(value) => setpage(value)}
        total={coursesData?.meta?.total}
        pageSize={coursesData?.meta?.limit}
        current={page}
      ></Pagination>
    </>
  );
};

const AssignFaculty = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit = (data) => {};
  const { data: facultiesData } = useAllFacultyQuery(undefined);
  const facultyOptions = facultiesData?.data?.map((item) => ({
    label: item.fullName,
    value: item._id,
  }));
  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            options={facultyOptions}
            name="faculties"
            label="Faculties"
            mode="multiple"
          ></PHSelect>
        </PHForm>
      </Modal>
    </>
  );
};
export default Courses;
