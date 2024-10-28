"use client";

import {
  Avatar,
  Badge,
  Button,
  Calendar,
  DatePicker,
  Dropdown,
  Input,
  Modal,
  TimePicker,
} from "antd";
import Image from "next/image";
import type { BadgeProps } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import dayjs from "dayjs";

interface Meeting {
  key: number;
  date: string;
  name: string;
  startTime: string;
  endTime: string;
  description: string;
  status: string;
  border: string;
  bg: string;
}
interface DropdownItem {
  key: string;
  label: string;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [formData, setFormData] = useState<Partial<Meeting>>({});
  const [editMeetingKey, setEditMeetingKey] = useState<number | null>(null);
  const [calenderOpen, setCalenderOpen] = useState(true);

  const handleInputChange = (key: keyof Meeting, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const addOrEditMeeting = () => {
    if (
      formData.date &&
      formData.name &&
      formData.startTime &&
      formData.endTime
    ) {
      if (editMeetingKey !== null) {
        const updatedMeetings = meetings.map((meeting) =>
          meeting.key === editMeetingKey ? { ...meeting, ...formData } : meeting
        );
        setMeetings(updatedMeetings);
      } else {
        const newMeeting: Meeting = {
          key: meetings.length + 1,
          date: formData.date,
          name: formData.name,
          startTime: formData.startTime,
          endTime: formData.endTime,
          description: formData.description || "",
          status: formData.status || "Active",
          ...getBadgeStyles(formData.status || "Active"),
        };
        setMeetings([...meetings, newMeeting]);
      }

      setFormData({});
      setEditMeetingKey(null);
      setIsModalOpen(false);
    }
  };

  const openEditModal = (meeting: Meeting) => {
    setFormData(meeting);
    setEditMeetingKey(meeting.key);
    setIsModalOpen(true);
  };
  const getListData = (value: Dayjs) => {
    const dateString = value.format("DD-MM-YYYY");
    return meetings.filter((meeting) => meeting.date === dateString);
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => {
          return (
            <li key={item.name}>
              <Badge
                status={item.status.toLowerCase() as BadgeProps["status"]}
                text={`${item.startTime}-${item.endTime} : ${item.name}`}
                color={getBadgeColor(item.status)}
              />
            </li>
          );
        })}
      </ul>
    );
  };

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "Active":
        return "green";
      case "Pending":
        return "orange";
      case "Completed":
        return "red";
      default:
        return "default";
    }
  };
  const getBadgeStyles = (status: string) => {
    switch (status) {
      case "Active":
        return { border: "border-l-green-500", bg: "text-green-500" };
      case "Pending":
        return { border: "border-l-orange-500", bg: "text-orange-500" };
      case "Completed":
        return { border: "border-l-red-500", bg: "text-red-500" };
      default:
        return { border: "border-l-gray-300", bg: "text-gray-500" };
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dropdownItems: DropdownItem[] = [
    { key: "1", label: "Active" },
    { key: "2", label: "Pending" },
    { key: "3", label: "Completed" },
  ];

  const dropdownList: DropdownItem[] = [
    { key: "1", label: "Edit" },
    { key: "2", label: "Delete" },
  ];

  const deleteMeeting = (key: number) => {
    const updatedMeetings = meetings.filter((meeting) => meeting.key !== key);
    setMeetings(updatedMeetings);
  };
  return (
    <div className="bg-[#FAF9F6] p-7 bg-green">
      <div className="flex justify-between">
        <div className="flex space-x-20 items-center">
          <div className="flex space-x-1 items-center">
            <Image src="/calender.png" alt="calender" width={40} height={40} />
            <div className="text-sm font-bold">Appointopia</div>
          </div>
          <div className="text-lg font-bold">
            {calenderOpen ? "Calendar" : "Appointment Schedule"}
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div
            onClick={showModal}
            className="flex hover:bg-[#8f62b3e6] bg-[#8E62B3] text-[#ffffff] pt-[1px] pb-1 pl-3 pr-3 rounded-md text-sm space-x-1 items-center cursor-pointer"
          >
            <div className="text-2xl -mt-1">+</div>
            <div>Create</div>
          </div>
          <Modal
            title={editMeetingKey !== null ? "Edit Meeting" : "Add Meeting"}
            open={isModalOpen}
            onOk={addOrEditMeeting}
            onCancel={() => setIsModalOpen(false)}
            footer={[
              <Button key="back" onClick={addOrEditMeeting}>
                {editMeetingKey !== null ? "Edit" : "Add"}
              </Button>,
            ]}
          >
            <div className="border-t-2 pt-3">
              <div className="mb-3">
                <label>Meeting Name</label>
                <Input
                  placeholder="Meeting Name"
                  value={formData.name || ""}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className=" flex flex-col mb-3">
                  <label>Date</label>
                  <DatePicker
                    value={
                      formData.date ? dayjs(formData.date, "DD-MM-YYYY") : null
                    }
                    onChange={(date) =>
                      handleInputChange(
                        "date",
                        date?.format("DD-MM-YYYY") || ""
                      )
                    }
                  />
                </div>
                <div className="mb-3 ml-8 flex flex-col">
                  <label>Start Time</label>
                  <TimePicker
                    format="hh:mm a"
                    value={
                      formData.startTime
                        ? dayjs(formData.startTime, "hh:mm a")
                        : null
                    }
                    onChange={(time) =>
                      handleInputChange(
                        "startTime",
                        time?.format("hh:mm a") || ""
                      )
                    }
                  />
                </div>
                <div className="mb-3 ml-8 flex flex-col">
                  <label>End Time</label>
                  <TimePicker
                    format="hh:mm a"
                    value={
                      formData.endTime
                        ? dayjs(formData.endTime, "hh:mm a")
                        : null
                    }
                    onChange={(time) =>
                      handleInputChange(
                        "endTime",
                        time?.format("hh:mm a") || ""
                      )
                    }
                  />
                </div>
              </div>
              <div className="mb-3">
                <label>Description</label>
                <Input
                  placeholder="Description"
                  value={formData.description || ""}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </div>
              <div className="mb-3">
                <label>Status: &nbsp;</label>
                <Dropdown
                  menu={{
                    items: dropdownItems,
                    onClick: ({ key }) => {
                      const status = dropdownItems.find(
                        (item) => item.key === key
                      );
                      if (status) handleInputChange("status", status.label);
                    },
                  }}
                >
                  <a>{formData.status || "Select Status"}</a>
                </Dropdown>
              </div>
            </div>
          </Modal>
          <Image src="/search.png" alt="search" height={20} width={20} />
          <Image src="/bell.png" alt="bell" height={20} width={20} />
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSle5CxW6QjBz4FH6p5szdloz2gPoQLJ8Outg&s" />
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div>
          <div className="space-y-2">
            <div
              className={`flex items-center space-x-2 cursor-pointer ${calenderOpen?"bg-[#8E62B3] pt-1 pb-1 rounded-md pl-1":"bg-[#FAF9F6]"}`}
              onClick={() => setCalenderOpen(true)}
            >
              <Image
                src="/calender2.png"
                alt="calender2"
                height={20}
                width={20}
              />
              <div className={`${calenderOpen?" text-white":" text-black"}`}>Calendar</div>
            </div>
            <div
              className={`flex items-center space-x-2 cursor-pointer ${calenderOpen?"bg-[#FAF9F6]":"bg-[#8E62B3] pt-1 pb-1 rounded-md pl-1"}`}
              onClick={() => setCalenderOpen(false)}
            >
              <Image
                src="/scheduled.png"
                alt="scheduled"
                height={40}
                width={40}
                className="-ml-[10px]"
              />
              <div className={`${calenderOpen?" text-black":" text-white pr-1"}`}>Appointment Schedule</div>
            </div>
            <div className="flex items-center space-x-2">
              <Image
                src="/workflow.png"
                alt="workflow"
                height={20}
                width={20}
              />
              <div>Workflows</div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[85%]">
          {calenderOpen ? (
            <Calendar cellRender={dateCellRender} className="rounded-md" />
          ) : meetings.length !== 0 ? (
            <div className="bg-[#eaddf5] h-[39pc] rounded-md p-3 border-2">
              <div className="flex flex-wrap space-x-5">
                {meetings.map((meet) => (
                  <div
                    key={meet.key}
                    className={`bg-white p-3 rounded-md border-l-8 ${meet.border} space-y-2`}
                  >
                    <div className="flex justify-between items-center">
                      <div className={`text-xl font-bold ${meet.bg}`}>{meet.name}</div>

                      <Dropdown
                        menu={{
                          items: dropdownList,
                          onClick: ({ key }) => {
                            if (key === "1") openEditModal(meet);
                            if (key === "2") deleteMeeting(meet.key);
                          },
                        }}
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          className="mt-2 ml-20"
                        >
                          <Image
                            src="/dot.png"
                            alt="dot"
                            height={20}
                            width={20}
                          />
                        </a>
                      </Dropdown>
                    </div>

                    <div className="flex space-x-5">
                      <Image
                        src="/date.png"
                        alt="date"
                        height={20}
                        width={20}
                        className="mr-2"
                      />
                      {meet.date}
                    </div>
                    <div className="flex space-x-5">
                      <Image
                        src="/clock.png"
                        alt="clock"
                        height={20}
                        width={20}
                        className="mr-2"
                      />
                      {meet.startTime} - {meet.endTime}
                    </div>
                    <div className="flex space-x-5">
                      <Image
                        src="/desc.png"
                        alt="desc"
                        height={20}
                        width={20}
                        className="mr-2"
                      />
                      {meet.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center p-18 bg-white rounded-md">
              <Image
                src="/empty.jpeg"
                alt="empty"
                height={600}
                width={600}
                className="m-3"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
