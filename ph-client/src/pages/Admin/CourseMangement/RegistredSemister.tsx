import { Button, Dropdown, Table } from "antd";
import type { MenuProps, TableColumnsType, TableProps } from "antd";

import { useState } from "react";
import { TQueryParams } from "../../../types/queryParams.type";
import {
  useGetAllRegisteredSemesterQuery,
  useUpdateSemesterRegistrationMutation,
} from "../../../redux/feature/admin/courseMangement/courseManagementApi";
import { TRegisteredSemester } from "../../../types/registeredSemesterTypes";
import moment from "moment";
import { set } from "react-hook-form";

export type TTablData = Pick<
  TRegisteredSemester,
  | "academicSemester"
  | "maxCredit"
  | "minCredit"
  | "status"
  | "startDate"
  | "endDate"
>;
const RegistredSemister = () => {
  const [registeredId, setRegisteredId] = useState("");
  const [params, setParams] = useState<TQueryParams[] | undefined>(undefined);
  const [updateRegistration, { data: updatedData }] =
    useUpdateSemesterRegistrationMutation();
  const {
    data: registeredSemisterData,
    isFetching,
    isLoading,
  } = useGetAllRegisteredSemesterQuery(params);
  const data = registeredSemisterData?.data?.map(
    ({
      _id,
      academicSemester,
      maxCredit,
      minCredit,
      startDate,
      endDate,
      status,
    }) => ({
      key: _id,
      academicSemester,
      status,
      maxCredit,
      minCredit,
      startDate: moment(new Date(startDate)).format("MMM"),
      endDate: moment(new Date(endDate)).format("MMM"),
    })
  );

  // console.log(params);
  const items = [
    {
      label: "UpComing",
      key: "UPCOMING",
    },
    {
      label: "Ongoing",
      key: "ONGOING",
    },
    {
      label: "Ended",
      key: "ENDED",
    },
  ];

  const handleUpdateStatus: MenuProps["onClick"] = (data) => {
    console.log(data.key);
    console.log(registeredId);
    updateRegistration({ id: registeredId, data: { status: data.key } });
  };

  const menuProps = {
    items,
    onClick: handleUpdateStatus,
  };

  const columns: TableColumnsType<TTablData> = [
    {
      title: "Academic Semester",
      key: "name",
      dataIndex: "academicSemester",
      render: (item) => {
        return <p>{`${item.name} ${item?.year}`}</p>;
      },
    },
    {
      title: "Status",
      key: "name",
      dataIndex: "status",
    },
    {
      title: "StartD ate",
      key: "name",
      dataIndex: "startDate",
    },
    {
      title: "End Date",
      key: "name",
      dataIndex: "endDate",
    },
    {
      title: "Max Credit",
      key: "name",
      dataIndex: "maxCredit",
    },
    {
      title: "Min Credit",
      key: "name",
      dataIndex: "minCredit",
    },

    {
      key: "x",
      title: "Action",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setRegisteredId(item.key)}>Update</Button>
          </Dropdown>
        );
      },
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
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={data}
      //   onChange={onChange}
    />
  );
};

export default RegistredSemister;
