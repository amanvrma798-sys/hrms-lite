import { useEffect, useState } from "react";
import API from "../api/api";
import Card from "../components/Card";
import Loader from "../components/Loader";
import ErrorAlert from "../components/ErrorAlert";
import { Users, CheckCircle, XCircle } from "lucide-react";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/attendance/dashboard/")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader />
      </div>
    );
  }

  const stats = [
    {
      label: "Total Employees",
      value: data?.total_employees ?? "--",
      icon: Users,
      color: "blue",
    },
    {
      label: "Present Today",
      value: data?.present_today ?? "--",
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Absent Today",
      value: data?.absent_today ?? "--",
      icon: XCircle,
      color: "red",
    },
  ];

  const colorStyles = {
    blue: {
      text: "text-blue-600",
      bg: "bg-blue-100",
    },
    green: {
      text: "text-green-600",
      bg: "bg-green-100",
    },
    red: {
      text: "text-red-600",
      bg: "bg-red-100",
    },
  };

  return (
    <>
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-gray-800">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-2">
          Monitor employee and attendance insights in real time.
        </p>
      </div>

      <ErrorAlert message={error} />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const style = colorStyles[stat.color];

          return (
            <Card
              key={index}
              className="flex items-center justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <p className="text-gray-500 text-sm">
                  {stat.label}
                </p>
                <h2
                  className={`text-4xl font-bold mt-3 ${style.text}`}
                >
                  {stat.value}
                </h2>
              </div>

              <div
                className={`p-4 rounded-xl ${style.bg}`}
              >
                <Icon
                  size={32}
                  className={style.text}
                />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Summary Section */}
      <div className="mt-12">
        <Card
          title="System Summary"
          subtitle="Overview of HRMS Lite operations"
        >
          <p className="text-gray-600 leading-relaxed text-sm">
            HRMS Lite enables administrators to efficiently manage
            employee records and monitor daily attendance in a
            centralized system. The dashboard provides real-time
            insights to maintain workforce transparency and
            operational accuracy.
          </p>
        </Card>
      </div>
    </>
  );
}