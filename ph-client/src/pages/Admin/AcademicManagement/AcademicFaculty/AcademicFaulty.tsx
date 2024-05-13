import { Button, Table, TableColumnsType, TableProps } from "antd";
import { useGetAllFacultyQuery } from "../../../../redux/feature/admin/AcademicFaculty/academicFacultyApi";
import { TAcaFacultyData } from "../../../../types/academicFacultyTypes";
export type TTablData = Pick<TAcaFacultyData, "name">;
const AcademicFaulty = () => {
  const {
    data: facultyData,
    isFetching,
    isLoading,
  } = useGetAllFacultyQuery(undefined);
  const data = facultyData?.data?.map(({ name }) => ({
    name,
  }));
  // console.log(params);

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
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

export default AcademicFaulty;
