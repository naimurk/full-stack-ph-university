import { useGetAllAcademicSemesterQuery } from "../../../../redux/feature/admin/AcademicSemester/academicSemesterApi";
import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { TAcademicSemester } from "../../../../types";
import { useState } from "react";
import { TQueryParams } from "../../../../types/queryParams.type";
export type TTablData = Pick<
  TAcademicSemester,
  "endMonth" | "startMonth" | "name" | "year"
>;
const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const {
    data: semesterData,
    isFetching,
    isLoading,
  } = useGetAllAcademicSemesterQuery(params);
  const data = semesterData?.data?.map(
    ({ key: _id, name, startMonth, endMonth, year }) => ({
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );
  // console.log(params);

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      key: "startMonth",
      title: "startMonth",
      dataIndex: "startMonth",
    },
    { key: "endMonth", title: "End Month", dataIndex: "endMonth" },
    {
      key: "year",
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
        {
          text: "2027",
          value: "2027",
        },
        {
          text: "2028",
          value: "2028",
        },
      ],
    },
  ];

  const onChange: TableProps<TTablData>["onChange"] = (
    pagination,
    filters,
    sorter,
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
  if (isLoading) {
    return <p>loading</p>;
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

export default AcademicSemester;
