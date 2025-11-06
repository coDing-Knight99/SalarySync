import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { MdOutlineFileDownload } from "react-icons/md";
import { Eye, CheckCircle2, Clock, Search, ChevronDown } from "lucide-react";
import { IndianRupee } from "lucide-react";

const rows = [
  {
    employee: "Sarah Johnson",
    month: "2025-10",
    gross: 7996.01,
    deductions: 1549.0,
    net: 6447.01,
    status: "pending",
  },
  {
    employee: "Michael Chen",
    month: "2025-10",
    gross: 6420.14,
    deductions: 1184.03,
    net: 5236.11,
    status: "pending",
  },
  {
    employee: "Emily Rodriguez",
    month: "2025-10",
    gross: 5201.2,
    deductions: 940.24,
    net: 4260.96,
    status: "pending",
  },
  {
    employee: "James Wilson",
    month: "2025-10",
    gross: 4302.59,
    deductions: 760.52,
    net: 3542.07,
    status: "pending",
  },
  {
    employee: "Lisa Anderson",
    month: "2025-10",
    gross: 6596.12,
    deductions: 1219.23,
    net: 5376.9,
    status: "pending",
  },
  {
    employee: "Sarah Johnson",
    month: "2025-09",
    gross: 8650,
    deductions: 1712.5,
    net: 6937.5,
    status: "paid",
  },
  {
    employee: "Michael Chen",
    month: "2025-09",
    gross: 7350,
    deductions: 1387.5,
    net: 5962.5,
    status: "paid",
  },
  {
    employee: "Emily Rodriguez",
    month: "2025-09",
    gross: 6150,
    deductions: 1130,
    net: 5020,
    status: "paid",
  },
];

function currency(n) {
  return n.toLocaleString(undefined, {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
}

const Payroll = () => {
  let [totalPaidAmount, setTotalPaidAmount] = useState(0);
  let [totalPendingAmount, setTotalPendingAmount] = useState(0);
  const [query, setQuery] = React.useState("");
  const filtered = rows.filter(
    (r) =>
      r.employee.toLowerCase().includes(query.toLowerCase()) ||
      r.month.includes(query)
  );

  useEffect(() => {
    let paidAmt = 0 , pendingAmt = 0 ;
    rows.forEach((val) => {
      console.log(val.net);
      
      if(val.status === "paid") {
        paidAmt += val.net ;
      }
      else {
        pendingAmt += val.net ;
      }

    })
    setTotalPaidAmount(paidAmt) ;
    setTotalPendingAmount(pendingAmt) ;
  }, [])
  

  return (
    <div>
      <Navbar />
      <div className="px-10 md:px-40 min-h-screen py-10 bg-gray-50">
        <div className="payroll-box w-full flex flex-col gap-10">
          <div className="payroll-text w-full h-20 flex flex-row justify-between">
            <div className="payroll-text-left">
              <h1 className="text-2xl font-semibold">Payroll Records</h1>
              <h2 className="text-sm md:text-md text-gray-500 mt-2">
                Track and manage salary payments
              </h2>
            </div>
            <div className="payroll-text-right">
              <button className="flex flex-row items-center text-md gap-1 px-3 py-2 border border-gray-300 rounded-xl hover:bg-gray-200 cursor-pointer duration-300">
                <MdOutlineFileDownload className="text-2xl" />
                Export Report
              </button>
            </div>
          </div>
          <div className="payroll-panels w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="box bg-white border border-gray-300 rounded-xl px-4 py-3">
              <h1 className="text-sm text-gray-500">Total Paid</h1>
              <h1 className="text-green-600 text-4xl font-bold flex flex-row items-center mt-2">
                <span className="text-[28px] mr-1">{<IndianRupee />}</span>
                {totalPaidAmount.toFixed(2)}
              </h1>
            </div>
            <div className="box bg-white border border-gray-300 rounded-xl px-4 py-3">
              <h1 className="text-sm text-gray-500">Total Pending</h1>
              <h1 className="text-red-600 text-4xl font-bold flex flex-row items-center mt-2">
                <span className="text-[28px] mr-1">{<IndianRupee />}</span>
                {totalPendingAmount.toFixed(2)}
              </h1>
            </div>
          </div>
          <div className="payroll-table">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-200">
                  <thead className="bg-zinc-50 text-left text-sm font-semibold text-zinc-600">
                    <tr>
                      <th className="px-4 py-3">Employee</th>
                      <th className="px-4 py-3">Month</th>
                      <th className="px-4 py-3">Gross Pay</th>
                      <th className="px-4 py-3">Deductions</th>
                      <th className="px-4 py-3">Net Pay</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-sm">
                    {filtered.map((r, i) => (
                      <tr key={i} className="hover:bg-zinc-50/70">
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-zinc-900">
                          {r.employee}
                        </td>
                        <td className="px-4 py-3 text-zinc-600">{r.month}</td>
                        <td className="px-4 py-3 tabular-nums">
                          {currency(r.gross)}
                        </td>
                        <td className="px-4 py-3 tabular-nums text-rose-600">
                          -{currency(r.deductions)}
                        </td>
                        <td className="px-4 py-3 tabular-nums text-emerald-600">
                          {currency(r.net)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={
                              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium " +
                              (r.status === "paid"
                                ? "bg-emerald-600/10 text-emerald-600 ring-1 ring-inset ring-emerald-600/20"
                                : "bg-zinc-900 text-white")
                            }
                          >
                            {r.status === "paid" ? (
                              <CheckCircle2 className="h-3.5 w-3.5" />
                            ) : (
                              <Clock className="h-3.5 w-3.5" />
                            )}
                            {r.status}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-2 ">
                            <button
                              className="inline-flex items-center justify-center rounded-full border border-zinc-300 p-1.5 text-zinc-600 hover:bg-zinc-50 cursor-pointer"
                              title="View details"
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                            <button
                              className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 cursor-pointer"
                              title="Process payroll"
                            >
                              Process
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {filtered.length === 0 && (
                      <tr>
                        <td
                          colSpan={7}
                          className="px-4 py-10 text-center text-zinc-500"
                        >
                          No results.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
