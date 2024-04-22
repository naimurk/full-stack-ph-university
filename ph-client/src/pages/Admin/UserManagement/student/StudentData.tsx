import { Button, Pagination, Space, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TStudent } from "../../../../types";
import { useState } from "react";
import { TQueryParams } from "../../../../types/queryParams.type";
import { useGetAllStudentQuery } from "../../../../redux/feature/admin/userManament/userManagementApi";
import { Link } from "react-router-dom";
export type TTablData = Pick<
  TStudent,
  "id" | "fullName" | "email" | "contactNo"
>;
const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const [page, setpage] = useState(1);
  const {
    data: semesterData,
    isFetching,
    isLoading,
  } = useGetAllStudentQuery([
    { name: "limit", value: "2" },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);
  const data = semesterData?.data?.map(
    ({ _id, fullName, id, email, contactNo }) => ({
      key: _id,
      fullName,
      id,
      email,
      contactNo,
    })
  );
  // console.log(params);

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Name",
      key: "id",
      dataIndex: "fullName",
    },
    {
      title: "Roll",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Email",
      key: "id",
      dataIndex: "email",
    },
    {
      title: "Contact",
      key: "id",
      dataIndex: "contactNo",
    },

    {
      key: "x",
      title: "Action",
      render: (item) => {
        return (
          <Space>
            <Link to={`/admin/students/${item?.key}`}>
              <Button>Details</Button>
            </Link>
            <Link to={`/admin/student-update/${item?.key}`}>
              <Button>Update</Button>
            </Link>
            
            <Button>Blocked</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTablData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const paramsArr: TQueryParams[] = [];
      if (filters?.name) {
        filters.name.forEach((element) => {
          paramsArr.push({ name: "name", value: element });
        });
      }
      if (filters?.year) {
        filters.year.forEach((element) => {
          paramsArr.push({ name: "year", value: element });
        });
      }
      setParams(paramsArr);
    }
  };
  //   if (isLoading) {
  //     return <p style={{ textAlign: "center", fontSize: "24px" }}>loading...</p>;
  //   }
  return (
    <>
      <Table
        loading={isFetching || isLoading}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        onChange={(value) => setpage(value)}
        total={semesterData?.meta?.total}
        pageSize={semesterData?.meta?.limit}
        current={page}
      ></Pagination>
    </>
  );
};

export default StudentData;
