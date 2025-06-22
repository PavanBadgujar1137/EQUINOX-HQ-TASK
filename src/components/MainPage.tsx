import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

const tabs = ["Sites", "Orders", "VRs", "Reports", "Invoices", "PI"];
const timelineData = [
  {
    date: "11 Oct 23",
    entries: [
      {
        time: "05:30 PM",
        status: "Proposal Sent",
        desc: "Discussion Done",
        follow: "Follow Up : 11 Oct 23 10:30 AM",
        person: "Bhimkumar Prasad",
      },
      {
        time: "02:30 PM",
        status: "Interested",
        desc: "Discussion Done",
        follow: "Follow Up : 11 Oct 23 10:30 AM",
        person: "Bhimkumar Prasad",
      },
    ],
  },
  {
    date: "7 Oct 23",
    entries: [
      {
        time: "05:30 PM",
        status: "Proposal Sent",
        desc: "Discussion Done",
        follow: "Follow Up : 11 Oct 23 10:30 AM",
        person: "Bhimkumar Prasad",
      },
      {
        time: "02:30 PM",
        status: "Interested",
        desc: "Discussion Done",
        follow: "Follow Up : 11 Oct 23 10:30 AM",
        person: "Bhimkumar Prasad",
      },
    ],
  },
];

const MainPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Sites");

  return (
    <div className="p-4 md:p-6 bg-white w-full">
      {/* Header Section */}
      <div className="border rounded-md shadow-sm p-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="w-full">
            <h2 className="font-semibold text-lg">
              Burman Hospitality Pvt. Ltd.
            </h2>
            <p className="text-sm text-[#6C6C72] flex flex-wrap items-center mt-1">
              <span className="flex items-center gap-1 text-[#A0A0A0]">
                ● Delhi
              </span>
              <span className="mx-1 text-[#A0A0A0]">● Central Delhi</span>
              <span className="text-[#A0A0A0]">● 110002</span>
              <span className="mx-1 text-[#C0C0C0]">|</span>
              <span className="text-[#A0A0A0]">Created on : 1 Jul 2022</span>
              <span className="ml-2 px-2 py-1 bg-[#E6F0FF] text-[#2170FF] text-xs rounded font-medium">
                POSTPAID
              </span>
            </p>
            <hr className="border-t w-full mt-3" />
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0 cursor-pointer self-start">
            <div className="text-xl text-[#0077D8]">
              <FaBars />
            </div>
            <button className="bg-[#0077D8] hover:bg-[#005fa3] transition text-white px-4 py-2 rounded-2xl shadow-sm text-sm font-medium whitespace-nowrap">
              + Raise Query
            </button>
          </div>
        </div>

        {/* Revenue & Payment Info */}
        <div className="flex flex-col md:flex-row items-start border-b mt-6 pb-5 text-sm gap-y-6 md:gap-y-0">
          <div className="flex flex-wrap items-start w-full gap-x-10 gap-y-6">
            <div>
              <p className="text-[#A0A0A0]">Total Revenue</p>
              <p className="text-[#2B2B33] font-medium">10,00,000</p>
            </div>
            <div>
              <p className="text-[#00A389]">Payment Received</p>
              <p className="text-[#00A389] font-medium">7,00,000</p>
            </div>
            <div className="relative pr-16 sm:pr-28">
              <p className="text-[#3366CC]">Not Yet Due</p>
              <p className="text-[#3366CC] font-medium">1,00,000</p>
              <div className="absolute right-0 top-0 h-full border-l border-gray-300" />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-end pl-0 sm:pl-6">
              <div className="flex flex-col items-start text-[#D12C2C] font-medium">
                <span>Payment</span>
                <span>Overdue</span>
              </div>
              <div className="flex gap-4 sm:gap-6 text-xs items-end">
                {["20,000", "50,000", "50,000", "30,000"].map((amt, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-[#2B2B33]"
                  >
                    <span>{amt}</span>
                    <span className="text-[#F0A202] font-semibold">
                      {String.fromCharCode(65 + i)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-3 text-sm">
          <div>
            <p className="text-[#A0A0A0]">Lead Category - Source</p>
            <p className="font-medium text-[#2B2B33]">Others - References</p>
          </div>
          <div>
            <p className="text-[#A0A0A0]">Latest Category - Lead source</p>
            <p className="font-medium text-[#2B2B33]">-</p>
          </div>
          <div>
            <p className="text-[#A0A0A0]">Last Updated</p>
            <p className="font-semibold text-black">07 Nov 2023</p>
          </div>
          <div>
            <p className="text-[#A0A0A0]">Total Outstanding</p>
            <p className="font-semibold text-[#D12C2C]">10,00,000</p>
          </div>
          <div>
            <p className="text-[#A0A0A0]">Last Order Date</p>
            <p className="text-[#D12C2C] font-semibold">10 Dec 2023 03:30 PM</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="p-4 w-full">
        <div className="border-b flex flex-wrap gap-4 sm:gap-6 text-sm font-medium mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Layout: Table + Timeline */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Table */}
          <div className="w-full lg:w-[65%] overflow-x-auto">
            <div className="border rounded min-w-[600px]">
              <table className="min-w-full text-sm">
                <thead className="bg-white">
                  <tr>
                    {[
                      "Site Name",
                      "State",
                      "City",
                      "Revenue",
                      "Total orders",
                      "Last Order",
                      "Created At",
                    ].map((header) => (
                      <th
                        key={header}
                        className="px-4 py-2 text-left font-medium text-gray-700"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array(7)
                    .fill(null)
                    .map((_, i) => (
                      <tr key={i} className="border-b">
                        {Array(7)
                          .fill(null)
                          .map((_, j) => (
                            <td
                              key={j}
                              className={`px-4 py-2 ${
                                i % 2 === 0 ? "bg-gray-100" : "bg-white"
                              }`}
                            >
                              &nbsp;
                            </td>
                          ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Timeline */}
          <div className="w-full lg:w-[35%] flex flex-col gap-4">
            {timelineData.map((log, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <h4 className="font-semibold mb-3 text-center">{log.date}</h4>
                {log.entries.map((entry, index) => (
                  <div
                    key={index}
                    className="flex items-start relative pl-4 mb-6"
                  >
                    <div className="w-32 text-sm text-left pr-2">
                      <p className="font-semibold">{entry.status}</p>
                      <p className="text-xs text-gray-500">{entry.time}</p>
                    </div>
                    <div className="relative flex flex-col items-center mx-4">
                      {index !== log.entries.length - 1 && (
                        <div className="absolute top-3 bottom-[-100px] left-1/2 transform -translate-x-1/2 border-l border-dashed border-gray-400 z-0" />
                      )}
                      <div className="w-3 h-3 bg-blue-900 rounded-full z-10"></div>
                    </div>
                    <div className="flex-1 text-sm pl-2">
                      <p className="font-medium">{entry.desc}</p>
                      <p className="text-xs text-gray-500 leading-snug">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod.
                        <br />
                        {entry.follow}
                      </p>
                      <p className="text-xs text-right text-gray-500 mt-1">
                        – {entry.person}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
