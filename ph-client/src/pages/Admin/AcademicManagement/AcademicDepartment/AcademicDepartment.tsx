import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicDepartmentApiQuery } from "../../../../redux/feature/admin/academicDepartment/academincDepartmentApi";
import { TAcademicDepartment } from "../../../../types/academicDepartmentTypes";

type TTablData = Pick<TAcademicDepartment, "_id" | "academicFaculty" | "name">;

const AcademicDepartment = () => {
  const {
    data: departmentData,
    isFetching,
    isLoading,
  } = useGetAllAcademicDepartmentApiQuery(undefined);
  const data = departmentData?.data?.map(({ academicFaculty, _id, name }) => ({
    name,
    key: _id,
    academicFaculty,
  }));
  // console.log(params);

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Academic Faculty",
      key: "academicFaculty",
      dataIndex: "academicFaculty",
      render: (item) => {
  
        return <p>{item?.name}</p>
      }
    },
    {
      key: "x",
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTablData>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log(pagination, filters, sorter, extra);
  };
  if (isLoading) {
    return <p style={{ textAlign: "center", fontSize: "24px" }}>loading...</p>;
  }
  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={data}
      onChange={onChange}
    />
  );
};

export default AcademicDepartment;
