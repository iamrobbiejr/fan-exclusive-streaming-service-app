import React from 'react';

const Dashboard = () => {
  return (
      <>
        <div className="lg:flex lg:items-center lg:justify-between mx-auto container p-4">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Welcome <span className="capitalize">John Doe</span>
            </h2>
            <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <div
                    className="px-2 text-xs text-purple-500 bg-gray-100 font-bold rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                  FREE PLAN
                </div>
              </div>
            </div>
          </div>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Live Streams</h3>
      <p>Check out the latest live streams from your favorite creators.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Exclusive Content</h3>
      <p>Access exclusive content from your subscribed creators.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Community</h3>
      <p>Join discussions and interact with other fans in our community forums.</p>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
      <p>Stay updated on upcoming events and live performances.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Your Subscriptions</h3>
          <p>Manage your subscriptions and billing information.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Notifications</h3>
          <p>View your latest notifications and updates.</p>
        </div>
      </div>
      </>
  );
};

export default Dashboard;

