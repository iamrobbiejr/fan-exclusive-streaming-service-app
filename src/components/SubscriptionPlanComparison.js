import React from 'react';

const SubscriptionPlanComparison = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: ['Access to basic content', 'Limited live streams', 'Community forum access'],
    },
    {
      name: 'Premium',
      price: '$19.99/month',
      features: ['Access to all content', 'Unlimited live streams', 'Priority community support', 'Exclusive merchandise discounts'],
    },
    {
      name: 'VIP',
      price: '$29.99/month',
      features: ['All Premium features', 'Early access to new content', 'Monthly virtual meet-and-greet with creators', 'Ad-free experience'],
    },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">Subscription Plan Comparison</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
            <p className="text-lg font-semibold mb-4">{plan.price}</p>
            <ul className="list-disc list-inside">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlanComparison;

