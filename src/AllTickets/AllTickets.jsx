import React, { use, useState } from "react";
import { toast } from 'react-toastify';

const AllTickets = ({ fetchTickets, setCounter, setReCounter }) => {
  const tickets = use(fetchTickets);

  const [selectedTasks, setSelectedTasks] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);
  const [remainingTickets, setRemainingTickets] = useState(tickets);

  const handleSelect = (ticket) => {
    toast.info('Task in-progress...')
    if (!selectedTasks.find((t) => t.id === ticket.id)) {
      setSelectedTasks((prev) => [...prev, ticket]);
      setCounter((count) => count + 1);
    }
  };

  const handleComplete = (task) => {
    toast.success("Task Resolved");
    setResolvedTasks((prev) => [...prev, task]);
    setReCounter((count) => count + 1);
    setSelectedTasks((prev) => prev.filter((t) => t.id !== task.id));
    setCounter((count) => count - 1);
    setRemainingTickets((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
          Customer Tickets
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {remainingTickets.map((ticket) => {
            const statusColor =
              ticket.priority === "HIGH PRIORITY"
                ? "badge-success"
                : ticket.priority === "MEDIUM PRIORITY"
                ? "badge-warning"
                : "badge-success";

            const priorityColor =
              ticket.priority === "HIGH PRIORITY"
                ? "text-red-500"
                : ticket.priority === "MEDIUM PRIORITY"
                ? "text-yellow-500"
                : "text-green-500";

            return (
              <div
                key={ticket.id}
                onClick={() => handleSelect(ticket)}
                className="cursor-pointer transition-transform hover:scale-[1.02] bg-base-100 shadow-md rounded-xl p-4 border border-gray-200 w-full"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h2 className="text-base md:text-lg font-semibold text-gray-800">
                    {ticket.title}
                  </h2>
                  <div
                    className={`badge ${statusColor} badge-sm px-3 py-2 text-xs mt-1 sm:mt-0`}
                  >
                    {ticket.status}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {ticket.description}
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm">
                  <div className="mb-2 sm:mb-0">
                    <p className="text-gray-500">{ticket.id}</p>
                    <p className={`${priorityColor} font-medium`}>
                      {ticket.priority}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">
                      {ticket.customer}
                    </p>
                    <p className="text-gray-500 text-xs">
                      <i className="fa-regular fa-calendar"></i>{" "}
                      {ticket.createdAt}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-base-200 p-4 rounded-xl shadow-md h-fit">
        <h3 className="text-lg md:text-xl font-bold mb-3 text-center md:text-left">
          Task Status
        </h3>

        {selectedTasks.length === 0 ? (
          <p className="text-gray-500 text-sm mb-6 text-center md:text-left">
            Select one or more tickets to add to Task Status
          </p>
        ) : (
          selectedTasks.map((task) => (
            <div
              key={task.id}
              className="bg-base-100 p-3 rounded-lg shadow-sm mb-4"
            >
              <h4 className="font-semibold text-gray-800">{task.title}</h4>
              <button
                onClick={() => handleComplete(task)}
                className="btn btn-sm btn-success mt-2 w-full"
              >
                Complete
              </button>
            </div>
          ))
        )}

        <h3 className="text-md md:text-lg font-semibold mt-6 mb-2 text-center md:text-left">
          Resolved Task
        </h3>

        {resolvedTasks.length === 0 ? (
          <p className="text-gray-500 text-sm text-center md:text-left">
            No resolved tasks yet.
          </p>
        ) : (
          <ul className="list-disc ml-5 text-sm text-gray-700">
            {resolvedTasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllTickets;
